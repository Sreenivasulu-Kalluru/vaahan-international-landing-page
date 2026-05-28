"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance",
      description: "Optimized software architectures for instantaneous response times and maximum efficiency."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Reliability",
      description: "Automotive-grade embedded systems designed with uncompromised safety and security."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Sustainability",
      description: "Building the foundation for a zero-emission future with advanced EV ecosystems."
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Redefining Mobility Through <span className="text-primary">Software</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Vaahan, we believe the vehicle of tomorrow is defined by the software it runs today. We are transitioning the automotive industry from hardware-centric to software-defined, creating a seamless integration between human, machine, and the digital ecosystem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 p-8 bg-muted/30 rounded-3xl border border-border/50">
              <div className="flex flex-col gap-2">
                <h4 className="text-5xl font-extrabold text-primary">10<span className="text-2xl">+</span></h4>
                <p className="text-sm font-medium text-foreground">Years of Engineering Excellence</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-5xl font-extrabold text-primary">500<span className="text-2xl">M+</span></h4>
                <p className="text-sm font-medium text-foreground">Miles Driven by Our Tech</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 p-6 rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="shrink-0 p-4 bg-muted/50 rounded-2xl group-hover:bg-primary/10 transition-colors h-min">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
