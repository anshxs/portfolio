import React, { useState, useEffect } from "react";
import { Search, Calendar, Clock, Tag, ChevronDown } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const BlogComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [open, setOpen] = useState(false);

  // Listen for Shift + S to open dialog
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "S" && e.shiftKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    slug: string;
    recently?: boolean;
  };

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "My 2025 Stack as a Frontend Developer",
      excerpt:
        "As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better, faster, and more maintainable projects!",
      date: "2025-03-19",
      readTime: "4 min read",
      tags: ["frontend", "2025", "productivity"],
      image: "/sign.png",
      slug: "my-2025-stack-frontend-developer",
      recently: true,
    },
    {
      id: 2,
      title: "How to Build a Blog with Next.js and MDX",
      excerpt:
        "Learn how to create a modern, performant blog using Next.js 14 and MDX. We'll cover everything from setup to deployment, including SEO optimization and responsive design patterns.",
      date: "2025-02-01",
      readTime: "8 min read",
      tags: ["nextjs", "react", "mdx", "web"],
      image: "/ours.png",
      slug: "build-blog-nextjs-mdx",
      recently: true,
    },
    {
      id: 3,
      title: "Advanced CSS Grid Patterns for Modern Layouts",
      excerpt:
        "Explore powerful CSS Grid techniques that will transform your web layouts. From complex magazine-style designs to responsive card grids, master the art of modern CSS.",
      date: "2025-01-15",
      readTime: "6 min read",
      tags: ["css", "grid", "design", "web"],
      image: "/profile.png",
      slug: "advanced-css-grid-patterns",
    },
    {
      id: 4,
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Discover essential TypeScript patterns and practices that scale. Learn about advanced types, error handling, and architectural decisions for enterprise applications.",
      date: "2024-12-10",
      readTime: "12 min read",
      tags: ["typescript", "javascript", "architecture", "enterprise"],
      image: "/heart.png",
      slug: "typescript-best-practices",
    },
  ];

  const topics = [
    "nextjs",
    "react",
    "css",
    "tailwindcss",
    "java",
    "flexbox",
    "design",
    "tips",
    "grid",
    "tools",
    "vite",
    "core-concept",
    "git",
    "pattern",
    "typescript",
    "setup",
    "form",
    "productivity",
    "web",
    "animation",
  ];

  // Filter and sort posts
  useEffect(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    // Sort posts
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTimeAgo = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    } else {
      const diffInMonths = Math.floor(diffInDays / 30);
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="min-h-screen bg-white mt-40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-orange-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="relative z-20 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center mb-4 md:mb-4 max-w-xl mx-auto"
            >
              <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
                THE BLOG
              </p>
              <span>
                <span className="font-semibold">Handpicked insights from</span>{" "}
                <span style={{ fontFamily: "lovelace" }}>
                  <AuroraText
                    className="font-lovelace"
                    colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
                  >
                    the pensieve
                  </AuroraText>
                </span>
              </span>
            </h2>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  //   disabled={true}
                  onClick={() => setOpen(true)}
                  placeholder="Search..."
                  className="w-full bg-secondary border rounded-full py-3 pl-12 pr-20 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <CommandDialog open={open} onOpenChange={setOpen}>
                  <Command>
                    <CommandInput
                      placeholder="Search..."
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                    />
                    <CommandList>
                      <CommandItem onSelect={() => setOpen(false)}>
                        Result 1
                      </CommandItem>
                      <CommandItem onSelect={() => setOpen(false)}>
                        Result 2
                      </CommandItem>
                    </CommandList>
                  </Command>
                </CommandDialog>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-500 text-sm">Shift + S</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <aside className="mt-12 space-y-8">
              {/* Sort Options */}
              <div className="flex items-center justify-between mb-4">
                <Select
                  value={sortBy}
                  onValueChange={(value: string) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[280px] bg-secondary py-6 rounded-2xl justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-black" />
                      <div className="flex flex-col items-start">
                        <p className="font-bold"><SelectValue/></p>
                        <p>Select the filter you want</p>
                      </div>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort by</SelectLabel>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Topics */}
              <div className="bg-secondary border rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="w-4 h-4 text-black" />
                  <h3 className="text-md font-semibold">Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => toggleTag(topic)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedTags.includes(topic)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 text-black hover:text-white hover:bg-blue-500"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="mt-4 text-sm text-blue-600 hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    Clear all tags
                  </button>
                )}
              </div>
            </aside>
            {/* Blog Posts */}
            <div className="lg:col-span-3 mt-12">
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-secondary border transition-all duration-300 h-[200px]">
                      {/* Post Image */}
                      <div className="sm:w-44 sm:flex-shrink-0">
                        <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-orange-500/20">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover "
                          />
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="flex-1 space-y-1">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {formatDate(post.date)} ({getTimeAgo(post.date)})
                            </span>
                          </div>
                          {post.recently && (
                            <span className="bg-green-500/20 text-green-600 px-2 py-1 rounded-full text-xs">
                              Recently released
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-md sm:text-2xl font-bold  transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags and Read Time */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-white bg-blue-600 py-1 px-2 rounded-full hover:text-black hover:bg-amber-600 transition-colors cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTag(tag);
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg">
                    No posts found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTags([]);
                    }}
                    className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogComponent;
