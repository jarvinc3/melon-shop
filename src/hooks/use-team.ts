import { getTeamMembers } from '@/data/team'
import type { TeamMember } from '@/types/ui.types'
import { useQuery } from '@tanstack/react-query'

export const useTeamMembers = () => {
  return useQuery<TeamMember[]>({
    queryKey: ['team-members'],
    queryFn: getTeamMembers,
    staleTime: 5 * 60 * 1000,
  })
} 