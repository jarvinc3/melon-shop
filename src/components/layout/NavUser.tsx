import {
   Avatar,
   AvatarFallback
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
   ChevronsUpDown,
   LogIn,
   User,
   UserPlus
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function NavUser({ user }: { user: { name?: string; email?: string; avatar?: string } }) {
   const [isAuth] = useState(false)
   const navigate = useNavigate()

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            {isAuth ? <Button
               size="lg"
               variant="ghost"
            >
               <Avatar className="h-8 w-8 rounded-lg ring-2 ring-gray-200 dark:ring-[#2B2B30]">
                  <img src={user.avatar} alt={user.name} className="size-8" />
               </Avatar>
               <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
               </div>
               <ChevronsUpDown className="ml-auto size-4" />
            </Button> : <Button
               size="lg"
               variant="ghost"
               className="cursor-pointer"
            >
               <User className="size-6" />
            </Button>}
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-32 rounded-lg bg-background border-border shadow-none p-2"
            side="bottom"
            align="end"
            sideOffset={4}
         >
            {isAuth && <DropdownMenuLabel className="p-0 font-normal">
               <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg ring-2 ring-muted">
                     <img src={user.avatar} alt={user.name} className="size-8" />
                     <AvatarFallback className="rounded-lg">
                        <img
                           src="/placeholder-user.jpg"
                           alt="User avatar"
                           className="h-8 w-8"
                        />
                     </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                     <span className="truncate font-medium">{user.name}</span>
                     <span className="truncate text-xs">{user.email}</span>
                  </div>
               </div>
            </DropdownMenuLabel>}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem className="cursor-pointer border border-border rounded-lg py-3" onClick={() => navigate("/login")}>
                  <LogIn />
                  Login
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer border border-border rounded-lg py-3" onClick={() => navigate("/register")}>
               <UserPlus />
               Register
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
