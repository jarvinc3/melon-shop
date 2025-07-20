import { useMemo } from "react"
import { useProducts } from "./use-products"

interface SearchResult {
   id: number
   name: string
   price: number
   image: string
   category: string
}

export function useSearch(searchQuery: string, maxResults: number = 8) {
   const { data: productsData } = useProducts()

   const searchResults = useMemo(() => {
      if (!searchQuery.trim() || !productsData?.data) return []

      const query = searchQuery.toLowerCase()
      const results: SearchResult[] = []

      productsData.data.forEach((product) => {
         const matchesName = product.name.toLowerCase().includes(query)
         const matchesCategory = product.category?.toLowerCase().includes(query)
         const matchesDescription = product.description?.toLowerCase().includes(query)

         if (matchesName || matchesCategory || matchesDescription) {
            results.push({
               id: product.id,
               name: product.name,
               price: product.price,
               image: product.image,
               category: product.category || "Uncategorized"
            })
         }
      })

      return results.slice(0, maxResults)
   }, [searchQuery, productsData, maxResults])

   return {
      searchResults,
      isLoading: !productsData,
      hasResults: searchResults.length > 0,
      totalResults: productsData?.data ? productsData.data.length : 0
   }
} 