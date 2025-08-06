"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, Stagger } from "@/components/ui/animations"
import { formatCurrency } from "@/lib/utils"
import EnhancedPricingCalculator from "@/components/ui/EnhancedPricingCalculator"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 campaigns",
      "Basic AI content generation",
      "Email support",
      "Basic analytics",
      "Social media scheduling"
    ],
    limitations: [
      "Limited to 1,000 AI generations/month",
      "No advanced automation"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses and agencies",
    features: [
      "Unlimited campaigns",
      "Advanced AI content generation",
      "Priority support",
      "Advanced analytics & insights",
      "Multi-platform automation",
      "A/B testing tools",
      "Custom templates"
    ],
    limitations: [],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated account manager",
      "White-label options",
      "API access",
      "Advanced integrations",
      "Custom reporting",
      "SSO & enterprise security"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales"
  }
]

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 80,
          opacity: 0,
          rotationY: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Simple, Transparent
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start with our free trial and upgrade as you grow.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <EnhancedPricingCalculator />
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                ref={(el) => { if (el) cardsRef.current[index] = el }}
                variant="elevated" 
                className={`relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 ${plan.popular ? 'ring-2 ring-white/30 scale-105' : ''} hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-white/20 to-gray-300/20 text-white px-4 py-1 border border-white/20">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-white">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">
                      {formatCurrency(plan.price)}
                    </span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "gradient" : "default"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <XMarkIcon className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Stagger>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✓ Cancel anytime</span>
              <span>✓ No setup fees</span>
              <span>✓ 24/7 support</span>
              <span>✓ Money-back guarantee</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default PricingSection
