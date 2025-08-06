"use client"

import Image from "next/image"
import { CalendarDaysIcon, ClockIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn, Stagger } from "@/components/ui/animations"

const blogPosts = [
  {
    title: "The Future of AI in Marketing: 2025 Trends and Predictions",
    excerpt: "Explore the cutting-edge AI technologies that will shape marketing strategies in 2025 and beyond.",
    category: "AI Trends",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "How to Create High-Converting Ad Copy with AI",
    excerpt: "Learn proven techniques for using AI to generate compelling ad copy that drives conversions.",
    category: "Tutorial",
    readTime: "6 min read",
    date: "Jan 12, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    title: "Case Study: 300% ROI Increase with AI-Powered Campaigns",
    excerpt: "See how TechStart Inc. transformed their marketing results using our AI Suite.",
    category: "Case Study",
    readTime: "10 min read",
    date: "Jan 10, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    title: "Marketing Automation Best Practices for 2025",
    excerpt: "Discover the latest automation strategies that are driving success for modern marketing teams.",
    category: "Strategy",
    readTime: "7 min read",
    date: "Jan 8, 2025",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  }
]

const resources = [
  {
    title: "AI Marketing Playbook",
    description: "Complete guide to implementing AI in your marketing strategy",
    type: "PDF Guide",
    downloadCount: "2.3k downloads"
  },
  {
    title: "ROI Calculator Template",
    description: "Calculate the potential ROI of your AI marketing investments",
    type: "Excel Template",
    downloadCount: "1.8k downloads"
  },
  {
    title: "Brand Voice Training Kit",
    description: "Tools and templates for training AI to match your brand voice",
    type: "Resource Kit",
    downloadCount: "1.5k downloads"
  }
]

const BlogResourcesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-4">
              Insights &
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights, guides, and resources on AI-powered marketing.
            </p>
          </div>
        </FadeIn>

        {/* Featured Blog Post */}
        <FadeIn delay={0.2}>
          <Card variant="elevated" className="mb-16 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <Badge>{blogPosts[0].category}</Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button variant="gradient" className="group">
                  Read Article
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Visual Divider */}
        <FadeIn delay={0.4}>
          <div className="mb-16 flex justify-center">
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </FadeIn>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
            <Stagger staggerDelay={0.1}>
              <div className="space-y-6">
                {blogPosts.slice(1).map((post, index) => (
                  <Card key={index} variant="elevated" className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex">
                      <div className="w-32 h-24 flex-shrink-0 relative overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={128}
                          height={96}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </Stagger>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Free Resources</h3>
            <Stagger staggerDelay={0.1}>
              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <Card key={index} variant="elevated" className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {resource.description}
                          </p>
                        </div>
                        <Badge variant="outline" className="ml-4 flex-shrink-0">
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {resource.downloadCount}
                        </span>
                        <Button variant="outline" size="sm" className="group">
                          Download
                          <ArrowRightIcon className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Stagger>
          </div>
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Resources
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default BlogResourcesSection
