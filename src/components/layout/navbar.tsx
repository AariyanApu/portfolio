"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/utils/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-32 py-5 bg-background/80 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/icons/icon.png"
          alt="Aariyan Apu logo"
          width={48}
          height={48}
          className="md:w-16 md:h-16"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={26} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          showCloseButton={false}
          className="bg-background border-border flex flex-col pt-24 px-8 gap-0 overflow-hidden"
        >
          {/* Close button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.5 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            onClick={() => setOpen(false)}
            className="absolute top-8 right-6 text-muted-foreground hover:text-teal transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </motion.button>

          {/* Teal accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-teal"
          />

          {/* Staggered nav links */}
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : 40 }}
              transition={{
                duration: 0.4,
                delay: open ? 0.1 + i * 0.07 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-border py-5"
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-teal transition-colors duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Bottom teal glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-teal/10 blur-3xl pointer-events-none"
          />
        </SheetContent>
      </Sheet>
    </header>
  );
}
