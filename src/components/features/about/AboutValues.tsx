import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Shield, Star } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers and their experience.",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We rigorously test and curate every product to ensure it meets our high standards.",
    color: "text-blue-500",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to environmental responsibility and sustainable business practices.",
    color: "text-green-500",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "We continuously evolve and innovate to provide the best shopping experience possible.",
    color: "text-yellow-500",
  },
]

export function AboutValues() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            The principles that guide everything we do and shape our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon && <value.icon className={`h-8 w-8 ${value.color}`} />}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-secondary leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
