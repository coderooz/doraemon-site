// src/app/components/Header.tsx
"use client"; // Because we use state & animations (client-side)

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Doraemon Site
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/characters">Characters</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-blue-600 to-purple-700"
        >
          <div className="flex flex-col p-4 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/characters">Characters</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
