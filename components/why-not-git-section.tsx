"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Save, Users, SeparatorHorizontal } from "lucide-react"

interface WhyNotGitSectionProps {
  onOpenInstall?: (tab?: string) => void
}

export default function WhyNotGitSection({ onOpenInstall }: WhyNotGitSectionProps) {
  const features = [
    {
      icon: Save,
      title: "Built in Minutes",
      description: "Using advanced AI tools, we build your site in real time — often in under 5 minutes.",
    },
    {
      icon: SeparatorHorizontal,
      title: "Modern Tech Stack",
      description: "We deploy to blazing-fast infrastructure: Next.js, Vercel, Tailwind, and more.",
    },
    {
      icon: Users,
      title: "No-Risk Preview",
      description: "You get a fully working preview of your new website before you commit. Try it for 14 days.",
    },
    {
      icon: Lightbulb,
      title: "Customizable & Scalable",
      description: "Your site is built to grow — mobile-first, SEO-optimized, and fully editable.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
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
            Why Businesses Choose LAULA
          </h2>
          <p
            className="max-w-2xl mx-auto text-white/90 mb-8"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "clamp(18px, 3vw, 24px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            We focus on the vision. AI does the rest.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-white font-semibold mb-3"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                      fontSize: "18px",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-white/80"
                    style={{
                      fontFamily: "GeistMono, monospace",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p
            className="text-white/80 mb-6 max-w-3xl mx-auto"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Forget website headaches. Focus on your business.
          </p>

          {onOpenInstall && (
            <Button
              onClick={() => onOpenInstall("get-started")}
              className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg"
              style={{
                fontFamily: "GeistMono, monospace",
                letterSpacing: "0.56px",
                height: "48px",
              }}
            >
              <ArrowRight className="mr-2 h-4 w-4 stroke-[2.5px]" />
              GET STARTED
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
