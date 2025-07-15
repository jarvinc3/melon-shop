import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ProductsProps } from "@/pages/ProductsPage"
import { Star } from "lucide-react"
import { useState } from "react"

const mockReviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    date: "2024-01-15",
    comment: "Excellent product! Exceeded my expectations in every way.",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    date: "2024-01-10",
    comment: "Great quality and fast shipping. Would recommend!",
    verified: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    date: "2024-01-05",
    comment: "Perfect fit and amazing quality. Love it!",
    verified: false,
  },
]

const specifications = [
  { label: "Brand", value: "ModernShop" },
  { label: "Model", value: "MS-2024" },
  { label: "Weight", value: "250g" },
  { label: "Dimensions", value: "20 x 15 x 5 cm" },
  { label: "Material", value: "Premium Plastic" },
  { label: "Warranty", value: "2 Years" },
]

export function ProductTabs({ productId }: ProductsProps) {
  const [activeTab, setActiveTab] = useState("description")
  console.log({productId})

  return (
    <div className="mt-16">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({mockReviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none dark:prose-invert">
                <h3>Product Description</h3>
                <p>
                  This premium product is designed with the modern consumer in mind. Crafted from high-quality materials
                  and built to last, it combines functionality with style to deliver an exceptional user experience.
                </p>
                <p>
                  Whether you're a professional or enthusiast, this product will meet and exceed your expectations. With
                  its innovative design and cutting-edge features, it represents the perfect balance of form and
                  function.
                </p>
                <h4>What's in the Box</h4>
                <ul>
                  <li>1x Main Product</li>
                  <li>1x User Manual</li>
                  <li>1x Warranty Card</li>
                  <li>1x Premium Carrying Case</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700"
                  >
                    <span className="font-medium text-slate-900 dark:text-slate-100">{spec.label}</span>
                    <span className="text-slate-600 dark:text-slate-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-slate-900 dark:text-slate-100">{review.name}</span>
                        {review.verified && (
                          <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-2 py-1 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
