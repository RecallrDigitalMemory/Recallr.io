"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/utils/supabaseClient";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <header className="flex justify-between items-center mb-20">
        <Image
          src="/recallr-logo.png"
          alt="Recallr Logo"
          width={50}
          height={50}
        />
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline"
        >
          Join Waitlist
        </a>
      </header>

      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {isLoggedIn ? (
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="Ask Recallr anything..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
            <h2 className="text-2xl font-semibold text-center">Login to Recallr</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
