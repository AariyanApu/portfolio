"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MovieItem {
  title: string;
  year: string;
  genre: string;
  imdb: string;
  rating: string | null;
  description: string;
  director: string;
  cast: string[];
}

interface SeriesItem {
  title: string;
  year: string;
  genre: string;
  imdb: string;
  rating: string;
  description: string;
  creator: string;
  cast: string[];
  network: string;
  seasons: number;
}

interface BookItem {
  title: string;
  author: string;
  year: string;
  genre: string;
  goodreads: string;
  rating: string;
  description: string;
  pages: number;
}

interface SongItem {
  title: string;
  artist: string;
  vibe: string;
  from?: string;
  spotifyId: string;
}

interface InterestItem {
  emoji: string;
  label: string;
}

interface BeyondCodeTabsProps {
  movies: MovieItem[];
  series: SeriesItem[];
  books: BookItem[];
  songs: SongItem[];
  interests: InterestItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedGrid({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

function ExternalIconLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="shrink-0 text-muted-foreground hover:text-teal transition-colors"
    >
      <ExternalLink className="size-3.5" />
    </a>
  );
}

function RatingRow({
  score,
  outOf,
  source,
}: {
  score: string;
  outOf: string;
  source: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Star className="size-3.5 fill-teal text-teal shrink-0" />
      <span className="font-sans text-sm font-bold text-teal">{score}</span>
      <span className="font-sans text-xs text-muted-foreground">
        / {outOf} · {source}
      </span>
    </div>
  );
}

function CastRow({ names }: { names: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1">
      {names.map((name) => (
        <span
          key={name}
          className="inline-flex items-center font-sans text-xs text-teal bg-teal/10 border border-teal/20 rounded-full px-2.5 py-0.5"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

function MovieCard({ movie }: { movie: MovieItem }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-colors duration-200 p-4 sm:p-5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <Badge variant="secondary" className="font-sans text-xs">
          {movie.genre}
        </Badge>
        <ExternalIconLink href={movie.imdb} label={`${movie.title} on IMDb`} />
      </div>

      <div>
        <h3 className="font-title text-lg font-black text-foreground leading-tight">
          {movie.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground mt-0.5">
          {movie.year} · {movie.director}
        </p>
      </div>

      {movie.rating ? (
        <RatingRow score={movie.rating} outOf="10" source="IMDb" />
      ) : (
        <span className="font-sans text-xs text-muted-foreground/60">
          Rating not yet available
        </span>
      )}

      <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {movie.description}
      </p>

      <CastRow names={movie.cast} />
    </motion.div>
  );
}

function SeriesCard({ series }: { series: SeriesItem }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-colors duration-200 p-4 sm:p-5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-sans text-xs">
            {series.genre}
          </Badge>
          <span className="font-sans text-xs text-muted-foreground">
            {series.network} · {series.seasons}S
          </span>
        </div>
        <ExternalIconLink href={series.imdb} label={`${series.title} on IMDb`} />
      </div>

      <div>
        <h3 className="font-title text-lg font-black text-foreground leading-tight">
          {series.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground mt-0.5">
          {series.year} · {series.creator}
        </p>
      </div>

      <RatingRow score={series.rating} outOf="10" source="IMDb" />

      <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {series.description}
      </p>

      <CastRow names={series.cast} />
    </motion.div>
  );
}

function BookCard({ book }: { book: BookItem }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-colors duration-200 p-4 sm:p-5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <Badge variant="secondary" className="font-sans text-xs">
          {book.genre}
        </Badge>
        <ExternalIconLink
          href={book.goodreads}
          label={`${book.title} on Goodreads`}
        />
      </div>

      <div>
        <h3 className="font-title text-lg font-black text-foreground leading-tight">
          {book.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground mt-0.5">
          {book.author} · {book.year}
        </p>
      </div>

      <RatingRow score={book.rating} outOf="5" source="Goodreads" />

      <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {book.description}
      </p>

      <p className="font-sans text-xs text-muted-foreground/50 mt-auto">
        {book.pages} pages
      </p>
    </motion.div>
  );
}

export function BeyondCodeTabs({
  movies,
  series,
  books,
  songs,
  interests,
}: BeyondCodeTabsProps) {
  return (
    <Tabs defaultValue="movies">
      <TabsList className="flex flex-wrap h-auto gap-1 mb-6 bg-muted/30 border border-border rounded-xl p-1.5 w-full sm:w-auto">
        <TabsTrigger value="movies" className="font-sans text-xs sm:text-sm rounded-lg">
          🎬 Movies
        </TabsTrigger>
        <TabsTrigger value="series" className="font-sans text-xs sm:text-sm rounded-lg">
          📺 Series
        </TabsTrigger>
        <TabsTrigger value="books" className="font-sans text-xs sm:text-sm rounded-lg">
          📚 Books
        </TabsTrigger>
        <TabsTrigger value="songs" className="font-sans text-xs sm:text-sm rounded-lg">
          🎵 Songs
        </TabsTrigger>
        <TabsTrigger value="interests" className="font-sans text-xs sm:text-sm rounded-lg">
          ✨ Interests
        </TabsTrigger>
      </TabsList>

      <TabsContent value="movies">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {movies.map((m) => (
            <MovieCard key={m.title} movie={m} />
          ))}
        </AnimatedGrid>
      </TabsContent>

      <TabsContent value="series">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {series.map((s) => (
            <SeriesCard key={s.title} series={s} />
          ))}
        </AnimatedGrid>
      </TabsContent>

      <TabsContent value="books">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {books.map((b) => (
            <BookCard key={b.title} book={b} />
          ))}
        </AnimatedGrid>
      </TabsContent>

      <TabsContent value="songs">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {songs.map((song) => (
            <motion.div
              key={song.title}
              variants={itemVariants}
              className="rounded-xl border border-border bg-muted/20 overflow-hidden flex flex-col"
            >
              <iframe
                title={`${song.title} by ${song.artist}`}
                src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block border-0"
              />
              <div className="px-4 pb-4 pt-3 flex items-center justify-between gap-2">
                <div>
                  <p className="font-title text-sm font-black text-foreground leading-tight">
                    {song.title}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">
                    {song.artist}
                    {song.from && (
                      <span className="text-muted-foreground/60">
                        {" "}· {song.from}
                      </span>
                    )}
                  </p>
                </div>
                <Badge variant="secondary" className="font-sans text-xs shrink-0">
                  {song.vibe}
                </Badge>
              </div>
            </motion.div>
          ))}
        </AnimatedGrid>
      </TabsContent>

      <TabsContent value="interests">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-colors duration-200 p-4 sm:p-5 flex items-center gap-4"
            >
              <span className="text-3xl shrink-0">{item.emoji}</span>
              <p className="font-sans text-sm text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </AnimatedGrid>
      </TabsContent>
    </Tabs>
  );
}
