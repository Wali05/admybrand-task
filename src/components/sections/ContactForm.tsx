"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/ui/animations"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  interests: z.array(z.string()).optional()
})

type ContactFormData = z.infer<typeof contactSchema>

const interests = [
  "AI Content Generation",
  "Marketing Automation",
  "Analytics & Insights",
  "Campaign Optimization",
  "Integration Support",
  "Custom Solutions"
]

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", { ...data, interests: selectedInterests })
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    setSelectedInterests([])
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Get Started
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your marketing with AI? Let&apos;s discuss how ADmyBRAND can help your business grow.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card variant="elevated" className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/30">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-white">
                Contact Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Thank you for your message!
                  </h3>
                  <p className="text-gray-300">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      {...register("name")}
                      label="Full Name"
                      placeholder="Enter your full name"
                      error={errors.name?.message}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input
                      {...register("email")}
                      type="email"
                      label="Email Address"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      {...register("company")}
                      label="Company Name"
                      placeholder="Your company"
                      error={errors.company?.message}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input
                      {...register("phone")}
                      type="tel"
                      label="Phone Number (Optional)"
                      placeholder="+1 (555) 123-4567"
                      error={errors.phone?.message}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      What are you interested in? (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`text-left p-3 rounded-lg border text-sm transition-colors ${
                            selectedInterests.includes(interest)
                              ? "bg-gray-700 border-gray-600 text-white"
                              : "bg-gray-800/30 border-gray-700 text-gray-300 hover:bg-gray-700/50"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your project and how we can help..."
                      className={`w-full px-3 py-2 border rounded-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-0"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactForm
