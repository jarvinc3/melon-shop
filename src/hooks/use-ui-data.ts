import { mockBanners } from '@/data/banners'
import { mockCategories } from '@/data/categories'
import { mockTestimonials } from '@/data/testimonials'
import type { Banner, Category, Testimonial } from '@/types/ui.types'
import { useQuery } from '@tanstack/react-query'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const fetchBanners = async (): Promise<Banner[]> => {
  await delay(200)
  return mockBanners
}

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  await delay(200)
  return mockTestimonials
}

const fetchCategories = async (): Promise<Category[]> => {
  await delay(200)
  return mockCategories
}

export const useBanners = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
    staleTime: 10 * 60 * 1000,
  })
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    staleTime: 10 * 60 * 1000,
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000,
  })
} 