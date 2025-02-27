// src/app/characters/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const characters = [
  { id: 1, name: "Doraemon", image: "/assets/Doraemon.jpg" },
  { id: 2, name: "Nobita", image: "/assets/Nobita.png" },
  { id: 3, name: "Shizuka", image: "/assets/Shizuka.jpg" },
  { id: 4, name: "Geyan", image: "/assets/Geyan.jpg" },
  { id: 5, name: "Suneo", image: "/assets/Suneo.png" },
];

export default function CharactersPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((char) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={char.image}
                alt={char.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-white">{char.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
