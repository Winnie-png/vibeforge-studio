import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-[#F2F2F2] font-sans">
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 bg-[#1A1F2E] backdrop-blur-md p-4 flex justify-between items-center z-50 shadow-md"
      >
        <h1 className="text-lg font-semibold text-[#FFEBBB]">Vibeforge</h1>
        <div className="space-x-4">
          <a href="#" className="text-[#23A6D5] hover:underline">Home</a>
          <a href="#" className="text-[#23A6D5] hover:underline">Blocks</a>
          <a href="#" className="text-[#23A6D5] hover:underline">Contact</a>
        </div>
      </motion.nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Vibeforge Studio</h1>
        <p className="text-xl text-[#FFEBBB] mb-8">Where design meets rhythm</p>
        <button className="bg-[#23A6D5] text-[#0B0F1A] px-6 py-3 rounded-2xl font-medium hover:scale-105 transition">
          Explore MoodBlocks
        </button>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">MoodBlocks Vol. 1</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1A1F2E] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
            <h3 className="text-xl font-bold mb-2">Lo-Fi Nav</h3>
            <p className="text-sm text-gray-300 mb-4">Mood-reactive navbar</p>
            <button className="text-[#23A6D5] hover:underline">Preview</button>
          </div>

          <div className="bg-[#1A1F2E] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
            <h3 className="text-xl font-bold mb-2">Pulse Button</h3>
            <p className="text-sm text-gray-300 mb-4">Soft animated glow on hover</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #23A6D5" }}
              className="bg-[#23A6D5] text-[#0B0F1A] px-5 py-2 rounded-full font-semibold transition"
            >
              Try Me
            </motion.button>
          </div>

          <motion.div
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1A1F2E] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition transform-gpu"
          >
            <h3 className="text-xl font-bold mb-2">Echo Card</h3>
            <p className="text-sm text-gray-300 mb-4">Responsive card with motion</p>
            <div className="bg-[#23A6D5]/10 p-4 rounded-xl">
              <p className="text-[#FFEBBB] text-sm">"Code is a reflection of emotion."</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Built by devs who feel the flow</h2>
        <p className="max-w-xl mx-auto text-gray-400">
          At Vibeforge, we code from the soul — combining interactive design, smooth animations, and emotional UI elements to help your projects resonate.
        </p>
      </section>

      <footer className="py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2025 Vibeforge Studio. Crafted with vibe.</p>
      </footer>
    </main>
  );
}
