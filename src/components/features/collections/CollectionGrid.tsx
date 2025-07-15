import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Light, breathable, and perfect for warm weather adventures",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 24,
    color: "from-yellow-400 to-orange-500",
    featured: true,
  },
  {
    id: 2,
    name: "Tech & Innovation",
    description: "Cutting-edge gadgets and smart solutions for modern living",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 18,
    color: "from-blue-400 to-purple-500",
    featured: false,
  },
  {
    id: 3,
    name: "Home & Comfort",
    description: "Transform your space into a sanctuary of style and comfort",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 32,
    color: "from-green-400 to-emerald-500",
    featured: true,
  },
  {
    id: 4,
    name: "Active Lifestyle",
    description: "Gear up for your fitness journey with premium athletic wear",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 15,
    color: "from-red-400 to-pink-500",
    featured: false,
  },
  {
    id: 5,
    name: "Luxury Collection",
    description: "Premium products for those who appreciate the finer things",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 12,
    color: "from-purple-400 to-indigo-500",
    featured: true,
  },
  {
    id: 6,
    name: "Eco-Friendly",
    description: "Sustainable products that care for you and the planet",
    image: "/placeholder.svg?height=400&width=600",
    itemCount: 28,
    color: "from-emerald-400 to-teal-500",
    featured: false,
  },
]

export function CollectionGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Featured Collections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections
              .filter((collection) => collection.featured)
              .slice(0, 2)
              .map((collection) => (
                <Link key={collection.id} to={`/shop?collection=${collection.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-80">
                        <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90`}></div>
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-white/20 text-white border-white/30">
                              {collection.itemCount} items
                            </Badge>
                            {collection.featured && <Badge className="bg-emerald-500 text-white">Featured</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                          <p className="text-white/90 mb-4">{collection.description}</p>
                          <Button
                            variant="secondary"
                            className="group-hover:bg-white group-hover:text-slate-900 transition-colors"
                          >
                            Explore Collection
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* All Collections */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">All Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} to={`/shop?collection=${collection.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-80`}></div>
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{collection.name}</h3>
                        <Badge variant="outline">{collection.itemCount} items</Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{collection.description}</p>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:group-hover:bg-emerald-900 dark:group-hover:text-emerald-300 transition-colors"
                      >
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
