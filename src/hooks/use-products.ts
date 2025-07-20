import { getProductById, getProductsByCategory, mockProducts, searchProducts } from '@/data/products'
import { useQuery } from '@tanstack/react-query'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const fetchProducts = async (page = 1, limit = 12) => {
  await delay(500)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedProducts = mockProducts.slice(startIndex, endIndex)

  return {
    data: paginatedProducts,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(mockProducts.length / limit),
      totalItems: mockProducts.length,
      itemsPerPage: limit,
      hasNextPage: endIndex < mockProducts.length,
      hasPrevPage: page > 1
    }
  }
}

const fetchProduct = async (id: number) => {
  await delay(300)
  const product = getProductById(id)
  if (!product) {
    throw new Error('Product not found')
  }
  return product
}

const fetchProductsByCategory = async (category: string) => {
  await delay(400)
  return getProductsByCategory(category)
}

const fetchSearchProducts = async (query: string) => {
  await delay(300)
  return searchProducts(query)
}

export const useProducts = (page = 1, limit = 12) => {
  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: () => fetchProducts(page, limit),
    staleTime: 5 * 60 * 1000,
  })
}

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  })
}

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  })
}

export const useSearchProducts = (query: string) => {
  return useQuery({
    queryKey: ['products', 'search', query],
    queryFn: () => fetchSearchProducts(query),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000,
  })
} 