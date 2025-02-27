// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-4 mt-8">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Doraemon Fan Site
      </p>
    </footer>
  );
}
