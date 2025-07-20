import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export function AboutCTA() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the ModernShop difference. Experience premium
            quality and exceptional service today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8">
              <Link to="/shop">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10K+</div>
              <div className="text-slate-600 dark:text-slate-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-400">Premium Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">99%</div>
              <div className="text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
