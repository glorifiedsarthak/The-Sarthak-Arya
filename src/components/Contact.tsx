import { motion } from "motion/react";
import { Send, Instagram, Youtube, Music2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-2">Connect</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8">Get In <span className="italic">Touch</span></h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              For bookings, collaborations, or just to say hello, feel free to reach out. Let's create something beautiful together.
            </p>

            <div className="space-y-6 mb-12">
               <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold">
                    <Mail size={18} />
                  </div>
                  <span>sarthak@arya.music</span>
               </div>
               <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold">
                    <MapPin size={18} />
                  </div>
                  <span>Mumbai, India</span>
               </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Youtube, Music2, Mail].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, color: '#D4AF37' }}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/50 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[3rem] border-white/10">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/20 resize-none"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold py-6 rounded-2xl text-black font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold-light transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/30 text-xs uppercase tracking-widest gap-6">
          <p>© 2026 Sarthak Arya. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
