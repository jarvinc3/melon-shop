import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { CheckIcon, Heart, Share2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const mockImages = [
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
]

interface ProductGalleryProps {
  productId: string
}

export function ProductGallery({ productId }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isShare, setIsShare] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleShare = () => {
    if (isShare) return
    setIsShare(true)
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success("URL copied to clipboard")
      })
      .catch(() => {
        toast.error("Error copying URL")
      })
      .finally(() => {
        setIsShare(false)
      })
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={mockImages[currentImage] || "/placeholder.svg"}
              alt={`Product ${productId}`}
              className={`w-full h-full object-cover transition-transform duration-300`}
            />
          </DialogTrigger>

          <Button variant="outline" size="icon" className="bg-primary text-primary md:hidden absolute top-2 right-2 z-50" onClick={handleShare}>
            {isShare ? <CheckIcon className="h-5 w-5 fill-current" /> : <Share2 className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`md:hidden absolute top-2 left-2 z-50 ${isWishlisted ? "text-red-500 border-red-500" : "bg-primary text-primary"}`}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>

          <DialogContent className="max-w-screen p-0" showCloseButton={false}>
            <DialogHeader className="hidden">
              <DialogTitle>Product Image</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <img
                src={mockImages[currentImage] || "/placeholder.svg"}
                alt={`Product ${productId}`}
                className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {mockImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${currentImage === index ? "border-emerald-600" : "border-slate-200 dark:border-slate-700"
              }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
