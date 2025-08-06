"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/animations"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite transformed our marketing operations. We've seen a 300% increase in engagement and cut our content creation time by 80%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The AI-powered insights have been game-changing. Our campaigns are now data-driven and incredibly effective. ROI increased by 250%.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    company: "BrandBuilders",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "I love how intuitive the platform is. Creating compelling content that resonates with our audience has never been easier.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Marketing Consultant",
    company: "Strategic Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The automation features save me hours every week. I can focus on strategy while the AI handles the execution perfectly.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "InnovateCo",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Outstanding platform! The creative intelligence feature helps us stay ahead of trends and create viral content consistently.",
    rating: 5
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Loved by
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Marketing Teams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their marketing with our AI-powered platform.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <FadeIn>
            <Card variant="elevated" className="mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>
                
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">250%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default TestimonialsSection
