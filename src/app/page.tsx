// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative h-80 overflow-hidden rounded-lg shadow-xl"
      >
        <Image
          src="/assets/Doraemon Logo Image2.jpg"
          alt="Doraemon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Welcome to Doraemon&apos;s World</h1>
        </div>
      </motion.div>

      <p className="max-w-2xl text-lg text-gray-300">
        Explore the amazing world of Doraemon, Nobita, Shizuka, and their
        futuristic gadgets. This modern, eye-catching site showcases animations,
        a sleek design, and more!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/characters"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition duration-300"
        >
          View Characters
        </Link>
      </motion.div>
    </div>
  );
}
