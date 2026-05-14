/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MusicSection from "./components/MusicSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-deep-black selection:bg-gold selection:text-black">
      <Particles />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MusicSection />
        <Gallery />
        <Contact />
      </main>

      {/* Cursor Glow Effect - Subtle following effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-30 mix-blend-screen hidden lg:block">
        <CursorGlow />
      </div>
    </div>
  );
}

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const moveGlow = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <div 
      id="cursor-glow" 
      className="w-[300px] h-[300px] bg-gold/20 blur-[100px] rounded-full transition-transform duration-300 ease-out will-change-transform"
    />
  );
}
