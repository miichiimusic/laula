"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What exactly does LAULA do?",
    answer: (
      <>
        We build custom websites using AI and modern coding tools. You tell us what you need — we design, develop, host,
        and launch it. It’s a full-service web design experience without the long wait times or bloated costs.
      </>
    ),
  },
  {
    question: "How fast can I see my new website?",
    answer: (
      <>
        In most cases, within minutes. Once we understand your needs, we use AI to generate a fully functional preview
        you can explore and test — no commitments, no delays.
      </>
    ),
  },
  {
    question: "What if I don’t like the design?",
    answer: (
      <>
        No problem. Our preview-first model means you can request edits or walk away without paying. If you love it, we
        customize, connect your domain, and launch.
      </>
    ),
  },
  {
    question: "Do I need to know anything about coding or design?",
    answer: (
      <>
        Not at all. LAULA handles everything — from layout to hosting. You focus on your business, we take care of the
        web side.
      </>
    ),
  },
  {
    question: "What tech stack do you use?",
    answer: (
      <>
        We build using Next.js, Tailwind CSS, and deploy through Vercel — the same stack powering today’s top startups.
        Your site is modern, fast, and scalable from day one.
      </>
    ),
  },
  {
    question: "Who owns the website once it’s done?",
    answer: (
      <>
        You do. Once you approve and purchase the final site, it’s fully yours — including the design, code, and domain
        if we help register it.
      </>
    ),
  },
]

interface FAQSectionProps {
  onOpenInstall?: (tab?: string) => void
}

export default function FAQSection({ onOpenInstall }: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="text-center mb-12 md:mb-16 font-semibold"
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
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <span
                  className="text-left font-medium text-white"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                    fontSize: "18px",
                  }}
                >
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 pt-0">
                <p
                  className="text-white/80"
                  style={{
                    fontFamily:
                      'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <p
            className="text-white/80 mb-6"
            style={{
              fontFamily:
                'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Still unsure? Try your new site for 14 days — no sign-up, no pressure. You’ll never go back to old-school
            web design.
          </p>

          {onOpenInstall && (
            <Button
              onClick={() => onOpenInstall("get-started")}
              className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg"
              style={{
                fontFamily:
                  'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
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
