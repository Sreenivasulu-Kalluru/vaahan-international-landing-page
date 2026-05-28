"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function InnovationSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="innovation" ref={containerRef} className="py-32 relative overflow-hidden bg-foreground text-background">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Innovation</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
            Pioneering the <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-background/70">
            We don&apos;t just build software; we build the foundational technologies that make intelligent, autonomous, and connected mobility possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div style={{ y: y1 }} className="space-y-8">
            <div className="bg-background/10 backdrop-blur-md p-8 rounded-3xl border border-background/20 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Digital Twin Technology</h3>
              <p className="text-background/70 leading-relaxed">
                Virtual replicas of physical vehicles allow our engineers to run millions of simulated miles, testing every possible edge case before code ever reaches a physical road.
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-md p-8 rounded-3xl border border-background/20 hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Over-The-Air (OTA) Mastery</h3>
              <p className="text-background/70 leading-relaxed">
                Seamless, secure, and differential updates ensure that a vehicle gets better, smarter, and safer with every passing day, extending its lifecycle indefinitely.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="h-full">
            <div className="h-full min-h-[400px] rounded-3xl bg-linear-to-br from-primary/40 to-blue-600/40 border border-background/20 relative overflow-hidden flex items-center justify-center p-8">
              {/* Abstract representation of tech */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-[300px] h-[300px] rounded-full border border-dashed border-background/30 absolute"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-[200px] h-[200px] rounded-full border border-background/40 absolute"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[100px] h-[100px] rounded-full bg-primary absolute blur-xl opacity-80"
                />
                <div className="z-10 font-bold text-3xl tracking-widest text-white drop-shadow-lg">
                  FUTURE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
