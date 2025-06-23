"use client"
import { useState, useEffect, useCallback } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import InstallModal from "@/components/install-modal"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false)
  const [initialModalTab, setInitialModalTab] = useState<string>("get-started") // Default to 'get-started'
  const [bannerVisible, setBannerVisible] = useState(true)
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Debounce the scroll handler to prevent flickering
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }, [scrolled])

  useEffect(() => {
    // Initial check on mount
    handleScroll()

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen || showVideoModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen, showVideoModal])

  // Apply styles consistently
  const navStyle = {
    boxShadow: scrolled ? "0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0), 0 5px 18px 0 rgba(204,204,204,0.1)" : "none",
    border: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
    borderRadius: "16px",
    transition: "all 0.3s ease-in-out",
  }

  const logoKeyframes = `
@keyframes layer-drop-1 {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(0.5px); }
}

@keyframes layer-drop-2 {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(1px); }
}

@keyframes layer-drop-3 {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(1.5px); }
}

@keyframes elegant-lift {
0% { transform: translateY(0px) scale(1); }
100% { transform: translateY(-1px) scale(1.02); }
}

@keyframes elegant-settle {
0% { transform: translateY(-1px) scale(1.02); }
100% { transform: translateY(0px) scale(1); }
}

@keyframes subtle-glow {
0% { filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0)); }
100% { filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.15)); }
}

.yoyo-layer-1 {
animation: layer-drop-1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.yoyo-layer-2 {
animation: layer-drop-2 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.3s;
}

.yoyo-layer-3 {
animation: layer-drop-3 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.6s;
}

.yoyo-logo {
overflow: visible;
padding: 2px 0;
transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
cursor: pointer;
}

.yoyo-logo:hover {
animation: elegant-lift 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
           subtle-glow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.yoyo-logo:not(:hover) {
animation: elegant-settle 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.yoyo-logo:hover .yoyo-layer-1 {
animation: layer-drop-1 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.yoyo-logo:hover .yoyo-layer-2 {
animation: layer-drop-2 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.15s;
}

.yoyo-logo:hover .yoyo-layer-3 {
animation: layer-drop-3 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.3s;
}
`

  const handleWatchDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowVideoModal(true)
  }

  return (
    <div>
      {bannerVisible && (
        <div className="block">
          {/* AI Jason Video Banner - Redesigned to match YOYO aesthetic */}
          <div className="fixed top-0 left-0 right-0 z-[60] bg-black border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-2 sm:py-3 max-w-7xl mx-auto">
              <div className="flex items-center gap-3 flex-1 justify-center">
                {/* Subtle gradient accent */}
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 via-orange-400 to-pink-400 rounded-full"></div>

                <div className="flex items-center gap-2">
                  <span
                    className="text-white/90 text-xs sm:text-sm"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                      fontWeight: "500",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span className="hidden sm:inline">
                      Clients call LAULA “Instant Web Design” — Launch stunning websites 10× faster with AI →{" "}
                    </span>
                    <span className="sm:hidden">Launch your website 10× faster with AI → </span>
                    <span
                      className="text-white hover:text-white/80 transition-colors underline decoration-white/30 hover:decoration-white/60 underline-offset-2 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setInitialModalTab("get-started")
                        setIsInstallModalOpen(true)
                      }}
                    >
                      14 Day Trial
                    </span>
                  </span>
                </div>
              </div>

              <button
                className="ml-4 p-1.5 text-white/50 hover:text-white/80 hover:bg-white/5 rounded-md transition-all duration-200 flex-shrink-0"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setBannerVisible(false)
                }}
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black border border-white/10 rounded-[16px] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 via-orange-400 to-pink-400 rounded-full"></div>
                <h3
                  className="text-white font-semibold"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                    fontSize: "18px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  "Vibe Versioning" — The Future of Git for AI Coding
                </h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/JfMcFjD-tIA?autoplay=1&rel=0&modestbranding=1"
                title="AI Jason Reviews YOYO: Vibe Versioning"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer with Install Button */}
            <div className="p-4 border-t border-white/10 bg-black/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p
                    className="text-white/90 mb-1"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Ready to try "Vibe Versioning"?
                  </p>
                  <p
                    className="text-white/70 text-sm"
                    style={{
                      fontFamily: "GeistMono, monospace",
                    }}
                  >
                    Install YOYO and never lose your AI progress again.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setShowVideoModal(false)
                    setIsInstallModalOpen(true)
                    setInitialModalTab("get-started")
                  }}
                  className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg shadow-lg"
                  style={{
                    fontFamily: "GeistMono, monospace",
                    letterSpacing: "0.56px",
                    height: "48px",
                    minWidth: "160px",
                  }}
                >
                  <ArrowRight className="mr-2 h-4 w-4 stroke-[2.5px]" />
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed ${bannerVisible ? "top-12 sm:top-10" : "top-0"} left-0 right-0 z-50 flex justify-center px-6 md:px-8 transition-all duration-300`}
      >
        <style jsx>{logoKeyframes}</style>
        <div className="w-[calc(100%-24px)] max-w-[1400px] mt-4">
          <nav
            className="flex items-center justify-between p-2 h-16 bg-black rounded-[16px] text-white font-geist"
            style={navStyle}
          >
            <div className="flex items-center ml-[15px]">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 yoyo-logo"
                style={{ overflow: "visible" }}
              >
                <path
                  className="yoyo-layer-1"
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                <path className="yoyo-layer-2" d="M2 12L12 17L22 12" stroke="#FFFFFF" strokeWidth="1" />
                <path className="yoyo-layer-3" d="M2 17L12 22L22 17" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
              <span
                className="logo-text"
                style={{
                  fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                  fontSize: "18px",
                  lineHeight: "1.1",
                  fontWeight: "600",
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  width: "auto",
                  height: "auto",
                }}
              >
                LAULA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="bg-transparent hover:bg-white/10 border border-white/30 rounded-lg"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.32px",
                  color: "#FFFFFF",
                  height: "48px",
                }}
                onClick={() => {
                  setIsInstallModalOpen(true)
                  setInitialModalTab("contact-us")
                }}
              >
                CONTACT US
              </Button>
              <Button
                className="bg-white text-black hover:bg-gray-200 px-6 h-12 rounded-lg"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.56px",
                  color: "#000000",
                  height: "48px",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  setIsInstallModalOpen(true)
                  setInitialModalTab("get-started")
                }}
              >
                <ArrowRight className="mr-2 h-4 w-4 stroke-[2.5px]" />
                GET STARTED
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center mr-2 p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </nav>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed top-[76px] right-6 w-[calc(100%-48px)] max-w-[400px] bg-black border border-[#1a1a1a] rounded-[16px] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0 pointer-events-none"
            }`}
          >
            <div className="p-4 flex flex-col gap-4">
              <Button
                className="bg-transparent hover:bg-white/10 border border-white/30 rounded-lg w-full justify-start"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.32px",
                  color: "#FFFFFF",
                  height: "48px",
                }}
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsInstallModalOpen(true)
                  setInitialModalTab("contact-us")
                }}
              >
                CONTACT US
              </Button>
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-lg w-full justify-start"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "600",
                  letterSpacing: "0.56px",
                  color: "#000000",
                  height: "48px",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsInstallModalOpen(true)
                  setInitialModalTab("get-started")
                }}
              >
                <ArrowRight className="mr-2 h-4 w-4 stroke-[2.5px]" />
                GET STARTED
              </Button>
            </div>
          </div>
        </div>

        {/* Install Modal */}
        <InstallModal
          isOpen={isInstallModalOpen}
          onClose={() => setIsInstallModalOpen(false)}
          initialTab={initialModalTab}
        />
      </div>
    </div>
  )
}
