"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface SavingsDisplayProps {
  savings: number
  yearlySavings: number
  traditionalCost: number
  ourCost: number
}

const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ 
  value, 
  duration = 800 
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const previousValue = useRef(0)

  useEffect(() => {
    const startValue = previousValue.current
    const endValue = value
    const startTime = Date.now()

    const updateCounter = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart)
      
      setDisplayValue(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
    previousValue.current = value
  }, [value, duration])

  return <span>{formatCurrency(displayValue)}</span>
}

const ModernSlider: React.FC<{
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  label: string
}> = ({ value, onChange, min, max, label }) => {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
        <span className="text-lg font-bold text-white bg-white/10 px-3 py-1 rounded-lg">
          {value}
        </span>
      </div>
      <div className="relative">
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{ width: `${percentage}%` }}
            layout
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  )
}

const SavingsDisplay: React.FC<SavingsDisplayProps> = ({ 
  savings, 
  yearlySavings, 
  traditionalCost, 
  ourCost 
}) => {
  const savingsPercentage = Math.round((savings / traditionalCost) * 100)

  return (
    <div className="space-y-6">
      {/* Main Savings Card */}
      <motion.div
        className="text-center p-8 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl border border-emerald-500/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-5xl font-bold text-emerald-400 mb-2">
          Save <AnimatedCounter value={savings} />/month
        </div>
        <p className="text-gray-300 mb-4">
          Compared to traditional marketing tools and agencies
        </p>
        <div className="text-xl text-emerald-300">
          That&apos;s <AnimatedCounter value={yearlySavings} /> per year!
        </div>
      </motion.div>

      {/* Cost Comparison Cards */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-2xl mb-1">💸</div>
          <div className="text-sm text-gray-400 mb-1">Traditional Cost</div>
          <div className="text-lg font-bold text-red-400">
            {formatCurrency(traditionalCost)}
          </div>
        </motion.div>

        <motion.div
          className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-2xl mb-1">⭐</div>
          <div className="text-sm text-gray-400 mb-1">ADmyBRAND</div>
          <div className="text-lg font-bold text-blue-400">
            {formatCurrency(ourCost)}
          </div>
        </motion.div>

        <motion.div
          className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-2xl mb-1">📈</div>
          <div className="text-sm text-gray-400 mb-1">Savings %</div>
          <div className="text-lg font-bold text-green-400">
            {savingsPercentage}%
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const EnhancedPricingCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(20)
  const [campaigns, setCampaigns] = useState(22)

  const calculateSavings = () => {
    const traditionalCost = (teamSize * 50) + (campaigns * 100)
    const ourCost = teamSize <= 5 ? 79 : teamSize <= 20 ? 159 : 299
    return traditionalCost - ourCost
  }

  const calculateYearlySavings = () => {
    return calculateSavings() * 12
  }

  const getRecommendedPlan = () => {
    if (teamSize <= 5) return "Professional"
    if (teamSize <= 20) return "Professional"
    return "Enterprise"
  }

  const savings = calculateSavings()
  const yearlySavings = calculateYearlySavings()
  const traditionalCost = (teamSize * 50) + (campaigns * 100)
  const ourCost = teamSize <= 5 ? 79 : teamSize <= 20 ? 159 : 299

  return (
    <Card className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <CardHeader className="relative z-10 text-center pb-6">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          💰 Pricing Calculator
        </CardTitle>
        <p className="text-gray-300">
          See how much you can save with ADmyBRAND AI Suite
        </p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-8">
        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModernSlider
            value={teamSize}
            onChange={setTeamSize}
            min={1}
            max={50}
            label="Team Size"
          />
          <ModernSlider
            value={campaigns}
            onChange={setCampaigns}
            min={1}
            max={100}
            label="Monthly Campaigns"
          />
        </div>

        {/* Savings Display */}
        <SavingsDisplay
          savings={savings}
          yearlySavings={yearlySavings}
          traditionalCost={traditionalCost}
          ourCost={ourCost}
        />

        {/* Recommended Plan */}
        <motion.div
          className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-sm text-gray-400 mb-2">Recommended Plan</div>
          <div className="text-xl font-bold text-white">{getRecommendedPlan()}</div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            🚀 Start Free Trial & Save {formatCurrency(savings)}/month
          </motion.button>
          <p className="text-sm text-gray-400 mt-3 flex items-center justify-center space-x-4">
            <span>✨ No credit card required</span>
            <span>•</span>
            <span>🎯 14-day free trial</span>
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}

export default EnhancedPricingCalculator
