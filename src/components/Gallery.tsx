import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, url: "https://picsum.photos/seed/artist1/800/1000", title: "Studio Sessions" },
  { id: 2, url: "https://picsum.photos/seed/artist2/800/800", title: "Live Performance" },
  { id: 3, url: "https://picsum.photos/seed/artist3/1000/800", title: "Behind the Scenes" },
  { id: 4, url: "https://picsum.photos/seed/artist4/800/1000", title: "Portrait" },
  { id: 5, url: "https://picsum.photos/seed/artist5/1000/1000", title: "Vibe" },
  { id: 6, url: "https://picsum.photos/seed/artist6/800/1000", title: "Melody" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-2">Visuals</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-bold">The <span className="italic">Aesthetic</span></h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(img.url)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                 <p className="text-gold font-serif italic text-lg">{img.title}</p>
              </div>
              <div className="absolute inset-0 border-0 group-hover:border-[8px] border-gold/10 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
            <X size={32} />
          </button>
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-full rounded-lg shadow-2xl border border-gold/20"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}
