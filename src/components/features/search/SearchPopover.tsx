import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useSearch } from "@/hooks/use-search"
import { Search, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function SearchPopover() {
   const [isOpen, setIsOpen] = useState(false)
   const [searchQuery, setSearchQuery] = useState("")
   const { searchResults, hasResults } = useSearch(searchQuery, 8)

   const handleSearchClick = () => {
      setIsOpen(true)
   }

   const handleClose = () => {
      setIsOpen(false)
      setSearchQuery("")
   }

   const handleResultClick = () => {
      setIsOpen(false)
      setSearchQuery("")
   }

   return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
         <PopoverTrigger asChild>
            <div className="relative w-full">
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
               <Input
                  placeholder="Search products..."
                  className="pl-10 border-border rounded-full bg-transparent cursor-pointer"
                  onClick={handleSearchClick}
                  readOnly
               />
            </div>
         </PopoverTrigger>
         <PopoverContent className="w-96 p-0" align="start">
            <div className="p-4 border-b">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                     placeholder="Search products..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="pl-10 pr-10 border-border"
                     autoFocus
                  />
                  {searchQuery && (
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
                        onClick={() => setSearchQuery("")}
                     >
                        <X className="h-3 w-3" />
                     </Button>
                  )}
               </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
               {searchQuery && (
                  <>
                     {hasResults ? (
                        <div className="p-2">
                           {searchResults.map((result) => (
                              <Link
                                 key={result.id}
                                 to={`/product/${result.id}`}
                                 onClick={handleResultClick}
                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                              >
                                 <img
                                    src={result.image}
                                    alt={result.name}
                                    className="w-12 h-12 object-cover rounded-md"
                                 />
                                 <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate">{result.name}</p>
                                    <p className="text-xs text-muted-foreground">{result.category}</p>
                                    <p className="text-sm font-semibold text-emerald-600">${result.price}</p>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     ) : (
                        <div className="p-8 text-center">
                           <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                           <p className="text-sm text-muted-foreground">No products found</p>
                           <p className="text-xs text-muted-foreground">Try a different search term</p>
                        </div>
                     )}
                  </>
               )}

               {!searchQuery && (
                  <div className="p-8 text-center">
                     <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                     <p className="text-sm text-muted-foreground">Start typing to search products</p>
                  </div>
               )}
            </div>

            {searchQuery && hasResults && (
               <div className="p-3 border-t">
                  <Link
                     to={`/shop?search=${encodeURIComponent(searchQuery)}`}
                     onClick={handleClose}
                     className="text-sm text-emerald-600 hover:text-emerald-700 text-center block"
                  >
                     View all results for "{searchQuery}"
                  </Link>
               </div>
            )}
         </PopoverContent>
      </Popover>
   )
} 