import Typewriter from "./Typewriter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-white">
          Yafer Services
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-400 mt-6">
          <Typewriter />
        </h1>

        <p className="max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mx-auto px-2">
          I provide secure and transparent midman services for
          <span className="font-semibold text-white">
            {" "}
            online deals, game accounts, digital items, gadgets, and even
            parcels.
          </span>{" "}
          Whether you’re buying, selling, or trading — I make every transaction
          <span className="font-semibold text-white">
            {" "}
            safe, verified, and hassle-free.
          </span>{" "}
          I also offer custom PC builds and reliable tech support for your setup
          needs.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-blue-500 hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Rates Section */}
      <section
        id="rates"
        className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gray-800"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
          Midman Rates
        </h2>

        <div className="max-w-lg mx-auto border border-gray-700 rounded-3xl shadow-xl p-8 sm:p-10 bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-2 border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 text-left">
              Price Range
            </h3>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 text-right">
              Fee
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-y-3 text-gray-300 text-base sm:text-lg">
            <span className="text-left">₱1 – ₱1,000</span>
            <span className="text-right font-semibold text-white">₱30</span>

            <span className="text-left">₱1,001 – ₱5,000</span>
            <span className="text-right font-semibold text-white">₱70</span>

            <span className="text-left">₱5,001 – ₱10,000</span>
            <span className="text-right font-semibold text-white">₱120</span>

            <span className="text-left">₱10,000+</span>
            <span className="text-right font-semibold text-white">
              3% of total
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-8 italic">
            💸 GCash Only • Transparent Process • Proof Every Step
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900 text-center border-y border-gray-800"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-white">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: "1️⃣",
              title: "Group Chat Setup (Call or Video Call)",
              desc: "A group chat with buyer and seller is created for transparency.",
            },
            {
              step: "2️⃣",
              title: "Buyer Sends Payment",
              desc: "Buyer sends payment to my verified GCash account.",
            },
            {
              step: "3️⃣",
              title: "Seller Delivers Item",
              desc: "After payment confirmation, the seller sends the item or account.",
            },
            {
              step: "4️⃣",
              title: "Payment Released",
              desc: "Once buyer confirms everything is good, payment is released to the seller.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-700 rounded-3xl p-6 shadow-md bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {item.step} {item.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Section */}
      <section
        id="proof"
        className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gray-800"
      >
        <div className="relative z-10 max-w-xl mx-auto bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-700">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Transaction Proofs
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            See verified proofs of successful transactions on my Facebook feed.
            ✅
          </p>
          <a
            href="https://www.facebook.com/vcutyfr/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-blue-500 hover:scale-105 transition-all duration-300"
          >
            View Facebook Proofs
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-16 py-16 sm:py-20 px-4 sm:px-6 bg-gray-900 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8 text-base sm:text-lg">
          Reach out for midman service, PC builds, or tech support inquiries.
        </p>
        <div className="space-y-4">
          <a
            href="https://www.facebook.com/vcutyfr"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-400 hover:text-blue-300 text-base sm:text-lg font-medium break-words"
          >
            Facebook: facebook.com/vcutyfr
          </a>
          <a
            href="mailto:itsyafertech@gmail.com"
            className="block text-blue-400 hover:text-blue-300 text-base sm:text-lg font-medium break-words"
          >
            Email: itsyafertech@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs sm:text-sm text-gray-500 bg-gray-800 border-t border-gray-700">
        © {new Date().getFullYear()} Yafer Services. All rights reserved.
      </footer>
    </div>
  );
}
