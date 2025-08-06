"use client"

import * as React from "react"
import { motion } from "framer-motion"

export interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6
}) => {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export interface ScaleInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  scale?: number
  duration?: number
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  className,
  delay = 0,
  scale = 0.8,
  duration = 0.5
}) => {
  return (
    <motion.div
      initial={{ scale, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

const Stagger: React.FC<StaggerProps> = ({
  children,
  className,
  staggerDelay = 0.1
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          key={React.isValidElement(child) ? child.key : undefined}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export { FadeIn, ScaleIn, Stagger }
