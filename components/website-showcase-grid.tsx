"use client"

import { useState } from "react"
import { X, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Website {
  id: string
  title: string
  url: string
  description: string
  tags: string[]
  category?: string
  imageUrl?: string // New prop for thumbnail image
}

interface WebsiteShowcaseGridProps {
  websites: Website[]
  columns?: 2 | 3 | 4
  title?: string
  description?: string
  className?: string
}

export function WebsiteShowcaseGrid({
  websites,
  columns = 4,
  title,
  description,
  className = "",
}: WebsiteShowcaseGridProps) {
  const [expandedSite, setExpandedSite] = useState<Website | null>(null)

  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2"
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    }
  }

  return (
    <div className={`relative ${className}`}>
      {title && (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
            {description && (
              <p className="max-w-[1100px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      <div className={`grid ${getColumnsClass()} gap-6`}>
        {websites.map((website) => (
          <div
            key={website.id}
            className="group relative rounded-lg border overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300"
          >
            {website.category && (
              <div className="absolute top-2 left-2 z-10">
                <span className="inline-flex items-center rounded-full bg-theme-blue/10 px-2.5 py-0.5 text-xs font-semibold text-theme-blue">
                  {website.category}
                </span>
              </div>
            )}
            <div className="aspect-[4/3] relative">
              {/* Thumbnail image instead of iframe */}
              <img
                src={website.imageUrl || `/api/placeholder/800/600?text=${encodeURIComponent(website.title)}`}
                alt={website.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button onClick={() => setExpandedSite(website)} variant="secondary" className="gap-2">
                  <Maximize className="h-4 w-4" />
                  Expand
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{website.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {website.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-theme-blue/10 px-2.5 py-0.5 text-xs font-semibold text-theme-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen popup with iframe */}
      {expandedSite && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-7xl h-[95vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-xl">{expandedSite.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setExpandedSite(null)}
                className="rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              {/* iframe only loads when expanded */}
              <iframe
                src={expandedSite.url}
                title={expandedSite.title}
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground">{expandedSite.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {expandedSite.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-theme-blue/10 px-2.5 py-0.5 text-xs font-semibold text-theme-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}