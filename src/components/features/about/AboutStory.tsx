import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Story</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              From humble beginnings to a trusted global brand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Founded in 2020</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    ModernShop began as a small startup with a big vision: to create an e-commerce platform that
                    prioritizes quality, sustainability, and customer satisfaction above all else.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Our Mission</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We believe that shopping should be more than just a transaction. It should be an experience that
                    brings joy, discovery, and value to your life.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Our Story"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
