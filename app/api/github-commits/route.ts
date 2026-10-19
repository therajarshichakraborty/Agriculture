import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username query parameter is required" },
      { status: 400 }
    );
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Rajarshis-Portfolio"
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/search/commits?q=author:${username}&sort=author-date&order=desc&per_page=50`,
      {
        headers,
        next: { revalidate: 30 } // Cache response for 1 minute on the server
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch commits from GitHub: status ${response.status}`
      );
      if (response.status === 403) {
        return NextResponse.json(
          { error: "GitHub API rate limit reached. Please check back later." },
          { status: 403 }
        );
      }
      return NextResponse.json(
        { error: "Failed to load GitHub activity." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
      }
    });
  } catch (error: any) {
    console.error("Error fetching GitHub commits:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
