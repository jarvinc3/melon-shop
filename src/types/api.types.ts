// Generic API Response Types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  code: string
  details?: Record<string, unknown>
}

// Query Response Types
export type ProductsResponse = PaginatedResponse<Product>
export type ProductResponse = ApiResponse<Product>
export type CategoriesResponse = ApiResponse<Category[]>
export type CollectionsResponse = ApiResponse<Collection[]>

// Mutation Response Types
export type CreateOrderResponse = ApiResponse<Order>
export type UpdateCartResponse = ApiResponse<CartState>
export type UpdateWishlistResponse = ApiResponse<WishlistState>

// Import types that will be used
import type { CartState } from './cart.types'
import type { Order } from './order.types'
import type { Product } from './product.types'
import type { Category, Collection } from './ui.types'
import type { WishlistState } from './wishlist.types'

