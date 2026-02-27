import { Search, User, ShoppingBag } from 'lucide-react'
import PropTypes from 'prop-types'

function Header({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-1 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 text-sm font-bold tracking-[0.24em] text-graphite sm:text-base">
          PRINTER STUDIOS
        </div>

        <div className="relative hidden flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyanAccent" />
          <input
            type="text"
            placeholder="Search premium prints, apparel, and decor"
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-graphite outline-none transition focus:border-cyanAccent"
          />
        </div>

        <nav className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-cyanAccent transition hover:border-cyanAccent/60"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-cyanAccent transition hover:border-cyanAccent/60"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      <div className="border-t border-gray-100 md:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyanAccent" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-graphite outline-none transition focus:border-cyanAccent"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  onOpenCart: PropTypes.func.isRequired,
}

export default Header
