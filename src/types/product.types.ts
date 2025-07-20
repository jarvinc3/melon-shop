export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string | null
  description: string
  features: string[]
  sizes: string[]
  colors: string[]
  category?: string
  inStock: boolean
  sku?: string
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  tags?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface ProductVariant {
  id: string
  productId: number
  size: string
  color: string
  price: number
  stock: number
  sku: string
}

export interface ProductReview {
  id: number
  productId: number
  userId: number
  rating: number
  title: string
  comment: string
  createdAt: string
  userName: string
  userAvatar?: string
}

export interface ProductCategory {
  id: number
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: number
  children?: ProductCategory[]
}

export interface ProductFilter {
  category?: string
  priceRange?: {
    min: number
    max: number
  }
  colors?: string[]
  sizes?: string[]
  rating?: number
  inStock?: boolean
  sortBy?: 'price' | 'rating' | 'name' | 'createdAt'
  sortOrder?: 'asc' | 'desc'
} 