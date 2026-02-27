import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import PropTypes from 'prop-types'

const MotionDiv = motion.div
const MotionAside = motion.aside

function CartDrawer({ isOpen, items, onClose }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <MotionDiv
            className="fixed inset-0 z-40 bg-graphite/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <MotionAside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h2 className="text-base font-semibold text-graphite">Your Cart</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-gray-200 p-2 text-cyanAccent"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty. Add premium products to continue.</p>
              ) : (
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id} className="rounded-xl border border-gray-100 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-graphite">{item.name}</p>
                          <p className="mt-1 text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-graphite">
                          ${(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-gray-100 px-5 py-4">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold text-graphite">${subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-vibrant px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Checkout
              </button>
            </div>
          </MotionAside>
        </>
      )}
    </AnimatePresence>
  )
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default CartDrawer
