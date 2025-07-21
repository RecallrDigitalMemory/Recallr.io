export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <header className="mb-10">
          <img src="/Recallr-logo.png" alt="Recallr logo" className="h-10 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Recallr</h1>
          <p className="text-lg text-gray-600 max-w-prose">
            A memory you can talk to — ask anything from your notes, meetings, or docs.
          </p>
        </header>

        {/* Features */}
        <section className="mb-12 space-y-4">
          <h2 className="text-xl font-semibold">Why Recallr?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Never forget what was said in a meeting</li>
            <li>Find key decisions from your notes</li>
            <li>Instantly recall project history</li>
          </ul>
        </section>

        {/* CTA Button */}
        <section>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Join the Waitlist
          </a>
        </section>
      </div>
    </main>
  );
}
