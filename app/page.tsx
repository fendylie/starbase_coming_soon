"use client"
import { useState, useEffect } from "react"
import StarfieldBackground from "@/components/starfield-background"
import CountdownTimer from "@/components/countdown-timer"
import RocketAnimation from "@/components/rocket-animation"

export default function ComingSoonPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add fade-in effect when component mounts
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated starfield background */}
      <StarfieldBackground />

      {/* Main content with fade-in animation */}
      <div
        className={`z-10 flex flex-col items-center justify-center px-4 text-center transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Floating animation for the main content */}
        <div className="animate-float max-w-3xl">
          {/* Rocket animation */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <RocketAnimation />
          </div>

          {/* Main title */}
          <h1 className="mb-2 font-[--font-orbitron] text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 md:text-7xl">
            $STARBASE
          </h1>

          {/* Subtitle */}
          <p className="mb-8 font-[--font-barlow-condensed] text-xl text-gray-300 md:text-2xl">
            🚀 Starbase is preparing for liftoff on
            @solana
            . Home of the Starnauts—powered by the people.
          </p>

          {/* Countdown timer */}
          <div className="mb-10 w-[fit-content] mx-auto">
            <CountdownTimer targetDate="2025-05-12T13:00:00" />
          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center space-x-6">
            <a href="https://x.com/starbase2597sol" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://t.me/starbase2597" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Telegram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.17-.04-.25-.02-.11.02-1.84 1.17-5.2 3.42-.49.33-.94.5-1.35.48-.44-.01-1.29-.25-1.92-.46-.78-.26-1.39-.4-1.34-.85.03-.22.32-.45.88-.68 3.49-1.51 5.82-2.51 6.98-3 3.32-1.38 4.01-1.62 4.46-1.63.1 0 .32.02.46.19.12.13.15.31.17.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
