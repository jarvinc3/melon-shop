import { Card, CardContent } from "@/components/ui/card"
import { CategoriesWrapper } from "@/components/ui/data-wrapper"
import { useCategories } from "@/hooks"
import { Link } from "react-router-dom"

export function FeaturedCategories() {
  const { data: categories, isLoading, isError } = useCategories()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for
          </p>
        </div>
        
        <CategoriesWrapper data={categories} isLoading={isLoading} isError={isError}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories?.slice(0, 4).map((category) => (
              <Link key={category.id} to={`/shop?category=${category.slug}`}>
                <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform sm:hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 p-2 md:p-6 rounded-t-xl">
                      <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center sm:hover:scale-110 transition-all duration-300">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="w-3/4 h-3/4 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-card mb-2">{category.name}</h3>
                      <p className="text-muted">{category.productCount} products</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CategoriesWrapper>
      </div>
    </section>
  )
}
