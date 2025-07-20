import { mockOrderSummary, mockOrders } from '@/data/orders'
import type { Order, OrderSummary } from '@/types/order.types'
import { useQuery } from '@tanstack/react-query'

export const useOrderSummary = () => {
   return useQuery<OrderSummary>({
      queryKey: ['order-summary'],
      queryFn: () => mockOrderSummary,
      staleTime: 5 * 60 * 1000,
   })
}

export const useOrders = () => {
   return useQuery<Order[]>({
      queryKey: ['orders'],
      queryFn: () => mockOrders,
      staleTime: 5 * 60 * 1000,
   })
}

export const useOrderById = (id: string) => {
   return useQuery<Order | undefined>({
      queryKey: ['orders', id],
      queryFn: () => mockOrders.find(order => order.id === id),
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
   })
} 