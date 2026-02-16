'use client';

import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { location, serviceType });
    alert(`Searching for ${serviceType || 'any service'} in ${location || 'Atlanta'}. Search functionality coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-yellow-50/20 to-stone-50">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(218,165,32,0.04),transparent_50%)] pointer-events-none" />
      
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <svg width="200" height="80" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap');
                </style>
              </defs>
              <path d="M 520 160 A 140 140 0 1 1 519.9 159.7" fill="none" stroke="#C19A2E" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
              <path d="M 520 160 A 140 140 0 1 1 448 50" fill="none" stroke="#C19A2E" strokeWidth="7" strokeLinecap="round" opacity="0.85"/>
              <text x="215" y="170" fontFamily="'Cormorant Garamond', serif" fontSize="86" fontWeight="700" letterSpacing="6" fill="#3A3A3A">SPA</text>
              <text x="420" y="170" fontFamily="'Cormorant Garamond', serif" fontSize="86" fontWeight="700" letterSpacing="6" fill="#C19A2E">NOW</text>
              <text x="300" y="220" fontFamily="'Cormorant Garamond', serif" fontSize="26" fontWeight="600" letterSpacing="8" fill="#7A7A7A">FIND • BOOK • RELAX</text>
            </svg>
          </a>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">Find a Spa</a>
            <a href="#" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">For Providers</a>
            <a href="/about" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-stone-700 hover:text-yellow-600 font-light text-sm transition">Sign In</button>
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
            {/* Decorative element */}
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

            {/* Search Box */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-stone-200/50 p-8 border border-stone-100">
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

        {/* How It Works */}
        <div className="bg-white py-20 border-y border-stone-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6" />
              <h3 className="text-3xl font-light text-stone-800 tracking-tight">
                Three Steps to Serenity
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-200">
                  <svg className="w-9 h-9 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-light mb-3 text-stone-800">Discover</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Browse real-time availability at Atlanta's finest spas
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-200">
                  <svg className="w-9 h-9 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-light mb-3 text-stone-800">Reserve</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Choose your perfect time with instant confirmation
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-200">
                  <svg className="w-9 h-9 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-light mb-3 text-stone-800">Unwind</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Arrive, breathe deep, and let the stress melt away
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Split Section */}
        <div className="py-24 bg-gradient-to-b from-stone-50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Benefits */}
              <div>
                <div className="h-px w-16 bg-gradient-to-r from-yellow-400 to-transparent mb-6" />
                <h3 className="text-4xl font-light text-stone-800 mb-8 tracking-tight leading-tight">
                  Your wellness,
                  <br />
                  <span className="text-yellow-600">simplified.</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-light text-stone-800 mb-1">Instant Confirmation</h4>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        Book now, relax now. Your time slot is confirmed immediately.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-light text-stone-800 mb-1">Curated Excellence</h4>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        Every business on SpaNow meets our standards for quality and care.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-light text-stone-800 mb-1">Live Availability</h4>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        See exactly what's open right now, today, or whenver you are ready.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-light text-stone-800 mb-1">Effortless Experience</h4>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        No phone calls. No waiting. Just pure, simple booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Provider CTA */}
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-10 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full -ml-24 -mb-24" />
                
                <div className="relative">
                  <div className="h-px w-12 bg-yellow-500/50 mb-6" />
                  <h3 className="text-3xl font-light mb-4 tracking-tight">For Spa Owners</h3>
                  <p className="mb-8 font-light leading-relaxed text-stone-200">
                    Fill your schedule seamlessly. Reach clients actively seeking their next escape. Join free while we're building our community.
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-light text-sm">Sync with your existing calendar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-light text-sm">Completely free to join</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-light text-sm">Instant access to new clients</span>
                    </div>
                  </div>
                  
                  <button className="bg-white text-stone-900 px-7 py-3.5 rounded-full font-light tracking-wide hover:bg-stone-50 transition w-full shadow-lg">
                    Join SpaNow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-24 bg-white">
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <h3 className="text-5xl font-light text-stone-800 mb-6 tracking-tight leading-tight">
              Your escape awaits.
            </h3>
            <p className="text-lg text-stone-600 mb-10 font-light leading-relaxed">
              Join the rest of us who've discovered the easiest way to book wellness.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-4 rounded-full text-base font-light tracking-wide hover:from-yellow-600 hover:to-yellow-700 transition shadow-xl shadow-yellow-600/20 hover:shadow-2xl hover:shadow-yellow-600/30">
              Start Your Search
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <svg width="160" height="64" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style>
                      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap');
                    </style>
                  </defs>
                  <path d="M 520 160 A 140 140 0 1 1 519.9 159.7" fill="none" stroke="#C19A2E" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
                  <path d="M 520 160 A 140 140 0 1 1 448 50" fill="none" stroke="#C19A2E" strokeWidth="7" strokeLinecap="round" opacity="0.65"/>
                  <text x="215" y="170" fontFamily="'Cormorant Garamond', serif" fontSize="86" fontWeight="700" letterSpacing="6" fill="#999999">SPA</text>
                  <text x="420" y="170" fontFamily="'Cormorant Garamond', serif" fontSize="86" fontWeight="700" letterSpacing="6" fill="#C19A2E">NOW</text>
                  <text x="300" y="220" fontFamily="'Cormorant Garamond', serif" fontSize="26" fontWeight="600" letterSpacing="8" fill="#7A7A7A">FIND • BOOK • RELAX</text>
                </svg>
              </div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                Atlanta's premier destination for instant bookings.
              </p>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Explore</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/" className="text-stone-400 hover:text-yellow-400 transition">Find a Spa</a></li>
                <li><a href="/" className="text-stone-400 hover:text-yellow-400 transition">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Providers</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/providers" className="text-stone-400 hover:text-yellow-400 transition">Join SpaNow</a></li>
                <li><a href="/providers" className="text-stone-400 hover:text-yellow-400 transition">Partner Login</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Company</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/about" className="text-stone-400 hover:text-yellow-400 transition">About</a></li>
                <li><a href="/contact" className="text-stone-400 hover:text-yellow-400 transition">Contact</a></li>
                <li><a href="/privacy" className="text-stone-400 hover:text-yellow-400 transition">Privacy</a></li>
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
    </div>
  );
}