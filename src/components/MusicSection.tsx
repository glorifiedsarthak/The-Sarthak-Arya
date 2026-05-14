import { motion } from "motion/react";
import { Play, Calendar, Music } from "lucide-react";

const musicTracks = [
  {
    title: "Oxygen",
    plays: "2M",
    released: "2025",
    cover: "https://picsum.photos/seed/oxygen/400/400",
    id: "track-1"
  },
  {
    title: "Love Lies",
    plays: "1.9K",
    released: "2026",
    cover: "https://picsum.photos/seed/lovelies/400/400",
    id: "track-2"
  }
];

const upcoming = [
  { title: "Tu Na Milaa", date: "Coming Soon" },
  { title: "Ashiyaan", date: "In Progress" }
];

export default function MusicSection() {
  return (
    <section id="music" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-2">Discography</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-bold">Featured <span className="italic">Tracks</span></h3>
          </div>
          <div className="text-white/40 max-w-md text-right">
            Explore the latest hits and emotional journey of Sarthak Arya.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {musicTracks.map((track) => (
            <motion.div
              key={track.id}
              whileHover={{ scale: 1.02 }}
              className="group relative glass-gold p-6 rounded-3xl flex flex-col md:flex-row gap-8 items-center cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative w-48 h-48 flex-shrink-0">
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:shadow-gold/20 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl backdrop-blur-sm">
                   <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-black shadow-lg">
                      <Play fill="currentColor" size={24} />
                   </div>
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gold/60 text-xs uppercase tracking-widest mb-2">
                  <Calendar size={12} />
                  <span>Released {track.released}</span>
                </div>
                <h4 className="text-3xl font-serif font-bold mb-4">{track.title}</h4>
                <div className="flex items-center justify-center md:justify-start gap-6 text-white/50 text-sm">
                  <div className="flex items-center gap-2">
                    <Music size={14} className="text-gold" />
                    <span>{track.plays} plays</span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                  <button className="px-6 py-2 rounded-full border border-gold/30 text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all">Listen Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative glass p-12 rounded-[3rem] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] pointer-events-none"></div>
          
          <h3 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
            Upcoming <span className="text-gold">Releases</span>
            <div className="flex-grow h-px bg-white/10"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcoming.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="relative group p-8 rounded-2xl border border-white/5 bg-white/5 hover:border-gold/30 transition-all cursor-wait"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-2xl font-serif mb-1">{item.title}</h5>
                    <p className="text-gold text-xs uppercase tracking-[0.2em]">{item.date}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-gold transition-colors">
                    <Music size={20} />
                  </div>
                </div>
                <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/3 bg-gold/40"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
