import type { Category } from '@/types/ui.types'

export const mockCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "/placeholder.svg?height=200&width=200",
    description: "Latest gadgets and electronic devices",
    productCount: 4
  },
  {
    id: 2,
    name: "Clothing",
    slug: "clothing",
    image: "/placeholder.svg?height=200&width=200",
    description: "Fashion and apparel for all styles",
    productCount: 2
  },
  {
    id: 3,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "/placeholder.svg?height=200&width=200",
    description: "Everything for your home and kitchen",
    productCount: 3
  },
  {
    id: 4,
    name: "Sports & Fitness",
    slug: "sports-fitness",
    image: "/placeholder.svg?height=200&width=200",
    description: "Equipment and gear for active lifestyle",
    productCount: 2
  },
  {
    id: 5,
    name: "Accessories",
    slug: "accessories",
    image: "/placeholder.svg?height=200&width=200",
    description: "Stylish accessories and bags",
    productCount: 1
  }
]

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return mockCategories.find(category => category.slug === slug)
} 