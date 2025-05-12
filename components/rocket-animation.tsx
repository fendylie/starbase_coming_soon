"use client"

export default function RocketAnimation() {
  return (
    <div className="relative h-32 w-32 flex items-center justify-center">
      {/* Rocket */}
      <div
        className={`relative transition-transform duration-[3000ms] ease-out animate-hover-smooth`}
      >
        {/* SVG Rocket */}
        <svg width="48" height="96" viewBox="0 0 48 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rocket Body */}
          <path
            d="M24 4C24 4 8 16 8 40V72C8 72 14 68 24 68C34 68 40 72 40 72V40C40 16 24 4 24 4Z"
            fill="url(#rocket-body-gradient)"
          />

          {/* Rocket Nose */}
          <path d="M24 4C18 10 16 16 16 16C16 16 20 18 24 18C28 18 32 16 32 16C32 16 30 10 24 4Z" fill="#D1D5DB" />

          {/* Left Fin */}
          <path d="M8 56V72L2 80C2 80 4 68 8 56Z" fill="#EF4444" />

          {/* Right Fin */}
          <path d="M40 56V72L46 80C46 80 44 68 40 56Z" fill="#EF4444" />

          {/* Bottom */}
          <rect x="16" y="72" width="16" height="4" fill="#374151" rx="2" />

          {/* Window */}
          <circle cx="24" cy="32" r="6" fill="#22D3EE" />
          <circle cx="24" cy="32" r="4" fill="#0EA5E9" />

          {/* Flames */}
          <g className={"opacity-70"}>
            <g className="animate-flame-outer origin-top">
              <path
                d="M16 76C16 84 24 96 24 96C24 96 32 84 32 76C32 76 28 72 24 72C20 72 16 76 16 76Z"
                fill="url(#flame-outer-gradient)"
              />
            </g>
            <g className="animate-flame-inner origin-top">
              <path
                d="M20 76C20 82 24 90 24 90C24 90 28 82 28 76C28 76 26 74 24 74C22 74 20 76 20 76Z"
                fill="url(#flame-inner-gradient)"
              />
            </g>
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="rocket-body-gradient" x1="24" y1="4" x2="24" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F9FAFB" />
              <stop offset="1" stopColor="#9CA3AF" />
            </linearGradient>
            <linearGradient id="flame-outer-gradient" x1="24" y1="72" x2="24" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F97316" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#FCD34D" />
            </linearGradient>
            <linearGradient id="flame-inner-gradient" x1="24" y1="74" x2="24" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FBBF24" />
              <stop offset="0.5" stopColor="#FCD34D" />
              <stop offset="1" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Launch pad */}
      <div className="absolute bottom-[-10px] w-24 h-3 bg-gray-800 rounded-lg"></div>

      {/* Launch smoke */}
      {/*{isLaunching && (*/}
      {/*  <div className="absolute bottom-[-5px] left-0 right-0 mx-auto">*/}
      {/*    <div className="absolute w-20 h-8 bg-gradient-to-t from-gray-400/80 to-gray-400/0 rounded-full animate-smoke-1"></div>*/}
      {/*    <div className="absolute w-16 h-6 bg-gradient-to-t from-gray-400/60 to-gray-400/0 rounded-full animate-smoke-2"></div>*/}
      {/*    <div className="absolute w-14 h-5 bg-gradient-to-t from-gray-400/40 to-gray-400/0 rounded-full animate-smoke-3"></div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  )
}
