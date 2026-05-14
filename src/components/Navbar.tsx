import { motion } from "motion/react";
import { Instagram, Youtube, Music2, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="text-xl font-serif font-bold tracking-widest text-gold text-glow-gold uppercase">
        Sarthak Arya
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium text-white/70">
        <a href="#about" className="hover:text-gold transition-colors">About</a>
        <a href="#music" className="hover:text-gold transition-colors">Music</a>
        <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
          <Instagram size={18} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
          <Youtube size={18} />
        </a>
        <button className="bg-gold px-4 py-1.5 rounded-full text-xs font-bold text-black uppercase tracking-wider hover:bg-gold-light transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          Latest Relase
        </button>
      </div>
    </motion.nav>
  );
}
