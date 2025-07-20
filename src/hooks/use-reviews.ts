import { getReviews } from '@/data/reviews'
import type { Review } from '@/types/ui.types'
import { useQuery } from '@tanstack/react-query'

export const useReviews = () => {
   return useQuery<Review[]>({
      queryKey: ['reviews'],
      queryFn: getReviews,
      staleTime: 5 * 60 * 1000,
   })
}

export const useReviewById = (id: number) => {
   return useQuery<Review | undefined>({
      queryKey: ['reviews', id],
      queryFn: () => getReviews().find(review => review.id === id),
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
   })
} 