function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-12 shadow-soft sm:px-10 lg:px-14">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyanAccent/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyanAccent">
          Premium Dye-Sublimation Studio
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-graphite sm:text-4xl lg:text-5xl">
          High-Fidelity Sublimation. Wearable Art.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
          From custom apparel to unique home decor. Vivid colors that never fade.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center rounded-full bg-vibrant px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyanAccent/20 transition hover:brightness-110"
        >
          Shop Latest Collection
        </button>
      </div>
    </section>
  )
}

export default Hero
