'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-yellow-50/20 to-stone-50">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,165,32,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(218,165,32,0.04),transparent_50%)] pointer-events-none" />
      


      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-stone-800 mb-6 text-center tracking-tight">
            About SpaNow
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
                As the general counsel of a fast-moving tech company, my schedule changes constantly. I don't have time to create accounts on five different platforms just to see who might have a slot. I don't want to visit a hundred websites. I don't want to call around. I just want to see what is actually available — right now — across all the providers in my area.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                One place. Real-time availability. No friction. No hoops.
              </p>
              
              <p className="text-stone-700 leading-relaxed mb-8">
                In a world where you can book a flight, reserve a table, or order a car in seconds, why is booking a massage or a quick pedicure still this complicated?
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
            <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">What Makes SpaNow Different</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-light text-stone-800 text-lg mb-2">Platform Agnostic</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    We integrate with Mindbody, Square, Booker, and more. Your business keeps using the system you already know and love—we just help fill your empty slots.
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
                    As busy wife, step mom and executive of a fast-moving tech company, I understand the unique challenges of finding time for self-care in a demanding schedule. SpaNow is designed for people like us—who work hard and deserve to relax without the hassle.
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
              Whether you're looking to book your next moment of peace or you're a spa owner ready to fill your schedule, SpaNow is here for you.
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

      
    </div>
  );
}