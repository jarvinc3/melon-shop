import { getCollections, getFeaturedCollections } from '@/data/collections'
import type { Collection } from '@/types/ui.types'
import { useQuery } from '@tanstack/react-query'

export const useCollections = () => {
   return useQuery<Collection[]>({
      queryKey: ['collections'],
      queryFn: getCollections,
      staleTime: 5 * 60 * 1000,
   })
}

export const useFeaturedCollections = () => {
   return useQuery<Collection[]>({
      queryKey: ['collections', 'featured'],
      queryFn: getFeaturedCollections,
      staleTime: 5 * 60 * 1000,
   })
} 