import { useMemo, useState } from 'react'
import CartDrawer from './components/CartDrawer'
import FilterSidebar from './components/FilterSidebar'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import { categories, products, swatches } from './data/products'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [maxPrice, setMaxPrice] = useState(80)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const priceMatch = product.price <= maxPrice
      return categoryMatch && priceMatch
    })
  }, [selectedCategory, maxPrice])

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })

    setCartOpen(true)
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="bg-white text-graphite">
      <div className="fixed top-0 z-50 h-1 w-full bg-vibrant" />

      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <Hero />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            maxPrice={maxPrice}
            onPriceChange={setMaxPrice}
            swatches={swatches}
          />

          <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
        </div>
      </main>

      <CartDrawer isOpen={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default App
