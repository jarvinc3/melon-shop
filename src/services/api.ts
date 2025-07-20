import { mockBanners } from '@/data/banners'
import { getCategoryBySlug, mockCategories } from '@/data/categories'
import { mockOrders, mockOrderSummary } from '@/data/orders'
import { getProductById, getProductsByCategory, mockProducts, searchProducts } from '@/data/products'
import { mockTestimonials } from '@/data/testimonials'
import type {
   CategoriesResponse,
   CreateOrderResponse,
   ProductResponse,
   ProductsResponse,
   UpdateCartResponse,
   UpdateWishlistResponse
} from '@/types/api.types'
import type { CartState } from '@/types/cart.types'
import type { PaymentMethod } from '@/types/checkout.types'
import type { Order, OrderItem, OrderSummary } from '@/types/order.types'
import type { Banner, Category, Testimonial } from '@/types/ui.types'
import type { Address } from '@/types/user.types'
import type { WishlistState } from '@/types/wishlist.types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const productsApi = {
   getProducts: async (page = 1, limit = 12): Promise<ProductsResponse> => {
      await delay(500)

      const filteredProducts = [...mockProducts]

      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

      return {
         data: paginatedProducts,
         pagination: {
            currentPage: page,
            totalPages: Math.ceil(filteredProducts.length / limit),
            totalItems: filteredProducts.length,
            itemsPerPage: limit,
            hasNextPage: endIndex < filteredProducts.length,
            hasPrevPage: page > 1
         },
         success: true
      }
   },

   getProduct: async (id: number): Promise<ProductResponse> => {
      await delay(300)
      const product = getProductById(id)

      if (!product) {
         throw new Error('Product not found')
      }

      return {
         data: product,
         success: true
      }
   },

   getProductsByCategory: async (category: string): Promise<ProductsResponse> => {
      await delay(400)
      const products = getProductsByCategory(category)

      return {
         data: products,
         pagination: {
            currentPage: 1,
            totalPages: 1,
            totalItems: products.length,
            itemsPerPage: products.length,
            hasNextPage: false,
            hasPrevPage: false
         },
         success: true
      }
   },

   searchProducts: async (query: string): Promise<ProductsResponse> => {
      await delay(300)
      const products = searchProducts(query)

      return {
         data: products,
         pagination: {
            currentPage: 1,
            totalPages: 1,
            totalItems: products.length,
            itemsPerPage: products.length,
            hasNextPage: false,
            hasPrevPage: false
         },
         success: true
      }
   }
}

export const categoriesApi = {
   getCategories: async (): Promise<CategoriesResponse> => {
      await delay(200)
      return {
         data: mockCategories,
         success: true
      }
   },

   getCategory: async (slug: string): Promise<Category | null> => {
      await delay(200)
      return getCategoryBySlug(slug) || null
   }
}

export const uiApi = {
   getBanners: async (): Promise<Banner[]> => {
      await delay(200)
      return mockBanners
   },

   getTestimonials: async (): Promise<Testimonial[]> => {
      await delay(200)
      return mockTestimonials
   }
}

export const ordersApi = {
   createOrder: async (orderData: Record<string, unknown>): Promise<CreateOrderResponse> => {
      await delay(1000)

      const newOrder: Order = {
         id: `order-${Date.now()}`,
         orderNumber: `#ORD-${Date.now()}`,
         userId: 1,
         items: orderData.items as OrderItem[],
         status: 'confirmed',
         subtotal: orderData.subtotal as number,
         shipping: orderData.shipping as number,
         tax: orderData.tax as number,
         total: orderData.total as number,
         shippingAddress: orderData.shippingAddress as Address,
         billingAddress: orderData.billingAddress as Address,
         paymentMethod: orderData.paymentMethod as PaymentMethod,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString(),
         estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
         trackingNumber: `TRK${Date.now()}`
      }

      return {
         data: newOrder,
         success: true,
         message: 'Order created successfully'
      }
   },

   getOrderSummary: async (): Promise<OrderSummary> => {
      await delay(300)
      return mockOrderSummary
   },

   getOrders: async (): Promise<Order[]> => {
      await delay(400)
      return mockOrders
   }
}

export const cartApi = {
   updateCart: async (cartData: CartState): Promise<UpdateCartResponse> => {
      await delay(200)
      return {
         data: cartData,
         success: true
      }
   }
}

export const wishlistApi = {
   updateWishlist: async (wishlistData: WishlistState): Promise<UpdateWishlistResponse> => {
      await delay(200)
      return {
         data: wishlistData,
         success: true
      }
   }
} 