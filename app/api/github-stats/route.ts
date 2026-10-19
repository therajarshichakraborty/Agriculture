import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface CalendarData {
  total: Record<string, number>;
  contributions: Contribution[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const yearParam = searchParams.get("year");
  const requestedYear = yearParam ? parseInt(yearParam, 10) : null;

  if (!username) {
    return NextResponse.json(
      { error: "Username query parameter is required" },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "Rajarshis-Portfolio"
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    // 1. Fetch contribution calendar (GraphQL API if token exists, fallback to jogruber)
    let calendar: CalendarData | null = null;
    let gqlReposCount: number | null = null;

    if (token) {
      try {
        const currentYear = new Date().getFullYear();
        const targetYear = requestedYear ?? currentYear;

        // Date range: if requestedYear is null → rolling window (last year),
        // otherwise → Jan 1 – Dec 31 of that exact year.
        let from: string, to: string;
        if (requestedYear !== null) {
          from = `${requestedYear}-01-01T00:00:00Z`;
          to = `${requestedYear}-12-31T23:59:59Z`;
        } else {
          // rolling: last 12 months
          const toDate = new Date();
          const fromDate = new Date(toDate);
          fromDate.setFullYear(fromDate.getFullYear() - 1);
          from = fromDate.toISOString();
          to = toDate.toISOString();
        }

        // Build from/to for each past year to get activeYears
        const joinYear = 2024; // your GitHub join year
        const yearsToCheck = Array.from(
          { length: currentYear - joinYear + 1 },
          (_, i) => joinYear + i
        );

        // Compose per-year fragments to discover activeYears
        const yearFragments = yearsToCheck
          .map(
            (y) =>
              `year${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${y}-12-31T23:59:59Z") { contributionCalendar { totalContributions } }`
          )
          .join("\n");

        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              repositories(ownerAffiliations: [OWNER, COLLABORATOR]) {
                totalCount
              }
              rollingCalendar: contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      contributionLevel
                    }
                  }
                }
              }
              ${yearFragments}
            }
          }
        `;

        const graphqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            ...headers,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query,
            variables: { username, from, to }
          }),
          next: { revalidate: 60 }
        });

        console.log("gh response : ", graphqlRes);

        if (graphqlRes.ok) {
          const resBody = await graphqlRes.json();
          const rollingRaw =
            resBody?.data?.user?.rollingCalendar?.contributionCalendar;

          if (resBody?.data?.user?.repositories?.totalCount !== undefined) {
            gqlReposCount = resBody.data.user.repositories.totalCount;
          }

          // Derive activeYears from per-year totalContributions
          const activeYears: number[] = yearsToCheck.filter(
            (y) =>
              (resBody?.data?.user?.[`year${y}`]?.contributionCalendar
                ?.totalContributions ?? 0) > 0
          );

          console.log("active years : ", activeYears);

          if (rollingRaw) {
            const contributions: Contribution[] = [];
            const weeks = rollingRaw.weeks || [];

            weeks.forEach((week: any) => {
              (week.contributionDays || []).forEach((day: any) => {
                let level: 0 | 1 | 2 | 3 | 4 = 0;
                switch (day.contributionLevel) {
                  case "FIRST_QUARTILE":
                    level = 1;
                    break;
                  case "SECOND_QUARTILE":
                    level = 2;
                    break;
                  case "THIRD_QUARTILE":
                    level = 3;
                    break;
                  case "FOURTH_QUARTILE":
                    level = 4;
                    break;
                  default:
                    level = 0;
                }
                contributions.push({
                  date: day.date,
                  count: day.contributionCount,
                  level
                });
              });
            });

            calendar = {
              total: {
                [targetYear.toString()]: rollingRaw.totalContributions
              },
              contributions,
              activeYears
            } as any;
          }
        }
      } catch (graphqlErr) {
        console.error(
          "Error fetching GitHub GraphQL contributions:",
          graphqlErr
        );
      }
    }

    // Fallback if token is missing, or if GraphQL fetch failed
    if (!calendar) {
      try {
        const yearStr = requestedYear ? String(requestedYear) : "last";
        const [rollingRes, fullRes] = await Promise.all([
          fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=${yearStr}`,
            { next: { revalidate: 30 } }
          ),
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
            next: { revalidate: 30 }
          })
        ]);

        if (rollingRes.ok && fullRes.ok) {
          const rollingData = await rollingRes.json();
          const fullData = await fullRes.json();
          const currentYearStr = new Date().getFullYear().toString();

          // Derive activeYears from jogruber total keys
          const activeYears: number[] = Object.keys(fullData.total || {})
            .map(Number)
            .filter((y) => !isNaN(y) && fullData.total[y] > 0)
            .sort((a, b) => b - a);

          calendar = {
            total: {
              [requestedYear ?? currentYearStr]:
                fullData.total[requestedYear ?? currentYearStr] ??
                rollingData.total?.lastYear ??
                0
            },
            contributions: rollingData.contributions,
            activeYears
          } as any;
        }
      } catch (fallbackErr) {
        console.error(
          "Error fetching fallback jogruber calendar:",
          fallbackErr
        );
      }
    }

    const fetchHelper = async (url: string, label: string) => {
      try {
        const res = await fetch(url, { headers, next: { revalidate: 60 } });
        if (!res.ok) {
          const bodyText = await res.text();
          console.error(
            `[GitHub API error] ${label}: status ${res.status}, body: ${bodyText.slice(0, 200)}`
          );
          return null;
        }
        return await res.json();
      } catch (err) {
        console.error(`[GitHub API error] ${label} fetch exception:`, err);
        return null;
      }
    };

    // 2. Fetch stats: Commits, PRs, Issues, Reviews, Profile and Repos
    const statsPromises = [
      fetchHelper(
        `https://api.github.com/search/commits?q=author:${username}`,
        "Commits Count"
      ),
      fetchHelper(
        `https://api.github.com/search/issues?q=author:${username}+type:pr`,
        "PRs Count"
      ),
      fetchHelper(
        `https://api.github.com/search/issues?q=author:${username}+type:issue`,
        "Issues Count"
      ),
      fetchHelper(
        `https://api.github.com/search/issues?q=reviewed-by:${username}+type:pr`,
        "Reviews Count"
      ),
      fetchHelper(`https://api.github.com/users/${username}`, "User Profile"),
      fetchHelper(
        `https://api.github.com/users/${username}/repos?per_page=100&type=all`,
        "User Repos"
      ),
      fetchHelper(
        `https://api.github.com/search/repositories?q=user:${username}+fork:true`,
        "Repos Search Count"
      )
    ];

    const [
      commitsData,
      prsData,
      issuesData,
      reviewsData,
      profileData,
      reposData,
      reposSearchData
    ] = await Promise.all(statsPromises);

    let totalStars = 0;
    if (Array.isArray(reposData)) {
      totalStars = reposData.reduce(
        (acc: number, repo: any) => acc + (repo.stargazers_count || 0),
        0
      );
    }

    const reposCount =
      gqlReposCount ??
      reposSearchData?.total_count ??
      (Array.isArray(reposData) ? reposData.length : null) ??
      profileData?.public_repos ??
      null;

    const stats = {
      totalCommits: commitsData?.total_count ?? null,
      prCount: prsData?.total_count ?? null,
      issuesCount: issuesData?.total_count ?? null,
      reviewCount: reviewsData?.total_count ?? null,
      reposCount,
      starsCount: totalStars
    };

    return NextResponse.json(
      {
        calendar,
        stats
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate"
        }
      }
    );
  } catch (error: any) {
    console.error("Error in github-stats api route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
