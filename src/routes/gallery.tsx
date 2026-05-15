import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { gallery, profile } from "@/components/portfolio/data";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ url: string; caption: string } | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <a href="/" className="font-mono text-sm font-bold tracking-wider">
            <span className="text-gradient">KHETESH</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
        </div>
      </header>

      {/* Page title */}
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-14 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
            Moments
          </div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Highlights from hackathons, events and milestones.
          </p>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <main className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-border bg-card/60 shadow-card transition-all hover:border-primary/60 hover:shadow-neon"
              onClick={() => setLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* caption slide-up overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent px-4 pb-3 pt-10 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs font-medium text-foreground">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-border shadow-neon"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.caption}
              className="max-h-[80vh] w-auto object-contain"
            />
            {lightbox.caption && (
              <div className="bg-card/90 px-5 py-3 text-center text-sm font-medium text-foreground backdrop-blur-sm">
                {lightbox.caption}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <footer className="border-t border-border px-6 py-8 text-center font-mono text-xs text-muted-foreground sm:px-10">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
