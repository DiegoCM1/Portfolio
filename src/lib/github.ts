import { profile } from "@/content/profile";

export interface GithubRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
}

/**
 * Fetches public repos for the configured GitHub user.
 *
 * Uses Next ISR (`revalidate: 3600`) so new/updated repos surface hourly with
 * zero redeploys. Fails OPEN (returns []) so a rate-limit or API outage can
 * never break the build or a page render. A read-only GITHUB_TOKEN, if present,
 * raises the rate limit.
 */
export async function fetchRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${profile.socials.githubUser}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return [];

    const data: unknown = await res.json();
    if (!Array.isArray(data)) return [];

    return data
      .filter((r) => r && !r.fork && !r.archived && !r.private)
      .map(
        (r): GithubRepo => ({
          name: r.name,
          description: r.description,
          url: r.html_url,
          stars: r.stargazers_count ?? 0,
          language: r.language,
          topics: Array.isArray(r.topics) ? r.topics : [],
          updatedAt: r.updated_at,
        }),
      )
      .sort((a, b) => b.stars - a.stars || +new Date(b.updatedAt) - +new Date(a.updatedAt));
  } catch {
    return [];
  }
}
