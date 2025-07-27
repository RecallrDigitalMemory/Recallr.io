'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '@/utils/supabaseClient';

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
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <Image
          src="/recallr-logo.png"
          alt="Recallr Logo"
          width={50}
          height={50}
        />
        <a
          href="#"
          className="text-blue-600 font-medi
