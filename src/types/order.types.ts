import type { PaymentMethod } from "./checkout.types"
import type { Address } from "./user.types"

export interface OrderItem {
  id: string
  productId: number
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
  sku?: string
}

export interface Order {
  id: string
  orderNumber: string
  userId: number
  items: OrderItem[]
  status: OrderStatus
  subtotal: number
  shipping: number
  tax: number
  total: number
  discount?: number
  discountCode?: string
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  createdAt: string
  updatedAt: string
  estimatedDelivery?: string
  trackingNumber?: string
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface OrderSummary {
  orderNumber: string
  total: number
  items: OrderItem[]
  estimatedDelivery: string
  shippingAddress: string
  paymentMethod: string
}

export interface OrderHistory {
  orders: Order[]
  totalOrders: number
  totalSpent: number
} 