'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-blue-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">About</Link>
            <Link href="/academics" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Academics</Link>
            <Link href="/admissions" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Admissions</Link>
            <Link href="/announcements" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Announcements</Link>
            <Link href="/events" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Events</Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-cyan-300 transition duration-300 font-semibold">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl font-bold p-1 hover:bg-blue-600 rounded transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu with Scrolling */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-16 bg-gradient-to-b from-slate-900 to-blue-900 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-1">
              <Link href="/" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>🏠 Home</Link>
              <Link href="/about" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>ℹ️ About Us</Link>
              <Link href="/academics" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>📚 Academics</Link>
              <Link href="/admissions" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>🎓 Admissions</Link>
              <Link href="/announcements" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>📢 Announcements</Link>
              <Link href="/events" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white border-b border-blue-700" onClick={closeMenu}>🎉 Events</Link>
              <Link href="/contact" className="block py-3 px-4 hover:bg-blue-600 hover:text-cyan-300 rounded-lg transition duration-300 font-semibold text-white" onClick={closeMenu}>📞 Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
