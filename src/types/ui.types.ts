export interface Banner {
  id: number
  title: string
  subtitle?: string
  description?: string
  image: string
  ctaText?: string
  ctaLink?: string
  badge?: string
  discount?: string
  bgGradient?: string
  textColor?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface Review {
  id: number
  user: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  comments: number
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  description?: string
  productCount: number
}

export interface Collection {
  id: number
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  featured: boolean
}

export interface NavItem {
  id: string
  label: string
  href: string
  icon?: string
  children?: NavItem[]
}

export interface FilterOption {
  id: string
  label: string
  value: string
  count?: number
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
} 