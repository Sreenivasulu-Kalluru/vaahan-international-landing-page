import { Shield, Zap, Globe, Car, Cpu, Code2, BatteryCharging, Network } from "lucide-react"

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Innovation", href: "#innovation" },
]

export const ABOUT_FEATURES = [
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

export const SERVICES_DATA = [
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
