import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CollectionsWrapper } from "@/components/ui/data-wrapper"
import { useCollections } from "@/hooks"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CollectionGrid() {
  const { data: collections, isLoading, isError } = useCollections()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <CollectionsWrapper data={collections} isLoading={isLoading} isError={isError}>
          {/* Featured Collections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Featured Collections</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {collections?.filter(collection => collection.featured).slice(0, 2).map((collection) => (
                <Link key={collection.id} to={`/shop?collection=${collection.slug}`}>
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-90"></div>
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 text-primary">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-white/20 text-primary border-primary/30">
                              {collection.productCount} items
                            </Badge>
                            {collection.featured && <Badge className="bg-emerald-500 text-white">Featured</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                          <p className="text-secondary mb-4">{collection.description}</p>
                          <Button
                            variant="secondary"
                            className="bg-white text-black transition-colors"
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
            <h2 className="text-3xl font-bold text-primary mb-8">All Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections?.map((collection) => (
                <Link key={collection.id} to={`/shop?collection=${collection.slug}`}>
                  <Card className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80"></div>
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary">{collection.name}</h3>
                          <Badge variant="outline">{collection.productCount} items</Badge>
                        </div>
                        <p className="text-secondary mb-4">{collection.description}</p>
                        <Button
                          variant="ghost"
                          className="w-full group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:dark:bg-emerald-900 group-hover:dark:text-emerald-300 transition-colors border border-border"
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
        </CollectionsWrapper>
      </div>
    </section>
  )
}
