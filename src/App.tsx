export default function TvLandingPage() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center items-center px-[4vw] text-center">
        <h1 className="text-3xl md:text-5xl [@media(min-width:1366px)]:text-[3.5rem] font-bold mb-4 leading-tight">
          Experience the Future on Your TV
        </h1>

        <p className="text-lg md:text-xl [@media(min-width:1366px)]:text-2xl max-w-[800px] opacity-90 mb-8">
          Stream, browse, and explore a world of content — built for your big screen.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg md:text-xl transition-all">
            Get Started
          </button>
          <button className="border border-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-2xl text-lg md:text-xl transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-[6vh] px-[5vw] bg-gray-800">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          Why You'll Love It
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[95vw] mx-auto">
          <FeatureCard
            title="Fast & Smooth"
            text="Optimized for TV browsers and remote navigation."
          />
          <FeatureCard
            title="Responsive Design"
            text="Looks perfect on 1366×768 and 4K screens."
          />
          <FeatureCard
            title="Simple Navigation"
            text="Big buttons and bold text — remote-friendly."
          />
        </div>
      </section>

      <footer className="py-6 text-center text-sm md:text-base opacity-70">
        © 2025 YourCompany. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ title, text }: {title: string, text: string}) {
  return (
    <div className="bg-gray-700 rounded-2xl p-6 text-center shadow-md hover:scale-[1.02] transition-transform duration-200">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base md:text-lg opacity-90">{text}</p>
    </div>
  );
}
