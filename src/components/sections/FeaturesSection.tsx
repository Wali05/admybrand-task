"use client"

import { 
  SparklesIcon, 
  ChartBarIcon, 
  CogIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline"
import { FadeIn } from "@/components/ui/animations"
import CardSwapSimple from "@/components/ui/CardSwapSimple"


const features = [
  {
    icon: SparklesIcon,
    title: "AI Content Generation",
    description: "Create compelling ad copy, social media posts, and marketing materials with our advanced AI engine."
  },
  {
    icon: ChartBarIcon,
    title: "Advanced Analytics",
    description: "Get deep insights into campaign performance with real-time analytics and predictive modeling."
  },
  {
    icon: CogIcon,
    title: "Automation Tools",
    description: "Streamline your workflow with intelligent automation for posting, bidding, and optimization."
  },
  {
    icon: LightBulbIcon,
    title: "Creative Intelligence",
    description: "Discover trending topics and creative concepts tailored to your brand and audience."
  },
  {
    icon: ShieldCheckIcon,
    title: "Brand Safety",
    description: "Ensure brand consistency and safety across all channels with built-in compliance monitoring."
  },
  {
    icon: RocketLaunchIcon,
    title: "Performance Optimization",
    description: "Automatically optimize campaigns for maximum ROI using machine learning algorithms."
  }
]

const FeaturesSection = () => {
  return (
    <section 
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Powerful Features for
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"> Modern Marketing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial intelligence.
            </p>
          </div>
        </FadeIn>

        {/* CardSwap Effect */}
        <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <CardSwapSimple
            delay={1000}
            pauseOnHover={true}
            width={480}
            height={340}
          >
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </CardSwapSimple>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
              <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">And many more features coming soon...</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default FeaturesSection
