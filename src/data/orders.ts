import type { Order, OrderSummary } from '@/types/order.types'

export const mockOrderSummary: OrderSummary = {
  orderNumber: "#ORD-2024-001",
  total: 44.39,
  items: [
    {
      id: "1",
      productId: 1,
      name: "Premium Wireless Headphones",
      quantity: 1,
      price: 29.99,
      size: "One Size",
      color: "Black",
      image: "/placeholder.svg?height=300&width=300",
      sku: "WH-001"
    },
    {
      id: "2",
      productId: 2,
      name: "Organic Cotton T-Shirt",
      quantity: 2,
      price: 7.20,
      size: "M",
      color: "White",
      image: "/placeholder.svg?height=300&width=300",
      sku: "TS-002"
    }
  ],
  estimatedDelivery: "January 20, 2024",
  shippingAddress: "123 Main St, New York, NY 10001",
  paymentMethod: "•••• •••• •••• 4242"
}

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#ORD-2024-001",
    userId: 1,
    items: mockOrderSummary.items,
    status: "confirmed",
    subtotal: 44.39,
    shipping: 0,
    tax: 3.55,
    total: 47.94,
    shippingAddress: {
      id: 1,
      userId: 1,
      type: "shipping",
      firstName: "John",
      lastName: "Doe",
      addressLine1: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
      isDefault: true
    },
    billingAddress: {
      id: 2,
      userId: 1,
      type: "billing",
      firstName: "John",
      lastName: "Doe",
      addressLine1: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
      isDefault: true
    },
    paymentMethod: {
      id: "1",
      type: "card",
      last4: "4242",
      brand: "Visa",
      isDefault: true
    },
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    estimatedDelivery: "2024-01-20T10:00:00Z",
    trackingNumber: "TRK123456789"
  }
] 