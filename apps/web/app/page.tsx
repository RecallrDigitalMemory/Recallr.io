import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 lg:px-0 py-16 flex flex-col items-center">
      <div className="max-w-xl text-center">
        <Image
          src="/recallr-logo.png"
          alt="Recallr Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Keep Memories, Not Chaos.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Recallr helps you instantly find what you wrote, said, or saved — in chats, docs, or meetings.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your best email"
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>

      {/* Feature Highlights */}
      <section className="mt-24 max-w-4xl grid gap-12 sm:grid-cols-2">
        {[
          {
            title: "Search Instantly",
            desc: "Use natural language queries across all your notes.",
          },
          {
            title: "AI Summaries",
            desc: "Get concise summaries on command.",
          },
          {
            title: "Secure & Private",
            desc: "Your data is yours. End-to-end encrypted.",
          },
          {
            title: "Multi-Platform",
            desc: "Chrome, Slack, and Mobile integration.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Ready to unlock your memory?
        </p>
        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </main>
  );
}

