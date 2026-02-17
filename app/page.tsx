'use client';

import { useState } from 'react';

function SpaNowLogo({
  className = 'h-20 sm:h-24 w-auto',
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const colors =
    variant === 'dark'
      ? {
          spa: '#F5F5F4', // stone-100
          tagline: '#A8A29E', // stone-400
          ringOpacityOuter: 0.28,
          ringOpacityMain: 0.85,
        }
      : {
          spa: '#3A3A3A',
          tagline: '#8A8A8A',
          ringOpacityOuter: 0.35,
          ringOpacityMain: 0.9,
        };

  return (
    <svg
      viewBox="0 0 900 260"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SpaNow"
    >
      {/* Circle Frame */}
      <circle
        cx="650"
        cy="120"
        r="95"
        fill="none"
        stroke="#C19A2E"
        strokeWidth="3"
        opacity={colors.ringOpacityOuter}
      />

      {/* Main Ring with Gap */}
      <circle
        cx="650"
        cy="120"
        r="95"
        fill="none"
        stroke="#C19A2E"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="540 60"
        strokeDashoffset="-30"
        opacity={colors.ringOpacityMain}
      />

      {/* SPA */}
      <text
        x="240"
        y="135"
        fontFamily="Cormorant Garamond, serif"
        fontSize="92"
        fontWeight="700"
        letterSpacing="6"
        fill={colors.spa}
      >
        SPA
      </text>

      {/* NOW */}
      <text
        x="460"
        y="135"
        fontFamily="Cormorant Garamond, serif"
        fontSize="92"
        fontWeight="700"
        letterSpacing="6"
        fill="#C19A2E"
      >
        NOW
      </text>

      {/* Tagline */}
      <text
        x="360"
        y="185"
        fontFamily="Cormorant Garamond, serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="8"
        fill={colors.tagline}
      >
        FIND • BOOK • RELAX
      </text>
    </svg>
  );
}

export default function Home() {
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { location, serviceType });
    alert(
      `Searching for ${serviceType || 'any service'} in ${
        location || 'Atlanta'
      }. Search functionality coming soon!`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-yellow-50/20 to-stone-50">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(218,165,32,0.04),transparent_50%)] pointer-events-none" />

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <SpaNowLogo className="h-20 sm:h-24 w-auto" variant="light" />
          </a>

          <nav className="hidden md:flex space-x-8 text-sm">
            <a
              href="#"
              className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide"
            >
              Find a Spa
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide"
            >
              For Providers
            </a>
            <a
              href="/about"
              className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-stone-700 hover:text-yellow-600 font-light text-sm transition">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition text-sm font-light tracking-wide shadow-sm">
              Provider Portal
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

            <h2 className="text-6xl md:text-7xl font-light text-stone-800 mb-6 tracking-tight leading-tight">
              Find. Book. Relax.
            </h2>

            <p className="text-lg text-stone-600 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Discover Atlanta&apos;s finest spas with instant availability.
              <br className="hidden sm:block" />
              Your perfect appointment is just a click away.
            </p>

            {/* Search Box */}
            <form
              onSubmit={handleSearch}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-stone-200/50 p-8 border border-stone-100"
            >
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div className="text-left">
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Buckhead, Midtown, or ZIP"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 transition bg-stone-50/50 text-stone-800 placeholder-stone-400 font-light"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">
                    Service
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 transition bg-stone-50/50 text-stone-800 font-light appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iI0RBQTUyMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-[length:12px] bg-[position:right_1.25rem_center] bg-no-repeat"
                  >
                    <option value="">All Services</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="facial">Facial</option>
                    <option value="massage">Massage</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-2xl text-base font-light tracking-wide hover:from-yellow-600 hover:to-yellow-700 transition shadow-lg shadow-yellow-600/20 hover:shadow-xl hover:shadow-yellow-600/30"
              >
                Find Your Perfect Escape
              </button>
            </form>

            <p className="text-xs text-stone-500 mt-6 font-light tracking-wide">
              ✨ Instant confirmation • No phone calls • Real-time availability
            </p>
          </div>
        </div>

        {/* …everything else stays exactly as you had it… */}

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="mb-4">
                  {/* Smaller + dark variant so it shows on dark background */}
                  <SpaNowLogo className="h-14 w-auto opacity-90" variant="dark" />
                </div>
                <p className="text-sm font-light text-stone-400 leading-relaxed">
                  Atlanta&apos;s premier destination for instant bookings.
                </p>
              </div>

              <div>
                <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">
                  Explore
                </h5>
                <ul className="space-y-2.5 text-sm font-light">
                  <li>
                    <a
                      href="/"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      Find a Spa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">
                  Providers
                </h5>
                <ul className="space-y-2.5 text-sm font-light">
                  <li>
                    <a
                      href="/providers"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      Join SpaNow
                    </a>
                  </li>
                  <li>
                    <a
                      href="/providers"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      Partner Login
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">
                  Company
                </h5>
                <ul className="space-y-2.5 text-sm font-light">
                  <li>
                    <a
                      href="/about"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-stone-400 hover:text-yellow-400 transition"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-stone-800 pt-8 text-center">
              <p className="text-xs font-light text-stone-500 tracking-wide">
                © 2026 SpaNow Technologies, LLC
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
