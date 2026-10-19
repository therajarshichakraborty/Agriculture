export async function getContestData(username: string) {
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
          query userContestRankingInfo($username: String!) {
            userContestRankingHistory(username: $username) {
              attended
              rating
              ranking
              contest {
                title
                startTime
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
        `Failed to fetch contest data for ${username}: status ${res.status}`
      );
      return [];
    }

    const json = await res.json();
    const history = json?.data?.userContestRankingHistory || [];
    return history.filter((item: any) => item.attended);
  } catch (error) {
    console.error(`Error fetching contest data for ${username}:`, error);
    return [];
  }
}
