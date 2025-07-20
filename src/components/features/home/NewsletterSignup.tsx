import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function NewsletterSignup() {
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success(
      "Success!", {
      description: "You've been subscribed to our newsletter.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="size-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-4">Stay in the Loop</h2>
            <p className="text-xl text-muted">
              Get the latest updates on new products, exclusive offers, and more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto text-primary">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary text-primary rounded-full py-3"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-accent text-accent rounded-full px-8 border "
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-muted mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
