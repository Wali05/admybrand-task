"use client"

import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer: "Our AI-powered platform analyzes your brand, target audience, and campaign goals to generate optimized marketing content and strategies. Simply input your requirements, and our advanced algorithms will create compelling ad copy, social media posts, and campaign structures tailored to your needs."
  },
  {
    question: "What types of marketing content can I generate?",
    answer: "You can create a wide variety of content including social media posts, ad copy for Google and Facebook, email marketing campaigns, blog articles, product descriptions, and landing page copy. Our AI understands different platforms and optimizes content accordingly."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with access to all Starter plan features. No credit card required. You can generate up to 100 AI pieces during your trial period to fully experience our platform's capabilities."
  },
  {
    question: "How accurate is the AI-generated content?",
    answer: "Our AI models are trained on millions of high-performing marketing campaigns and are continuously updated. The content achieves 90%+ accuracy and relevance. However, we always recommend reviewing and customizing the output to match your specific brand voice."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Absolutely! We offer integrations with popular platforms including Google Ads, Facebook Business Manager, Mailchimp, HubSpot, Shopify, and many more. Our API allows for custom integrations with your existing workflow."
  },
  {
    question: "What support is available?",
    answer: "We provide 24/7 email support for all plans, with priority support for Professional and Enterprise users. Enterprise customers also get dedicated account management and custom training sessions for their teams."
  }
]

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div 
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600/50"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-inset"
          >
            <span className="text-lg font-semibold text-white">
              {item.question}
            </span>
            <ChevronDownIcon 
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ${
            openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 pb-4">
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
