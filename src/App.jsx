export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-black font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-50 opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 animate-gradient-x">
            Yafer Services
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-700 font-medium tracking-wide">
            Trusted Midman • PC Builder • Tech Support
          </p>
          <p className="max-w-2xl text-gray-600 leading-relaxed text-base md:text-lg mx-auto">
            I provide secure midman transactions, custom PC builds, and reliable
            tech assistance. Whether you’re buying, selling, or upgrading — I
            make every deal safe and smooth.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white py-3 px-8 rounded-full text-sm font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Midman Rates</h2>
        <div className="max-w-md mx-auto border border-gray-200 rounded-3xl shadow-xl p-10 bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl transition-shadow duration-300">
          <ul className="space-y-4 text-gray-700">
            <li className="text-lg">
              ₱1 – ₱1,000 →{" "}
              <span className="font-semibold text-gray-900">₱30 fee</span>
            </li>
            <li className="text-lg">
              ₱1,001 – ₱5,000 →{" "}
              <span className="font-semibold text-gray-900">₱70 fee</span>
            </li>
            <li className="text-lg">
              ₱5,001 – ₱10,000 →{" "}
              <span className="font-semibold text-gray-900">₱120 fee</span>
            </li>
            <li className="text-lg">
              ₱10,000+ →{" "}
              <span className="font-semibold text-gray-900">3% of total</span>{" "}
              (negotiable for regular clients)
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-6 italic">
            💸 GCash Only • Transparent Process • Proof Every Step
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center border-y border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-12 text-gray-800">How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1️⃣",
              title: "Group Chat Setup",
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
              className="border border-gray-200 rounded-3xl p-6 shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {item.step} {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Section */}
      <section
        id="proof"
        className="py-20 px-6 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-100 opacity-60"></div>
        <div className="relative z-10 max-w-xl mx-auto backdrop-blur-lg bg-white/60 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Transaction Proofs
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            See verified proofs of successful transactions on my Facebook feed.
            ✅
          </p>
          <a
            href="https://www.facebook.com/vcutyfr/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            View Facebook Proofs
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gray-900 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Reach out for midman service, PC builds, or tech support inquiries.
        </p>
        <div className="space-y-4">
          <a
            href="https://www.facebook.com/vcutyfr"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-400 hover:text-blue-300 text-lg font-medium"
          >
            Facebook: facebook.com/vcutyfr
          </a>
          <a
            href="mailto:deleonyafer@gmail.com"
            className="block text-blue-400 hover:text-blue-300 text-lg font-medium"
          >
            Email: deleonyafer@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t border-gray-200">
        © {new Date().getFullYear()} Yafer Services. All rights reserved.
      </footer>
    </div>
  );
}
