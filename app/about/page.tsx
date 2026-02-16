'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-yellow-50/20 to-stone-50">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(218,165,32,0.04),transparent_50%)] pointer-events-none" />
      
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="champagneGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F6EBCB"/>
                  <stop offset="0.45" stopColor="#E6CC7A"/>
                  <stop offset="0.8" stopColor="#C19A2E"/>
                  <stop offset="1" stopColor="#8A6A12"/>
                </linearGradient>
              </defs>
              <circle cx="30" cy="30" r="22.5" stroke="url(#champagneGold)" strokeWidth="2.2" fill="none"/>
              <path d="M48 30a18 18 0 0 1-6 13" stroke="#111111" strokeWidth="3.2" strokeLinecap="round"/>
              <path d="M30 10l1.2 6.2L38 18l-6.8 1.8L30 26l-1.2-6.2L22 18l6.8-1.8L30 10z" fill="url(#champagneGold)" opacity="0.95"/>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <span style={{fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '700', color: '#111111', letterSpacing: '2px'}}>SPA</span>
                <span style={{fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '700', color: '#D4AF37', letterSpacing: '2px'}}>NOW</span>
              </div>
              <span style={{fontFamily: 'Georgia, serif', fontSize: '9px', fontWeight: '300', color: '#6B6B6B', letterSpacing: '3px', marginTop: '-4px'}}>FIND • BOOK • RELAX</span>
            </div>
          </a>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="/" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">Find a Spa</a>
            <a href="/providers" className="text-stone-600 hover:text-yellow-600 transition font-light tracking-wide">For Providers</a>
            <a href="/about" className="text-yellow-700 font-medium tracking-wide">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-stone-700 hover:text-yellow-600 font-light text-sm transition">Sign In</button>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-5 py-2.5 rounded-full hover:from-yellow-700 hover:to-yellow-800 transition text-sm font-light tracking-wide shadow-sm">
              Provider Portal
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-stone-800 mb-6 text-center tracking-tight">
            About Spa Now
          </h1>

          <p className="text-xl text-stone-600 text-center mb-16 font-light leading-relaxed max-w-2xl mx-auto">
            The simplest way to find and book real-time spa appointments — without the friction.
          </p>

          {/* The Story */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl shadow-stone-200/50 border border-stone-100 mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-8 text-center">The Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-stone-700 leading-relaxed mb-6">
                It was another packed Tuesday. Back-to-back meetings, negotiations, and a calendar that rarely leaves room to breathe. Then, unexpectedly, a meeting wrapped early — and for the first time in weeks, I had an open hour.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                My shoulders were tight, my mind was still racing, and all I wanted was a massage. Not next week. Not in a few days. Right then.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                Finding one turned into its own source of stress.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                I jumped from website to website. Some required creating an account just to view availability. Others sent me to separate booking portals. A few didn't show open times at all — just a phone number. I found myself logging into multiple systems, entering the same information over and over, only to discover there were no openings.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                As the general counsel of a fast-moving tech company, my schedule changes constantly. I don't have time to create accounts on five different platforms just to see who might have a slot. I didn't want to visit a hundred websites. I didn't want to call around. I just wanted to see what was actually available — right now — across all the providers in my area.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                One place. Real-time availability. No friction. No hoops.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-8">
                In a world where you can book a flight, reserve a table, or order a car in seconds, why is booking a massage still this complicated?
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <p className="text-stone-800 font-light italic text-lg leading-relaxed">
                  "SpaNow was created to fix that."
                </p>
                <p className="text-stone-600 text-sm mt-2">— Kimberly, Founder</p>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8" />
            <h2 className="text-3xl font-light text-stone-800 mb-8 text-center">Our Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/70 rounded-2xl p-8 border border-stone-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-stone-800 mb-3">For Customers</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Make wellness accessible on your schedule. Whether you have 30 minutes between meetings or a spontaneous afternoon free, self-care should be effortless.
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-8 border border-stone-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-stone-800 mb-3">For Providers</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Fill every appointment slot. We connect seamlessly with your existing booking system—no matter which platform you use—so you can reach clients actively looking to book right now.
                </p>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8" />
            <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">What Makes Spa Now Different</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-light text-stone-800 text-lg mb-2">Platform Agnostic</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    We integrate with Mindbody, Square, Booker, and more. Your spa keeps using the system you already know and love—we just help fill your empty slots.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-light text-stone-800 text-lg mb-2">Real-Time Availability</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    No more "request to book" limbo. If you see it, you can book it. Instant confirmation, every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-light text-stone-800 text-lg mb-2">Built by Someone Who Gets It</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    As General Counsel of a fast-moving tech company and an Atlanta local, I understand the unique challenges of finding time for self-care in a demanding schedule. SpaNow is designed for people like us—who work hard and deserve to relax without the hassle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-light text-stone-800 text-lg mb-2">Free for Providers (For Now)</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    We're building our community. Join now at no cost and help shape the future of wellness booking in Atlanta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-light mb-4">Join the Movement</h2>
            <p className="text-stone-200 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you're looking to book your next moment of peace or you're a spa owner ready to fill your schedule, Spa Now is here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="bg-white text-stone-900 px-8 py-3.5 rounded-full font-light tracking-wide hover:bg-stone-50 transition shadow-lg">
                Find a Spa
              </a>
              <a href="/providers" className="bg-yellow-600 text-white px-8 py-3.5 rounded-full font-light tracking-wide hover:bg-yellow-700 transition shadow-lg">
                List Your Spa
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="champagneGoldFooter" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#F6EBCB"/>
                      <stop offset="0.45" stopColor="#E6CC7A"/>
                      <stop offset="0.8" stopColor="#C19A2E"/>
                      <stop offset="1" stopColor="#8A6A12"/>
                    </linearGradient>
                  </defs>
                  <circle cx="30" cy="30" r="22.5" stroke="url(#champagneGoldFooter)" strokeWidth="2.2" fill="none" opacity="0.6"/>
                  <path d="M48 30a18 18 0 0 1-6 13" stroke="#999999" strokeWidth="3.2" strokeLinecap="round"/>
                  <path d="M30 10l1.2 6.2L38 18l-6.8 1.8L30 26l-1.2-6.2L22 18l6.8-1.8L30 10z" fill="url(#champagneGoldFooter)" opacity="0.7"/>
                </svg>
                <span style={{fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '700', color: '#999999', letterSpacing: '1px'}}>SPANOW</span>
              </div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                Atlanta's premier destination for instant spa bookings.
              </p>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Explore</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/" className="text-stone-400 hover:text-yellow-500 transition">Find a Spa</a></li>
                <li><a href="/" className="text-stone-400 hover:text-yellow-500 transition">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Providers</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/providers" className="text-stone-400 hover:text-yellow-500 transition">Join Spa Now</a></li>
                <li><a href="/providers" className="text-stone-400 hover:text-yellow-500 transition">Partner Login</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">Company</h5>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="/about" className="text-stone-400 hover:text-yellow-500 transition">About</a></li>
                <li><a href="/contact" className="text-stone-400 hover:text-yellow-500 transition">Contact</a></li>
                <li><a href="/privacy" className="text-stone-400 hover:text-yellow-500 transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-xs font-light text-stone-500 tracking-wide">
              © 2026 Spa Now LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}