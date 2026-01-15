import './FilterPanel.css';

function FilterPanel({ filterOptions, activeFilters, onFilterChange }) {
    if (!filterOptions) {
        return (
            <div className="filter-panel">
                <h2 className="filter-title">Filters</h2>
                <div className="loading-skeleton">
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line"></div>
                </div>
            </div>
        );
    }

    const handleSelectChange = (filterType, value) => {
        onFilterChange(filterType, value || undefined);
    };

    return (
        <div className="filter-panel">
            <h2 className="filter-title">
                <span className="filter-icon">🎯</span>
                Filters
            </h2>

            {/* Brand Filter */}
            {filterOptions.brands && filterOptions.brands.length > 0 && (
                <div className="filter-group">
                    <label className="filter-label">Brand</label>
                    <select
                        className="filter-select"
                        value={activeFilters.brand || ''}
                        onChange={(e) => handleSelectChange('brand', e.target.value)}
                    >
                        <option value="">All Brands</option>
                        {filterOptions.brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Category Filter */}
            {filterOptions.categories && filterOptions.categories.length > 0 && (
                <div className="filter-group">
                    <label className="filter-label">Category</label>
                    <select
                        className="filter-select"
                        value={activeFilters.category || ''}
                        onChange={(e) => handleSelectChange('category', e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {filterOptions.categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Price Range */}
            <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <div className="price-inputs">
                    <input
                        type="number"
                        className="filter-input"
                        placeholder="Min"
                        value={activeFilters.minPrice || ''}
                        onChange={(e) => handleSelectChange('minPrice', e.target.value)}
                    />
                    <span className="price-separator">-</span>
                    <input
                        type="number"
                        className="filter-input"
                        placeholder="Max"
                        value={activeFilters.maxPrice || ''}
                        onChange={(e) => handleSelectChange('maxPrice', e.target.value)}
                    />
                </div>
            </div>

            {/* Dynamic Specs */}
            {filterOptions.dynamicSpecs && Object.keys(filterOptions.dynamicSpecs).length > 0 && (
                <>
                    <div className="filter-divider"></div>
                    <h3 className="filter-subtitle">Specifications</h3>

                    {Object.entries(filterOptions.dynamicSpecs).map(([specKey, specValues]) => (
                        <div key={specKey} className="filter-group">
                            <label className="filter-label">{specKey}</label>
                            <select
                                className="filter-select"
                                value={activeFilters[specKey.toLowerCase().replace(' ', '')] || ''}
                                onChange={(e) => handleSelectChange(specKey.toLowerCase().replace(' ', ''), e.target.value)}
                            >
                                <option value="">All {specKey}</option>
                                {specValues.map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default FilterPanel;
