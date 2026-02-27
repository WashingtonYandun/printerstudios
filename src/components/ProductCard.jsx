import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import PropTypes from 'prop-types'

const MotionArticle = motion.article
const MotionDiv = motion.div

function ProductCard({ product, onAddToCart }) {
  return (
    <MotionArticle
      layout
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="relative overflow-hidden">
        <MotionDiv
          className="flex h-56 items-center justify-center bg-gray-100 px-6 text-center text-xs font-medium uppercase tracking-[0.12em] text-gray-500"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3 }}
        >
          {product.imageLabel}
        </MotionDiv>

        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-graphite/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="pointer-events-auto mb-4 rounded-full bg-vibrant px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-graphite">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1 text-yellow-500">
          {['s1', 's2', 's3', 's4', 's5'].map((star) => (
            <Star key={star} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.rating.toFixed(1)}</span>
        </div>
        <p className="mt-3 inline-flex bg-vibrant bg-clip-text text-lg font-semibold text-transparent">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </MotionArticle>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageLabel: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

export default ProductCard
