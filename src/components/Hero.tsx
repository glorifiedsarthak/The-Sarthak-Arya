import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <div className="relative mb-8">
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(212, 175, 55, 0.2)",
                "0 0 70px rgba(212, 175, 55, 0.4)",
                "0 0 40px rgba(212, 175, 55, 0.2)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold/30 p-1"
          >
            <img 
              src="https://picsum.photos/seed/sarthak-hero/600/600" 
              alt="Sarthak Arya" 
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent pointer-events-none"></div>
        </div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-white uppercase leading-none"
        >
          Sarthak <span className="text-gold text-glow-gold">Arya</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm md:text-lg uppercase tracking-[0.4em] font-light text-white/60 mb-6"
        >
          Independent Artist
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-serif italic text-xl md:text-3xl text-gold/80"
        >
          "Where emotions turn into melodies."
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
      </motion.div>

      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/5 rounded-full pointer-events-none"></div>
    </section>
  );
}
