// app/api/github/route.ts
export async function GET() {
  const query = `
    {
      user(login: "${process.env.GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
        followers {
          totalCount
        }
        repositories(privacy: PUBLIC) {
          totalCount
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`, 
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store", // important for fresh data
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }

  const json = await res.json();
  const data = json.data.user;

  return Response.json({
    followers: data.followers.totalCount,
    publicRepos: data.repositories.totalCount,
    contributions: data.contributionsCollection.contributionCalendar.totalContributions,
  });
}
