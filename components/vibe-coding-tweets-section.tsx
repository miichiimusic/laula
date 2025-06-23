"use client"

import type React from "react"

import { useState } from "react"

interface Tweet {
  text: string
  handle: string
  name: string
  url: string
  profileImage: string
  isHighlighted?: boolean
  isRetweet?: boolean
  originalTweet?: {
    text: string
    handle: string
    name: string
  }
  stats?: {
    views?: string
    likes?: string
    retweets?: string
  }
}

const tweets: Tweet[] = [
  // Featured Tweet - Ben South's retweet with commentary (most viral)
  {
    text: "💡 Idea from a client: I own a boutique gym and need a site that makes it easy for new members to sign up, view class schedules, and learn about our trainers. It should feel energetic and modern, but not overwhelming — something that motivates without feeling too corporate.",
    handle: "@bnj",
    name: "Ben South",
    profileImage: "/images/profiles/bnj.jpg",
    isRetweet: true,
    originalTweet: {
      text: 'Cursor/Windsurf need a way to "save" a checkpoint and name it—versioning for vibe coders',
      handle: "@bnj",
      name: "Ben South",
    },
    stats: {
      views: "88.9K",
      likes: "366",
      retweets: "22",
    },
  },
  // Second - Tom Dörr (389.6K views)
  {
    text: "🧠 Prompt by LAULA: Design a sleek landing page for a tech startup offering AI-powered analytics tools.” 💡 What LAULA Does: We generate a bold, conversion-focused layout with clear CTAs, sleek iconography, and responsive sections — all optimized for SaaS storytelling.",
    handle: "@tom_doerr",
    name: "Tom Dörr",
    profileImage: "/images/profiles/tom.jpg",
    stats: {
      views: "389.6K",
      likes: "3.8K",
      retweets: "219",
    },
  },
  // Third - Kitze (369.5K views)
  {
    text: "💡 Idea from a client: I’m a freelance photographer and I need a portfolio site that feels artistic but clean. I want to showcase my work by category, have an about page with my story, and a contact form that feels personal. It should load fast, look great on mobile, and let the photos speak for themselves.",
    handle: "@thekitze",
    name: "Kitze",
    profileImage: "/images/profiles/kitze.jpg",
    stats: {
      views: "369.5K",
      likes: "8.1K",
      retweets: "358",
    },
  },
  // Fourth - Ian Nuttall (31.4K views)
  {
    text: "💡 Idea from a client: I run a small interior design studio and want a website that feels high-end but personal. It should showcase my past projects, include client testimonials, and let people book a consultation directly. I want it to feel like an extension of my aesthetic — clean, elegant, and warm.",
    handle: "@iannuttall",
    name: "Ian Nuttall",
    profileImage: "/images/profiles/ian.jpg",
    stats: {
      views: "31.4K",
      likes: "333",
      retweets: "28",
    },
  },
  // Fifth - Ben South's original tweet
  {
    text: "🧠 Prompt by LAULA: Build a modern website for a multi-location dental clinic with location-specific landing pages, trust-building design elements, and a calming, clinical color scheme. Include an FAQ section, embedded booking system, and mobile-first layout.",
    handle: "@bnj",
    name: "Ben South",
    profileImage: "/images/profiles/bnj.jpg",
    stats: {
      views: "174.2K",
      likes: "1.1K",
      retweets: "62",
    },
  },
  // Sixth - CC Anuj (unknown views but included)
  {
    text: "🧠 Prompt by LAULA: Generate a fully responsive website for a local coffee shop chain with three locations. Design should feel cozy yet modern, include an interactive menu, location-specific pages with maps and hours, and a section for seasonal promotions. Prioritize mobile usability and strong local SEO structure.",
    handle: "@vid_anuj",
    name: "CC Anuj",
    profileImage: "/images/profiles/anuj.jpg",
    stats: {
      likes: "121",
      retweets: "31",
    },
  },
  // Seventh - anushk (951 views)
  {
    text: "💡 Idea from a client: I run a small law firm that specializes in immigration and family law. I need a professional website that builds trust, explains our services clearly, and makes it easy for people to request a consultation. It should include bilingual support and highlight client success stories.",
    handle: "@anushkmittal",
    name: "anushk",
    profileImage: "/images/profiles/anushk.jpg",
    stats: {
      views: "951",
      likes: "25",
    },
  },
]

interface VibeCodingTweetsSectionProps {
  onOpenInstall?: () => void
}

