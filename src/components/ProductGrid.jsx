import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

function ProductGrid({ products, onAddToCart }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-graphite">Latest Collection</h2>
        <span className="text-sm text-gray-500">{products.length} products</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2">
        <AnimatePresence>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

export default ProductGrid
