import { getProductById } from '@/data/products'
import type { Product } from '@/types/product.types'
import { useQuery } from '@tanstack/react-query'

export const useProductById = (id: number) => {
   return useQuery<Product | undefined>({
      queryKey: ['product', id],
      queryFn: () => getProductById(id),
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
   })
} 