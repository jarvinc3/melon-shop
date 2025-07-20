import { WishlistCard } from "@/components/features/wishlist/WishlistCard";
import { NavLayout } from "@/components/layout/NavLayout";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/lib";
import type { WishlistItem } from "@/types/wishlist.types";
import { Heart, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WishlistPage() {
   const navigate = useNavigate();
   const { items: wishlistItems, itemCount } = useWishlistStore();

   return (
      <NavLayout title="Wishlist"
         action={
            <Button variant="outline" onClick={() => navigate("/")} size="icon" className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary size-10 shadow-md border border-border hover:shadow-lg transition-all duration-300">
               <Home className="size-6" />
            </Button>
         }
      >
         <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-start px-4 pt-20 pb-10">
            <div className="w-full max-w-4xl space-y-4">
               {/* Header */}
               <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold mb-2">My Wishlist</h1>
                  <p className="text-muted-foreground">{itemCount} items</p>
               </div>

               {/* Wishlist Items */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item: WishlistItem) => (
                     <WishlistCard key={item.id} item={item} />
                  ))}
               </div>

               {/* Empty State */}
               {wishlistItems.length === 0 && (
                  <div className="text-center py-12">
                     <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
                     <p className="text-muted-foreground mb-6">
                        Start adding items you love to your wishlist
                     </p>
                     <Button onClick={() => navigate("/shop")}>Start Shopping</Button>
                  </div>
               )}
            </div>
         </main>
      </NavLayout>
   );
} 