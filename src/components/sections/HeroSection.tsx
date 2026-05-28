'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Driving the Future of Mobility
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className={cn(
            'text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6',
            'bg-clip-text text-transparent bg-linear-to-br from-foreground via-foreground to-foreground/50',
          )}
        >
          Engineering the <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400">
            Next Generation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground max-w-[700px] mb-10 leading-relaxed"
        >
          A modern mobility ecosystem focused on Software Defined Vehicles,
          Embedded Systems, and premium EV technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 h-14 group">
            Explore Ecosystem
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium border border-border bg-background/50 backdrop-blur-sm hover:bg-muted rounded-full transition-colors h-14">
            Our Technology
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
