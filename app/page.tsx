"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImage from "@/components/hero-image"
import FeatureVideo from "@/components/feature-video"
import Navbar from "@/components/navbar"
import InstallModal from "@/components/install-modal"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import SaveReviewRestoreSection from "@/components/save-review-restore-section"
import AgenticAISearchSection from "@/components/agentic-ai-search-section"
import WhyNotGitSection from "@/components/why-not-git-section"
import TestimonialsSection from "@/components/testimonials-section"
import VibeCodingTweetsSection from "@/components/vibe-coding-tweets-section"
import { useState } from "react"
import DeveloperStatsSection from "@/components/developer-stats-section"

// Direct Vercel Blob URLs for videos
const VIDEO_URLS = {
  savePreview:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-review-restore-g3BK0sricXTSPMzxK4iGrmXBUwPt11.mp4",
  crossIde: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cross-ides-PZyN9x34tNJsgQrbFkY3UUaatEaePh.mp4",
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialTab, setModalInitialTab] = useState("get-started")

  const openInstallModal = (tab = "get-started") => {
    setModalInitialTab(tab)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-black pt-32 text-white font-geist">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="max-w-[1920px] mx-auto relative px-6 md:px-8">
        {/* Hero Section */}
        <section className="relative rounded-[16px] rounded-all-devices mt-2 mb-6 md:h-[calc(100vh-180px)] font-geist text-white flex flex-col">
          {/* Gradient Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px]">
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                background: "linear-gradient(135deg, #22D3EE 0%, #FF5C28 50%, #FF5C9D 100%)",
              }}
            />
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-[38px] sm:pt-[50px] pb-8 md:pt-[70px] md:pb-12 z-10 flex flex-col h-full">
            {/* Mobile Layout (Stack: Text -> Image -> Buttons) */}
            <div className="flex flex-col md:hidden">
              <div className="mb-4">
                <h1
                  className="font-semibold mb-2 overflow-visible select-text heading-with-selection"
                  style={{
                    fontSize: "clamp(36px, 8vw, 154px)",
                    lineHeight: "1.1",
                    letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                    fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                    height: "auto",
                    maxWidth: "100%",
                    paddingBottom: "0",
                    marginBottom: "0.2em",
                    color: "#FFFFFF",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                  aria-label="We build with AI"
                >
                  We build with AI
                </h1>
                <p
                  className="mx-auto h-auto select-text mb-3"
                  style={{
                    fontFamily:
                      'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                    fontSize: "clamp(14px, 4vw, 22px)",
                    lineHeight: "1.3",
                    fontWeight: "400",
                    letterSpacing: "normal",
                    maxWidth: "2xl",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    // These styles ensure proper selection colors
                    "--selection-text-color": "#FFFFFF",
                    "--selection-background-color": "#000000",
                  }}
                >
                  We develop websites for businesses in minutes, not weeks.
                </p>
              </div>

              {/* Image in the middle for mobile */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-full">
                  <HeroImage />
                </div>
              </div>

              {/* Buttons at the bottom for mobile */}
              <div>
                <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                  <Button
                    className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black h-[50px] sm:h-[60px]"
                    onClick={() => openInstallModal("get-started")}
                  >
                    <ArrowRight className="mr-2 h-4 w-4 stroke-[2.5px]" /> GET STARTED
                  </Button>
                  <Button
                    className="bg-black hover:bg-black/80 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm font-semibold tracking-wider text-white h-[50px] sm:h-[60px] border border-white/10"
                    onClick={() => openInstallModal("contact-us")}
                  >
                    CONTACT US
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Layout (Original) */}
            <div className="hidden md:flex md:flex-col md:flex-grow">
              <h1
                className="font-semibold mb-2 whitespace-nowrap overflow-visible select-text heading-with-selection"
                style={{
                  fontSize: "clamp(36px, 8vw, 154px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                  fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                  height: "auto",
                  maxWidth: "100%",
                  paddingBottom: "0",
                  marginBottom: "0.2em",
                  color: "#FFFFFF",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
                aria-label="AI Version Control"
              >
                We build with AI
              </h1>
              <p
                className="mb-6 sm:mb-8 mx-auto h-auto select-text"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "clamp(16px, 4vw, 24px)",
                  lineHeight: "1.3",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  maxWidth: "2xl",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  // These styles ensure proper selection colors
                  "--selection-text-color": "#FFFFFF",
                  "--selection-background-color": "#000000",
                }}
              >
                We develop websites for businesses in minutes, not weeks.
              </p>
              <div className="flex flex-row justify-center gap-3 md:gap-4 mb-8">
                <Button
                  className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 md:px-6 lg:px-8 rounded-lg shadow-lg font-mono text-sm md:text-base font-semibold tracking-wider text-black h-[50px] md:h-[60px] min-w-[180px] md:min-w-[220px]"
                  onClick={() => openInstallModal("get-started")}
                >
                  <ArrowRight className="mr-2 h-4 w-4" /> GET STARTED
                </Button>
                <button
                  onClick={() => openInstallModal("contact-us")}
                  className="bg-black hover:bg-black/80 flex items-center justify-center px-4 md:px-6 lg:px-8 rounded-lg shadow-lg font-mono text-sm md:text-base font-semibold tracking-wider text-white h-[50px] md:h-[60px] min-w-[180px] md:min-w-[220px] border border-white/10"
                >
                  CONTACT US
                </button>
              </div>
              <div className="relative w-full flex-grow flex items-center justify-center rounded-md overflow-hidden">
                <div className="w-full sm:w-[85%] md:max-w-[1200px] mx-auto">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="pb-12 md:pb-16 bg-black mt-[60px] md:mt-[112px]">
          <div className="container mx-auto px-4 text-center">
            <p
              className="uppercase mb-6 md:mb-8"
              style={{
                fontFamily:
                  'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                color: "#999999",
              }}
            >
              The technology behind LAULA
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 sm:gap-y-12 gap-x-4 mb-8 md:mb-12 max-w-5xl mx-auto">
              <CompanyName name="Windsurf" />
              <CompanyName name="Claude Code" />
              <CompanyName name="Cursor" />
              <CompanyName name="VS Code" />
              <CompanyName name="Manus AI" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-4 max-w-2xl mx-auto">
              <CompanyName name="Firebase Studio" />
              <CompanyName name="OpenAI Codex CLI" noWrapDesktop={true} />
              <CompanyName name="Github Codespaces" noWrapDesktop={true} />
            </div>
          </div>
        </section>

        {/* Developer Stats Section */}
        <DeveloperStatsSection />

        {/* Feature Sections */}
        <SaveReviewRestoreSection onOpenInstall={openInstallModal} />

        {/* New Agentic AI Search Section */}
        <AgenticAISearchSection onOpenInstall={openInstallModal} />

        <FeatureVideoSection
          title="Fully Managed Backend"
          description="You don’t need special software to manage your site. We handle all the tech."
          videoSrc="/videos/cross-ides.mp4"
          fallbackVideoSrc={VIDEO_URLS.crossIde}
          gradientClass="gradient-yellow-red-diagonal"
        />

        {/* Why Not Just Git Section */}
        <WhyNotGitSection onOpenInstall={openInstallModal} />

        {/* Vibe Coding Tweets Section */}
        <VibeCodingTweetsSection onOpenInstall={openInstallModal} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection onOpenInstall={openInstallModal} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Install Modal */}
      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialTab={modalInitialTab} />
    </div>
  )
}

