import PropTypes from 'prop-types'

function FilterSidebar({ categories, selectedCategory, onCategoryChange, maxPrice, onPriceChange, swatches }) {
  return (
    <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft lg:sticky lg:top-24 lg:h-fit">
      <h2 className="text-sm font-semibold text-graphite">Filters</h2>

      <div className="mt-5">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Categories</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <button
              type="button"
              onClick={() => onCategoryChange('All')}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                selectedCategory === 'All' ? 'bg-vibrant text-white' : 'text-graphite hover:bg-gray-50'
              }`}
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  selectedCategory === category ? 'bg-vibrant text-white' : 'text-graphite hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Price Range</h3>
        <input
          type="range"
          min={20}
          max={80}
          step={1}
          value={maxPrice}
          onChange={(event) => onPriceChange(Number(event.target.value))}
          className="mt-3 w-full accent-cyanAccent"
        />
        <p className="mt-2 text-sm text-gray-600">Up to ${maxPrice}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Color Swatches</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {swatches.map((swatch) => (
            <button
              key={swatch.name}
              type="button"
              className="h-7 w-7 rounded-full border border-gray-300"
              style={{ backgroundColor: swatch.hex }}
              aria-label={swatch.name}
              title={swatch.name}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

FilterSidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  swatches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default FilterSidebar
