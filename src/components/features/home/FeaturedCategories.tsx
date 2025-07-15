import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
    count: 124,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Fashion",
    image: "/placeholder.svg?height=300&width=300",
    count: 89,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "/placeholder.svg?height=300&width=300",
    count: 156,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    name: "Sports",
    image: "/placeholder.svg?height=300&width=300",
    count: 67,
    color: "from-orange-400 to-orange-600",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Shop by Category</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name.toLowerCase()}`}>
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`aspect-square bg-gradient-to-br ${category.color} p-6 rounded-t-xl`}>
                    <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-3/4 h-3/4 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{category.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{category.count} products</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
