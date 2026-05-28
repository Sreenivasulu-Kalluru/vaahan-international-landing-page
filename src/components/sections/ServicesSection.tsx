"use client"

import { motion, Variants } from "framer-motion"
import { Car, Cpu, Code2, BatteryCharging, Network } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Software Defined Vehicles",
      description: "Decoupling hardware from software to enable continuous updates, personalization, and advanced autonomy capabilities.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Automotive Software",
      description: "Scalable, secure, and performant OS and middleware solutions for next-generation vehicle architectures.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Mission-critical hardware and firmware design ensuring functional safety (ISO 26262) and real-time processing.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "AI & Connectivity",
      description: "Edge AI integration, V2X communication, and cloud backends for intelligent fleet management and predictive maintenance.",
    },
    {
      icon: <BatteryCharging className="w-8 h-8" />,
      title: "EV Ecosystem",
      description: "Advanced Battery Management Systems (BMS), charging infrastructure software, and powertrain optimization.",
    }
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  }

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Core Focus Areas</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Engineering the Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering end-to-end technological solutions that power the most advanced vehicles on the road today and tomorrow.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className={`group relative overflow-hidden p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              } ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
