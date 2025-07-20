import { useMemo } from "react"
import { useOrders } from "./use-orders"

interface OrderItem {
   name: string
   quantity: number
   price: number
}

interface OrderSummary {
   orderNumber: string
   total: number
   items: OrderItem[]
   estimatedDelivery: string
   shippingAddress: string
   paymentMethod: string
}

export function useOrderSummary(): { data: OrderSummary | null; isLoading: boolean } {
   const { data: orders, isLoading } = useOrders()

   const orderSummary = useMemo(() => {
      if (!orders || orders.length === 0) return null

      // Get the most recent order
      const latestOrder = orders[0]

      // Convert address object to string
      const addressString = typeof latestOrder.shippingAddress === 'string'
         ? latestOrder.shippingAddress
         : `${latestOrder.shippingAddress.addressLine1}, ${latestOrder.shippingAddress.city}, ${latestOrder.shippingAddress.state} ${latestOrder.shippingAddress.postalCode}`

      return {
         orderNumber: latestOrder.orderNumber,
         total: latestOrder.total,
         items: latestOrder.items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
         })),
         estimatedDelivery: "3-5 business days",
         shippingAddress: addressString,
         paymentMethod: typeof latestOrder.paymentMethod === 'string'
            ? latestOrder.paymentMethod
            : latestOrder.paymentMethod.type
      }
   }, [orders])

   return {
      data: orderSummary,
      isLoading
   }
} 