import React, { useState, useEffect } from "react";
import { Users, Star, GitBranch, GitFork, Loader } from "lucide-react";

// Mock AuroraText component since it's not available
type AuroraTextProps = {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
};

const AuroraText = ({ children, className, colors }: AuroraTextProps) => (
  <span
    className={`bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

const GitHubActivity = () => {
  type User = {
    login: string;
    id: number;
    avatar_url: string;
    name?: string;
    bio?: string;
    followers: number;
    following: number;
    public_repos: number;
    location?: string;
    created_at: string;
  };

  const [userData, setUserData] = useState<User | null>(null);

  type Repo = {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
    description?: string;
    language?: string;
  };

  const [reposData, setReposData] = useState<Repo[]>([]);

  type ContributionDay = {
    contributionCount: number;
    date: string;
    weekday: number;
  };

  type ContributionWeek = {
    contributionDays: ContributionDay[];
  };

  type ContributionsData = {
    totalContributions: number;
    weeks: ContributionWeek[];
  };

  const [contributionsData, setContributionsData] =
    useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "anshxs";
  // Use environment variable or fallback (in production, use process.env.REACT_APP_GITHUB_TOKEN)
  const GITHUB_TOKEN =
    process.env.GITHUB_TOKEN || "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";

  const CONTRIBUTIONS_QUERY = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-[#EBEBEB] border border-gray-200";
    if (count <= 3) return "bg-[#BDBDBD]";
    if (count <= 6) return "bg-[#929292]";
    if (count <= 9) return "bg-[#696969]";
    return "bg-[#424242]";
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        // Fetch user data (REST API)
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const user = await userResponse.json();

        // Fetch repositories data (REST API)
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
        const repos = await reposResponse.json();

        // Fetch contributions data (GraphQL API) - Past 12 months
        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setFullYear(fromDate.getFullYear() - 1);

        const contributionsResponse = await fetch(
          "https://api.github.com/graphql",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: CONTRIBUTIONS_QUERY,
              variables: {
                username,
                from: fromDate.toISOString(),
                to: toDate.toISOString(),
              },
            }),
          }
        );

        if (!contributionsResponse.ok) {
          throw new Error("Failed to fetch contributions data");
        }

        const contributionsResult = await contributionsResponse.json();

        if (contributionsResult.errors) {
          throw new Error(contributionsResult.errors[0].message);
        }

        const contributionCalendar =
          contributionsResult.data.user.contributionsCollection
            .contributionCalendar;

        setUserData(user);
        setReposData(repos);
        setContributionsData(contributionCalendar);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Calculate total stars and forks
  const totalStars = reposData.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );
  const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);
  const publicRepos = userData?.public_repos || 0;

  // Generate contribution grid in GitHub's format (7 rows × weeks for 12 months)
  const generateContributionGrid = () => {
    if (!contributionsData?.weeks) {
      return [];
    }

    const weeks = contributionsData.weeks;
    const numWeeks = weeks.length;

    // Create a 7 x numWeeks matrix (7 days × actual number of weeks)
    const grid = Array(7)
      .fill(null)
      .map(() => Array(numWeeks).fill(null));

    // Fill the grid with contribution data
    weeks.forEach((week, weekIndex) => {
      week.contributionDays.forEach((day) => {
        const dayOfWeek = day.weekday; // 0 = Sunday, 1 = Monday, etc.
        if (dayOfWeek < 7 && weekIndex < numWeeks) {
          grid[dayOfWeek][weekIndex] = day;
        }
      });
    });

    return grid;
  };

  // Generate month labels with perfect positioning for 12 months
  const generateMonthLabels = () => {
    if (!contributionsData?.weeks || contributionsData.weeks.length === 0) {
      return [];
    }

    const monthLabels: { name: string; position: number }[] = [];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let currentMonth = -1;

    contributionsData.weeks.forEach((week, weekIndex) => {
      // Get the first day of the week to determine month
      const firstDay = week.contributionDays.find(
        (day) => day.contributionCount >= 0
      );
      if (firstDay) {
        const date = new Date(firstDay.date);
        const month = date.getMonth();

        // If this is a new month, add label at the beginning of that month's weeks
        if (month !== currentMonth) {
          monthLabels.push({
            name: monthNames[month],
            position: weekIndex,
          });
          currentMonth = month;
        }
      }
    });

    return monthLabels;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600">
            Loading GitHub data for @{username}...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-red-600 mb-4">Error: {error}</p>
          {(error.includes("token") || error.includes("Unauthorized")) && (
            <div className="text-sm text-gray-600 mb-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-800 mb-2">
                GitHub Token Required
              </p>
              <p className="text-left">
                To use this component, you need to:
                <br />
                1. Create a GitHub Personal Access Token
                <br />
                2. Add it to your environment as REACT_APP_GITHUB_TOKEN
                <br />
                3. Or update the GITHUB_TOKEN variable in the code
              </p>
            </div>
          )}
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="mb-8">
            <p className="mb-3 text-xs font-normal tracking-widest text-black/60 uppercase md:text-sm">
              Contributions
            </p>
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance">
              GitHub{" "}
              <span style={{ fontFamily: "lovelace" }}>
                <AuroraText
                  className="font-bold"
                  colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
                >
                  Activity
                </AuroraText>
              </span>
            </h1>
          </div>

          {/* <p className="text-gray-600 text-sm max-w-2xl mx-auto -mt-6 -mb-6 leading-relaxed">
            Welcome to my third (and official) GitHub profile. The first two got
            a bit... experimental. This one's the clean slate for my serious
            (but fun) work.
          </p> */}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-4">
          <div className="bg-secondary h-[160px] border-2 rounded-xl p-3">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase text-center tracking-wide mb-1">
              Followers
            </div>
            <div className="text-3xl text-center font-bold text-gray-900">
              {userData?.followers || 0}
            </div>
          </div>

          <div className="bg-secondary h-[160px] border-2 rounded-xl p-3">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase text-center tracking-wide mb-1">
              Total Stars
            </div>
            <div className="text-3xl font-bold text-center text-gray-900">
              {totalStars}
            </div>
          </div>

          <div className="bg-secondary h-[160px] border-2 rounded-xl p-3">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <GitBranch className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase text-center tracking-wide mb-1">
              Public Repos
            </div>
            <div className="text-3xl font-bold text-center text-gray-900">
              {publicRepos}
            </div>
          </div>

          <div className="bg-secondary h-[160px] border-2 rounded-xl p-3">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <GitFork className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase text-center tracking-wide mb-1">
              Total Forks
            </div>
            <div className="text-3xl font-bold text-center text-gray-900">
              {totalForks}
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="bg-secondary max-w-4xl mx-auto rounded-xl px-5 border-2">
          <h2 className="text-[14px] text-center text-gray-600 font-bold my-4">
            Contribution Graph
          </h2>

          {/* Container for labels and grid */}
          <div className="flex">
            {/* Main grid container */}
            <div className="flex-1 overflow-x-auto">
              {/* Month labels with perfect positioning */}
              <div className="relative mb-3 h-4">
                {generateMonthLabels().map((monthData, index) => (
                  <span
                    key={`${monthData.name}-${index}-${monthData.position}`}
                    className="absolute text-xs text-gray-700 font-medium"
                    style={{
                      left: `${monthData.position * 15}px`,
                      transform:
                        monthData.position > 0 ? "translateX(-50%)" : "none",
                    }}
                  >
                    {monthData.name}
                  </span>
                ))}
              </div>

              {/* Contribution grid - GitHub style (7 rows × weeks for 12 months) */}
              <div
                className="flex flex-col gap-1"
                style={{ minWidth: "fit-content" }}
              >
                {generateContributionGrid().map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-1">
                    {row.map((day, colIndex) => {
                      const count = day?.contributionCount || 0;
                      const colorClass = getContributionColor(count);
                      const date = day?.date
                        ? new Date(day.date).toLocaleDateString()
                        : "";

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`w-3 h-3 rounded-[3px] ${colorClass} ${
                            !day
                              ? "opacity-0"
                              : "hover:ring-2 hover:ring-gray-400 hover:ring-offset-1 cursor-pointer"
                          }`}
                          title={
                            day
                              ? `${date}: ${count} contribution${
                                  count !== 1 ? "s" : ""
                                }`
                              : ""
                          }
                          style={{ minWidth: "12px", minHeight: "12px" }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <span className="text-gray-800 text-xs font-medium">
              {contributionsData?.totalContributions || 0} contributions in the
              last year
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-[#EBEBEB] border border-gray-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-[#BDBDBD] rounded-sm"></div>
                <div className="w-3 h-3 bg-[#929292] rounded-sm"></div>
                <div className="w-3 h-3 bg-[#696969] rounded-sm"></div>
                <div className="w-3 h-3 bg-[#424242] rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-1 bg-secondary text-black rounded-full font-medium text-[14px] border-2"
          >
            View full profile on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivity;
