// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <textarea
        className="w-full p-2 rounded bg-gray-800 text-white mb-4"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        onClick={() => alert(`Message Sent: ${message}`)}
      >
        Send
      </button>
    </div>
  );
}
