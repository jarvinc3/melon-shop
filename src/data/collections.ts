import type { Collection } from '@/types/ui.types'

export const mockCollections: Collection[] = [
   {
      id: 1,
      name: "Summer Essentials",
      slug: "summer-essentials",
      description: "Light, breathable, and perfect for warm weather adventures",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 24,
      featured: true,
   },
   {
      id: 2,
      name: "Tech & Innovation",
      slug: "tech-innovation",
      description: "Cutting-edge gadgets and smart solutions for modern living",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 18,
      featured: false,
   },
   {
      id: 3,
      name: "Home & Comfort",
      slug: "home-comfort",
      description: "Transform your space into a sanctuary of style and comfort",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 32,
      featured: true,
   },
   {
      id: 4,
      name: "Active Lifestyle",
      slug: "active-lifestyle",
      description: "Gear up for your fitness journey with premium athletic wear",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 15,
      featured: false,
   },
   {
      id: 5,
      name: "Luxury Collection",
      slug: "luxury-collection",
      description: "Premium products for those who appreciate the finer things",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 12,
      featured: true,
   },
   {
      id: 6,
      name: "Eco-Friendly",
      slug: "eco-friendly",
      description: "Sustainable products that care for you and the planet",
      image: "/placeholder.svg?height=400&width=600",
      productCount: 28,
      featured: false,
   },
]

export const getCollections = () => mockCollections

export const getFeaturedCollections = () => mockCollections.filter(collection => collection.featured)

export const getCollectionBySlug = (slug: string) => mockCollections.find(collection => collection.slug === slug) 