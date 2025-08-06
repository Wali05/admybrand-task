"use client"

import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/ui/animations"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API Documentation", href: "/docs" },
    { name: "Security", href: "/security" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" }
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Webinars", href: "/webinars" },
    { name: "Case Studies", href: "/case-studies" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "License", href: "/license" }
  ]
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "Facebook", href: "#", icon: "f" },
  { name: "YouTube", href: "#", icon: "▶" },
  { name: "Instagram", href: "#", icon: "📷" }
]

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with AI Marketing Insights
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest trends, tips, and exclusive content delivered to your inbox. 
                Join 25,000+ marketing professionals.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  variant="glass"
                  className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                />
                <Button variant="glass" className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-0">
                  Subscribe
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ADmyBRAND AI Suite
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Empowering marketing teams worldwide with cutting-edge AI technology. 
                  Transform your campaigns, boost ROI, and scale your brand effortlessly.
                </p>
              </div>
              
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-3 text-blue-400" />
                  123 Innovation Drive, San Francisco, CA 94107
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-3 text-blue-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-3 text-blue-400" />
                  hello@admybrand.ai
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Product Links */}
          <div>
            <FadeIn delay={0.1}>
              <h4 className="text-lg font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Company Links */}
          <div>
            <FadeIn delay={0.2}>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Resources Links */}
          <div>
            <FadeIn delay={0.3}>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Legal Links */}
          <div>
            <FadeIn delay={0.4}>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ADmyBRAND AI Suite. All rights reserved.
              </div>
              
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-bold">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  )
}

export default Footer
