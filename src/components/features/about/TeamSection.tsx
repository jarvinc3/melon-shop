import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about creating exceptional customer experiences and building sustainable businesses.",
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in product development and innovation with 10+ years in e-commerce technology.",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning designer focused on creating beautiful and functional user experiences.",
  },
  {
    name: "David Kim",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Operations specialist ensuring smooth logistics and exceptional customer service.",
  },
]

export function TeamSection() {
  return (
    <section className="py-10 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            The passionate individuals behind ModernShop who work tirelessly to bring you the best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">{member.role}</p>
                <p className="text-secondary text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
