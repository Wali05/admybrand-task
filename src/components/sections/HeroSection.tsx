"use client"

import { motion } from "framer-motion"
import { PlayIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { FadeIn, ScaleIn } from "@/components/ui/animations"
import AnimatedButton from "@/components/ui/animated-button"
import TextPressure from "@/components/ui/TextPressure"
import FloatingParticles from "@/components/ui/FloatingParticles"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-800">

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <FloatingParticles />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-300/5"></div>
          </div>
          <motion.div 
            className="absolute top-32 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 right-20 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-8">
          <FadeIn delay={0.4}>
            <div className="mb-4">
              {/* TextPressure for ADMYBRAND only */}
              <div className="h-48 mb-2">
                <TextPressure
                  text="ADMYBRAND"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={80}
                  className="opacity-100 font-bold"
                />
              </div>
              {/* Regular text for AI - SUITE */}
              <div className="text-5xl font-light text-white/90 tracking-wider">
                AI - SUITE
              </div>
            </div>
          </FadeIn>        <FadeIn delay={0.6}>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your marketing with cutting-edge AI technology. 
            Create compelling campaigns, analyze performance, and scale your brand like never before.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <AnimatedButton>Start Free Trial</AnimatedButton>
            
            <Button 
              size="xl" 
              variant="glass"
              className="group px-8 py-4"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </FadeIn>

        <ScaleIn delay={1.0}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 blur-3xl rounded-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <PlayIcon className="h-16 w-16 text-white/50 mx-auto mb-3" />
                  <p className="text-white/70 text-base">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/40 rounded-full mt-1.5"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
