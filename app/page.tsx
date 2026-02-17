'use client';

import { useState } from 'react';

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
      
      {/* Ambient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(218,165,32,0.04),transparent_50%)] pointer-events-none" />

      {/* ================= HEADER ================= */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/spanow-logo.svg"
              alt="SpaNow"
              className="h-24 sm:h-16 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">
              Find a Spa
            </a>
            <a href="#" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">
              For Providers
            </a>
            <a href="/about" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">
              About
            </a>
          </nav>

          {/* Right Side Buttons */}
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

      {/* ================= MAIN ================= */}
      <main className="relative">
        
        {/* HERO */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">

          <div className="flex justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>

          <h2 className="text-6xl md:text-7xl font-light text-stone-800 mb-6 tracking-tight leading-tight">
            Find. Book. Relax.
          </h2>

          <p className="text-lg text-stone-600 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Discover Atlanta's finest spas with instant availability.
            <br className="hidden sm:block" />
            Your perfect appointment is just a click away.
          </p>

          {/* SEARCH BOX */}
          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-stone-200/50 p-8 border border-stone-100"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-6">

              {/* Location */}
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

              {/* Service */}
              <div className="text-left">
                <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">
                  Service
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 transition bg-stone-50/50 text-stone-800 font-light"
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

        {/* ================= FOOTER ================= */}
        <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="mb-4">
                  <img
                    src="/spanow-logo.svg"
                    alt="SpaNow"
                    className="h-20 w-auto opacity-90"
                  />
                </div>
                <p className="text-sm font-light text-stone-400 leading-relaxed">
                  Atlanta's premier destination for instant bookings.
                </p>
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
