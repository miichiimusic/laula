"use client"

// Split cities into two rows for better visual balance
const citiesRow1 = [
  "San Francisco",
  "New York",
  "London",
  "Berlin",
  "Tokyo",
  "Sydney",
  "Toronto",
  "Amsterdam",
  "Barcelona",
  "Singapore",
  "Mumbai",
  "São Paulo",
  "Stockholm",
  "Tel Aviv",
  "Austin",
  "Seattle",
  "Dublin",
  "Copenhagen",
  "Zurich",
  "Melbourne",
]

const citiesRow2 = [
  "Vancouver",
  "Paris",
  "Los Angeles",
  "Boston",
  "Chicago",
  "Miami",
  "Denver",
  "Portland",
  "Montreal",
  "Edinburgh",
  "Prague",
  "Vienna",
  "Helsinki",
  "Oslo",
  "Lisbon",
  "Madrid",
  "Rome",
  "Brussels",
  "Warsaw",
  "Budapest",
]

export default function DeveloperStatsSection() {
  const duplicatedRow1 = [...citiesRow1, ...citiesRow1]
  const duplicatedRow2 = [...citiesRow2, ...citiesRow2]

  return (
    <section className="py-12 md:py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Simple, clean stats display matching your other sections */}
        <div className="mb-8 md:mb-12">
          <h3
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
            {"Upgraded Online Presence With LAULA"}
          </h3>
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
            From local shops to fast-growing startups, we bring the future of web design to your doorstep.
          </p>
        </div>

        {/* Clean cities section matching your "Works wherever you build" style */}
        <div className="max-w-full mx-auto">
          <div className="space-y-4 md:space-y-6">
            {/* First Row - Left to Right */}
            <div className="relative overflow-hidden">
              {/* Simple gradient overlays matching your design */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

              {/* Clean scrolling cities */}
              <div className="flex animate-scroll-left py-2">
                {duplicatedRow1.map((city, index) => (
                  <div key={`row1-${city}-${index}`} className="flex-shrink-0 px-3 md:px-4">
                    <span
                      className="text-[#999999] whitespace-nowrap"
                      style={{
                        fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                        fontSize: "20px",
                        lineHeight: "28px",
                        fontWeight: "700",
                        letterSpacing: "normal",
                      }}
                    >
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden">
              {/* Simple gradient overlays matching your design */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

              {/* Clean scrolling cities */}
              <div className="flex animate-scroll-right py-2">
                {duplicatedRow2.map((city, index) => (
                  <div key={`row2-${city}-${index}`} className="flex-shrink-0 px-3 md:px-4">
                    <span
                      className="text-[#999999] whitespace-nowrap"
                      style={{
                        fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                        fontSize: "20px",
                        lineHeight: "28px",
                        fontWeight: "700",
                        letterSpacing: "normal",
                      }}
                    >
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 55s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