function CompanyName({
  name,
  noWrapDesktop = false,
  className = "",
}: { name: string; noWrapDesktop?: boolean; className?: string }) {
  return (
    <div className={`flex justify-center items-center h-10 ${className}`}>
      <span
        className={`text-[#999999] ${noWrapDesktop ? "md:whitespace-nowrap" : ""}`}
        style={{
          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "700",
          letterSpacing: "normal",
        }}
      >
        {name}
      </span>
    </div>
  )
}

function FeatureVideoSection({
  title,
  description,
  videoSrc,
  fallbackVideoSrc,
  gradientClass,
}: {
  title: string
  description: string
  videoSrc: string
  fallbackVideoSrc?: string
  gradientClass: string
}) {
  return (
    <div className="my-24">
      {/* Title and Description outside the gradient section */}
      <div className="text-center mb-6 md:mb-12 px-4">
        <h2
          className="mb-4 font-semibold"
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
          {title}
        </h2>
        <p
          className="max-w-2xl mx-auto"
          style={{
            color: "#f5f5f5",
            fontFamily: "GeistMono, monospace",
            fontSize: "clamp(16px, 3vw, 22px)",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          You don’t need special software to manage your site. We handle all the tech.
        </p>
      </div>

      {/* Gradient Section with Video - with max-width of 1296px */}
      <div className="flex justify-center">
        <div className={`gradient-container ${gradientClass} max-w-[1296px] w-full`}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>

          {/* Noise Overlay */}
          <div className="noise-texture"></div>

          <div className="relative z-10 pt-4 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-6 md:px-12">
            <div className="rounded-t-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10 border-b-0">
              <FeatureVideo src={videoSrc} alt={title} fallbackSrc={fallbackVideoSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
