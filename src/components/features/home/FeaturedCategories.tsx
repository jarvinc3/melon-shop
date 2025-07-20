import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

const categories = [
  {
    id: 1,
    name: "T-Shirts",
    image: "/placeholder.svg?height=300&width=300",
    count: 124,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Shorts",
    image: "/placeholder.svg?height=300&width=300",
    count: 112,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: 3,
    name: "Hoodies",
    image: "/placeholder.svg?height=300&width=300",
    count: 89,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    name: "Combos",
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
          <h2 className="text-4xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name.toLowerCase()}`}>
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform sm:hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`aspect-square bg-gradient-to-br ${category.color} p-2 md:p-6 rounded-t-xl`}>
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
                    <p className="text-muted">{category.count} products</p>
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
