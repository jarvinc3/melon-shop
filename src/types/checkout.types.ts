import type { Address } from './user.types'

export interface PaymentMethod {
  id: string
  type: 'card' | 'paypal' | 'apple_pay' | 'google_pay'
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
  isDefault: boolean
  cardholderName?: string
}

export interface CheckoutForm {
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  useShippingForBilling: boolean
  acceptTerms: boolean
  marketingConsent: boolean
}

export interface CheckoutState {
  step: CheckoutStep
  form: CheckoutForm
  isLoading: boolean
  error: string | null
}

export type CheckoutStep =
  | 'shipping'
  | 'payment'
  | 'review'
  | 'confirmation'

export interface ShippingOption {
  id: string
  name: string
  price: number
  estimatedDays: string
  description: string
}

export interface DiscountCode {
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minAmount?: number
  maxDiscount?: number
  validUntil: string
  usageLimit?: number
  usedCount: number
} 