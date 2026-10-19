export async function getLeetCodeStats(username: string) {
  const fallback = { easy: 206, medium: 346, hard: 104, total: 656 };
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: `https://leetcode.com/u/${username}/`
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username }
      }),
      next: { revalidate: 600 }
    });

    if (!res.ok) {
      console.warn(
        `Failed to fetch leetcode stats for ${username}: status ${res.status}`
      );
      return fallback;
    }

    const json = await res.json();
    const stats =
      json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
    const easy =
      stats.find((s: any) => s.difficulty.toUpperCase() === "EASY")?.count || 0;
    const medium =
      stats.find((s: any) => s.difficulty.toUpperCase() === "MEDIUM")?.count ||
      0;
    const hard =
      stats.find((s: any) => s.difficulty.toUpperCase() === "HARD")?.count || 0;
    const total = easy + medium + hard;

    if (total === 0) {
      return fallback;
    }

    return {
      easy,
      medium,
      hard,
      total
    };
  } catch (error) {
    console.error(`Error fetching LeetCode stats for ${username}:`, error);
    return fallback;
  }
}
