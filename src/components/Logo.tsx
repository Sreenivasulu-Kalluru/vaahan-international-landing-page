import * as React from "react"

export function Logo({ className = "w-8 h-8", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer sleek 'V' shape resembling a road or aerodynamics */}
      <path d="M2 3L12 21L22 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Inner tech lines / data nodes */}
      <path d="M7 3L12 12L17 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <line x1="12" y1="12" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      
      {/* Top data points */}
      <circle cx="7" cy="3" r="1.5" fill="currentColor" />
      <circle cx="17" cy="3" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
