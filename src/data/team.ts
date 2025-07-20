import type { TeamMember } from '@/types/ui.types'

export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about creating exceptional customer experiences and building sustainable businesses.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Product",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in product development and innovation with 10+ years in e-commerce technology.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning designer focused on creating beautiful and functional user experiences.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Operations specialist ensuring smooth logistics and exceptional customer service.",
  },
]

export const getTeamMembers = () => mockTeamMembers 