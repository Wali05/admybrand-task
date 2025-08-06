"use client"

import * as React from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

export interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <ChevronDownIcon
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  )
}

export interface AccordionProps {
  items: Array<{ title: string; content: string }>
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}

export { Accordion, AccordionItem }