export default function VibeCodingTweetsSection({ onOpenInstall }: VibeCodingTweetsSectionProps) {
  const [expandedTweets, setExpandedTweets] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTweets((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const truncateText = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Outside gradient like other sections */}
        <div className="text-center mb-6 md:mb-12 px-4">
          <h2
            className="mb-6 font-semibold"
            style={{
              backgroundImage: "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
              color: "transparent",
              fontFamily: "GeistSans, sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 600,
              letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
              lineHeight: "1.15",
              textAlign: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            AI Coding is Exploding — Web Agencies Are Adopting It.
          </h2>
          <p
            className="max-w-3xl mx-auto text-white/80 mb-4"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "clamp(16px, 3vw, 20px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Here’s how we use AI and modern tools to streamline web design — every step, optimized.
          </p>
        </div>

        {/* Gradient Container - Matching other sections */}
        <div className="flex justify-center">
          <div
            className="gradient-container max-w-[1296px] w-full relative"
            style={{ background: "linear-gradient(135deg, #22d3ee 0%, #ff5c28 50%, #ff5c9d 100%)" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>

            {/* Noise Overlay */}
            <div className="noise-texture"></div>

            {/* Content */}
            <div className="relative z-10 pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
              {/* Enhanced Tweets Layout - Making 7 tweets feel substantial */}
              <div className="space-y-6 sm:space-y-8">
                {/* Featured Tweet - Most relevant (Ben South retweet with commentary) */}
                <div className="max-w-4xl mx-auto">
                  <a
                    href={tweets[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative transition-all duration-300 cursor-pointer rounded-[16px] sm:rounded-[20px] p-3 sm:p-6 md:p-10 bg-white/15 border border-white/30 sm:border-2 hover:border-white/50 hover:bg-white/20 backdrop-blur-sm"
                  >
                    {/* Tweet Content */}
                    <div className="mb-3 sm:mb-4 md:mb-8">
                      <p
                        className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
                        style={{
                          fontFamily: "GeistMono, monospace",
                          lineHeight: "1.6",
                          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        {expandedTweets.has(0)
                          ? tweets[0].text.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < tweets[0].text.split("\n").length - 1 && <br />}
                              </span>
                            ))
                          : truncateText(tweets[0].text, 150)}
                        {tweets[0].text.length > 150 && (
                          <button
                            onClick={(e) => toggleExpanded(0, e)}
                            className="ml-2 text-white/70 hover:text-white underline text-sm"
                            style={{ fontFamily: "GeistMono, monospace" }}
                          >
                            {expandedTweets.has(0) ? "show less" : "read more"}
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Author Info - Enhanced */}
                    
                  </a>
                </div>

                {/* Enhanced Stats Bar with more prominent styling */}
                <div className="flex justify-center">
                  <div className="bg-white/15 border-2 border-white/30 rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 flex items-center gap-4 sm:gap-6 md:gap-12 backdrop-blur-sm shadow-xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">5 Min</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">Build Time</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-white/40"></div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">100%</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">Uptime Hosting</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-white/40"></div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg sm:text-xl md:text-2xl font-mono">{"14 Day"}</div>
                      <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider">
                        Free Trial 
                      </div>
                    </div>
                  </div>
                </div>

                {/* Masonry Grid for remaining tweets */}
                <div className="columns-1 lg:columns-2 xl:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                  {tweets.slice(1).map((tweet, index) => {
                    const actualIndex = index + 1
                    return (
                      <a
                        key={actualIndex}
                        href={tweet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block relative transition-all duration-300 cursor-pointer rounded-[16px] p-4 sm:p-6 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 break-inside-avoid mb-4 sm:mb-6 backdrop-blur-sm"
                        style={{
                          transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`,
                        }}
                      >
                        {/* Original Tweet (if retweet) */}
                        {tweet.isRetweet && tweet.originalTweet && (
                          <div className="mb-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                            <p
                              className="text-white/80 text-sm leading-relaxed mb-2"
                              style={{
                                fontFamily: "GeistMono, monospace",
                                fontSize: "13px",
                                lineHeight: "1.5",
                              }}
                            >
                              {tweet.originalTweet.text}
                            </p>
                            <p
                              className="text-white/50 text-xs"
                              style={{
                                fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                              }}
                            >
                              {tweet.originalTweet.handle}
                            </p>
                          </div>
                        )}

                        {/* Tweet Content with truncation */}
                        <div className="mb-6">
                          <p
                            className="text-white/95 leading-relaxed"
                            style={{
                              fontFamily: "GeistMono, monospace",
                              fontSize: "15px",
                              lineHeight: "1.6",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {expandedTweets.has(actualIndex)
                              ? tweet.text.split("\n").map((line, i) => (
                                  <span key={i}>
                                    {line}
                                    {i < tweet.text.split("\n").length - 1 && <br />}
                                  </span>
                                ))
                              : truncateText(tweet.text, 120)}
                            {tweet.text.length > 120 && (
                              <button
                                onClick={(e) => toggleExpanded(actualIndex, e)}
                                className="ml-2 text-white/60 hover:text-white underline text-xs"
                                style={{ fontFamily: "GeistMono, monospace" }}
                              >
                                {expandedTweets.has(actualIndex) ? "less" : "more"}
                              </button>
                            )}
                          </p>
                        </div>

                        {/* Author Info */}
                        
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
