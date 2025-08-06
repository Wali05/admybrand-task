"use client"

import { FadeIn } from "@/components/ui/animations"
import FAQAccordion from "@/components/ui/FAQAccordion"

const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about ADmyBRAND AI Suite.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.2}>
          <FAQAccordion />
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you get started and make the most of our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@admybrand.ai"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg"
                >
                  Contact Support
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800/30 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default FAQSection
