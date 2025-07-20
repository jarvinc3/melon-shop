
export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                About
                <span className="text-emerald-600 dark:text-emerald-400"> ModernShop</span>
              </h1>
              <p className="text-xl text-secondary max-w-lg">
                We're passionate about bringing you the finest products that enhance your lifestyle and inspire your
                journey.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-primary rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="About ModernShop"
                  className="w-3/4 h-3/4 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
