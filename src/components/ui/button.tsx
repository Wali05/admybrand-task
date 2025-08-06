"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass" | "gradient" | "secondary"
  size?: "default" | "sm" | "lg" | "xl" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 hover:text-gray-900",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      glass: "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 shadow-glass",
      gradient: "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-glow",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      xl: "h-12 px-10 text-base",
      icon: "h-10 w-10"
    }
    
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95 duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
