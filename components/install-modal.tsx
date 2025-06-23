"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X, User, Mail, Phone, Building, Info, Send } from "lucide-react"

interface InstallModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: string
}

interface TabOption {
  id: string
  name: string
  icon: React.ElementType
}

export default function InstallModal({ isOpen, onClose, initialTab }: InstallModalProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab || "get-started")

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab || "get-started")
    }
  }, [isOpen, initialTab])

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const tabOptions: TabOption[] = [
    { id: "get-started", name: "Get Started", icon: User },
    { id: "contact-us", name: "Contact Us", icon: Building },
    { id: "about-us", name: "About Us", icon: Info },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-black border border-white/10 rounded-[16px] shadow-2xl my-4 md:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 bg-black rounded-t-[16px] border-b border-white/10">
          <h2
            className="text-xl md:text-2xl font-semibold text-white"
            style={{
              fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif)',
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
            }}
          >
            Connect with LAULA
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 md:p-6">
          <div className="flex overflow-x-auto pb-2 mb-4 border-b border-white/10 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {tabOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setActiveTab(option.id)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-colors whitespace-nowrap ${
                    activeTab === option.id ? "bg-white text-black" : "bg-transparent text-white/80 hover:bg-white/10"
                  }`}
                >
                  <option.icon size={16} />
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-white/90">
            {activeTab === "get-started" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Let's Get Started</h3>
                <p className="text-sm text-white/70">
                  Fill out the form below and one of our team members will get in touch with you shortly.
                </p>
                <form action="https://formspree.io/f/xwpbrknl" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-base text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/30 outline-none transition-colors"
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-base text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/30 outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/80 mb-1">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-base text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/30 outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-mono text-sm font-semibold tracking-wider py-3 px-4 rounded-lg transition-colors"
                    style={{
                      fontFamily:
                        'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                      letterSpacing: "0.56px",
                      height: "48px",
                    }}
                  >
                    <Send size={16} className="stroke-[2.5px]" />
                    SUBMIT
                  </button>
                </form>
              </div>
            )}

            {activeTab === "contact-us" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 text-sm">
                  <p>
                    <strong>LAULA Technologies Inc.</strong>
                  </p>
                  <p>
                    <Mail size={16} className="inline mr-2 opacity-70" />
                    Email:{" "}
                    <a href="mailto:contact@laula.ai" className="text-sky-400 hover:text-sky-300 underline">
                      contact@laula.ai
                    </a>
                  </p>
                  <p>
                    <Phone size={16} className="inline mr-2 opacity-70" />
                    Phone:{" "}
                    <a href="tel:+19546002311" className="text-sky-400 hover:text-sky-300 underline">
                      (954) 600-2311
                    </a>
                  </p>
                  <p className="text-xs text-white/60 pt-2">
                    Our office hours are Monday to Friday, 9 AM - 5 PM (Eastern Time Zone).
                  </p>
                </div>
              </div>
            )}

            {activeTab === "about-us" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">About LAULA</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 text-sm leading-relaxed">
                  <p>
                    LAULA is redefining modern web design by blending the speed of AI with the precision of expert
                    engineering. We empower businesses to launch stunning, responsive websites in minutes — without
                    compromising on quality, customization, or vision.
                  </p>
                  <p>
                    Our service leverages the latest in vibe coding tools, Next.js, and Vercel infrastructure to deliver
                    fully-managed, production-ready websites faster than traditional agencies ever could. Clients
                    preview their sites instantly, make real-time edits, and go live seamlessly — all without touching a
                    line of code.
                  </p>
                  <p>
                    Our mission is to make world-class web design accessible, efficient, and exciting for every
                    business. We’re a forward-thinking team of developers, designers, and technologists dedicated to
                    pushing the boundaries of what's possible when creativity meets automation.
                  </p>
                  <p className="text-xs text-white/60 pt-2">
                    Join us on this exciting journey as we redefine the future of coding.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 mt-6 border-t border-white/10">
            <p className="text-white/50 text-xs text-center">
              {activeTab === "get-started"
                ? "We respect your privacy. Your information will only be used to contact you regarding LAULA."
                : activeTab === "contact-us"
                  ? "We look forward to hearing from you!"
                  : "Learn more about our vision and team."}
            </p>
          </div>

          <div className="md:hidden p-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-mono text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
