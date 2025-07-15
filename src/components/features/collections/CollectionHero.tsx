export function CollectionHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Our
            <span className="text-emerald-600 dark:text-emerald-400"> Collections</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Discover our carefully curated collections, each designed to bring style, quality, and innovation to your
            life.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-full opacity-10 animate-pulse"></div>
    </section>
  )
}
