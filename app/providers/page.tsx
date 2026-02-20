export default function ForProviders() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-[#EAF2EE]/20 to-stone-50">
      {/* Subtle ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,158,135,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(122,158,135,0.04),transparent_50%)] pointer-events-none" />

      <main className="relative">

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7A9E87] to-transparent" />
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-stone-800 mb-6 tracking-tight leading-tight">
              Grow Your Practice.
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              SpaNow connects Atlanta's finest spas and wellness providers with clients who are ready to book — right now.
            </p>
            <a
              href="#join"
              className="inline-block bg-[#7A9E87] text-white px-10 py-4 rounded-full text-base font-light tracking-wide hover:bg-[#6B8F77] transition shadow-xl shadow-[#7A9E87]/20"
            >
              Join SpaNow — It's Free
            </a>
          </div>
        </div>

        {/* Why SpaNow */}
        <div className="bg-white py-20 border-y border-stone-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7A9E87] to-transparent mx-auto mb-6" />
              <h2 className="text-3xl font-light text-stone-800 tracking-tight">
                Why Providers Choose SpaNow
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#EAF2EE] to-[#F4F9F6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#C5DDD3]">
                  <svg className="w-9 h-9 text-[#7A9E87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-3 text-stone-800">Always Free to Join</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  No setup fees, no monthly costs, no contracts. List your availability and start receiving bookings at no charge while we grow together.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#EAF2EE] to-[#F4F9F6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#C5DDD3]">
                  <svg className="w-9 h-9 text-[#7A9E87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-3 text-stone-800">Fill Empty Slots</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Turn last-minute cancellations and slow periods into revenue. SpaNow shows your real-time availability to clients who are ready to book today.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#EAF2EE] to-[#F4F9F6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#C5DDD3]">
                  <svg className="w-9 h-9 text-[#7A9E87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light mb-3 text-stone-800">Reach New Clients</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Get discovered by Atlanta professionals and wellness seekers actively searching for services like yours — no advertising budget required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works for Providers */}
        <div className="py-24 bg-gradient-to-b from-stone-50 to-[#EAF2EE]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7A9E87] to-transparent mx-auto mb-6" />
              <h2 className="text-3xl font-light text-stone-800 tracking-tight">
                Simple to Get Started
              </h2>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 rounded-full bg-[#7A9E87] text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                  1
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-light text-stone-800 mb-2">Create Your Profile</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Tell us about your spa — your services, hours, location, and what makes your practice special. It takes just a few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 rounded-full bg-[#7A9E87] text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                  2
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-light text-stone-800 mb-2">Share Your Availability</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Connect your existing booking system or enter your open slots directly. Your real-time availability will be visible to clients searching right now.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-12 h-12 rounded-full bg-[#7A9E87] text-white flex items-center justify-center flex-shrink-0 text-lg font-light">
                  3
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-light text-stone-800 mb-2">Welcome New Clients</h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Bookings arrive instantly with client details and appointment information. No phone calls, no back-and-forth — just confirmed appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Form */}
        <div id="join" className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#7A9E87] to-transparent mx-auto mb-8" />
            <h2 className="text-4xl font-light text-stone-800 mb-4 tracking-tight">
              Ready to Join?
            </h2>
            <p className="text-stone-600 font-light mb-10 leading-relaxed">
              We're building our Atlanta provider network now. Leave your details and we'll be in touch to get you set up.
            </p>

            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 shadow-xl shadow-stone-200/50 text-left">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">Business Name</label>
                  <input
                    type="text"
                    placeholder="Serenity Spa Atlanta"
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#C5DDD3] focus:border-[#7A9E87] transition bg-white text-stone-800 placeholder-stone-400 font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">Your Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#C5DDD3] focus:border-[#7A9E87] transition bg-white text-stone-800 placeholder-stone-400 font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    placeholder="jane@serenityspa.com"
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#C5DDD3] focus:border-[#7A9E87] transition bg-white text-stone-800 placeholder-stone-400 font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-light text-stone-500 mb-2 tracking-wider uppercase">Services Offered</label>
                  <select className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-[#C5DDD3] focus:border-[#7A9E87] transition bg-white text-stone-800 font-light">
                    <option value="">Select primary service</option>
                    <option value="massage">Massage</option>
                    <option value="facial">Facial</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <button
                  className="w-full bg-[#7A9E87] text-white py-4 rounded-2xl text-base font-light tracking-wide hover:bg-[#6B8F77] transition shadow-lg shadow-[#7A9E87]/20 mt-2"
                >
                  Request Early Access
                </button>
                <p className="text-xs text-stone-400 text-center font-light">
                  Free to join. No credit card required. We'll reach out within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}