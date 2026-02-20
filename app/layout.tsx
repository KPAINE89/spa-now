import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SpaNow",
  description: "Luxury spa bookings. Instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800 flex flex-col min-h-screen">
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <Link href="/" aria-label="SpaNow Home">
              <Image
                src="/logo.png"
                alt="SpaNow"
                width={600}
                height={200}
                priority
                className="h-40 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
              <span className="text-stone-700 cursor-default">Find a Spa</span>
              <Link href="/providers" className="hover:text-[#7A9E87] transition">For Providers</Link>

              <Link href="/about" className="hover:text-[#7A9E87] transition">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-700 cursor-default">Sign In</span>

              <span className="bg-[#7A9E87] text-white px-5 py-2.5 rounded-full text-sm shadow-sm cursor-default">
                Provider Portal
              </span>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="mb-4">
                  <Image
                    src="/logo.png"
                    alt="SpaNow"
                    width={600}
                    height={200}
                    className="h-40 w-auto opacity-100"
                  />
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
                  <li className="text-stone-400">Find a Spa</li>
                  <li className="text-stone-400">How It Works</li>
                </ul>
              </div>

              <div>
                <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">
                  Providers
                </h5>
                <ul className="space-y-2.5 text-sm font-light">
                  <li className="text-stone-400">Join SpaNow</li>
                  <li className="text-stone-400">Partner Login</li>
                </ul>
              </div>

              <div>
                <h5 className="font-light mb-4 text-white text-sm tracking-wider uppercase">
                  Company
                </h5>
                <ul className="space-y-2.5 text-sm font-light">
                  <li>
                    <Link
                      href="/about"
                      className="text-stone-400 hover:text-[#7A9E87] transition"
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-stone-400">Contact</li>
                  <li className="text-stone-400">Privacy</li>
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
      </body>
    </html>
  );
}
