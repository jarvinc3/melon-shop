import { Card, CardContent } from "@/components/ui/card"
import { TeamWrapper } from "@/components/ui/data-wrapper"
import { useTeamMembers } from "@/hooks"

export function TeamSection() {
  const { data: teamMembers, isLoading, isError } = useTeamMembers()

  return (
    <section className="py-10 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            The passionate individuals behind ModernShop who work tirelessly to bring you the best
          </p>
        </div>

        <TeamWrapper data={teamMembers} isLoading={isLoading} isError={isError}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers?.map((member) => (
              <Card
                key={member.id}
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
        </TeamWrapper>
      </div>
    </section>
  )
}
