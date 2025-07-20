import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { ProductList } from "./ProductList"

// Mock product data
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `T-shirt, Short Sleeve, Hoodie, Graphic Tee, ${i + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
  originalPrice: Math.floor(Math.random() * 600) + 100,
  image: `/placeholder.svg?height=300&width=300`,
  rating: Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 100) + 10,
  badge: i % 3 === 0 ? "Sale" : i % 4 === 0 ? "New" : null,
  description: `T-shirt, Short Sleeve, Hoodie, Graphic Tee, ${i + 1}`,
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium sound quality",
    "Comfortable fit",
    "Quick charge technology",
  ],
  sizes: ["Small", "Medium", "Large"],
  colors: ["Black", "White", "Silver", "Blue"],
}))

export function ProductGrid({ viewMode }: { viewMode: 'grid' | 'list' }) {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  return (
    <div className="space-y-6">
      {/* Product Grid */}
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {currentProducts.map((product) => (
          viewMode === 'grid'
            ? <ProductCard key={product.id} product={product} />
            : <ProductList key={product.id} product={product} />
        ))}
      </div>

      <p className="text-disabled text-center">
        Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
        products
      </p>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
            className="w-10"
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
