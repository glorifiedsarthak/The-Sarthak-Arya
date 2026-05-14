import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-b from-transparent to-gold/5">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-6">Manifesto</h2>
          <div className="relative">
            <span className="absolute -top-10 -left-10 text-[10rem] font-serif text-white/5 select-none font-bold">"</span>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-white/90 relative z-10 glass p-10 md:p-20 rounded-[4rem] shadow-2xl border-white/10">
              Sarthak Arya is an independent music artist known for creating 
              <span className="text-gold italic"> emotional, soulful soundscapes </span> 
              that connect deeply with listeners. Blending modern aesthetics with heartfelt expression, his music reflects raw feelings, memories, and untold stories. With tracks like Oxygen and Love Lies, he continues to shape a unique artistic identity in the new wave of independent music.
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
}
