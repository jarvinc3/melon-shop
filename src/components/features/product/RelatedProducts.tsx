import { ProductCard } from "@/components/features/shop/ProductCard"
import type { ProductsProps } from "@/pages/ProductPage"

const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
  id: i + 100,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green", "Yellow"],
  name: `Related Product ${i + 1}`,
  price: Math.floor(Math.random() * 300) + 50,
  originalPrice: Math.floor(Math.random() * 400) + 100,
  image: `/placeholder.svg?height=300&width=300`,
  rating: Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 50) + 10,
  badge: i % 2 === 0 ? "Sale" : null,
}))

export function RelatedProducts({ productId }: ProductsProps) {
  console.log({ productId })
  
  return (
    <section className="mt-24">
      <div className="mb-8">
        <h2 className="sm:text-4xl text-3xl font-bold text-primary text-center mb-2">You Might Also Like</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
