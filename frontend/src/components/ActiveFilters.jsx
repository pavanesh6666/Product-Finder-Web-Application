import './ActiveFilters.css';

function ActiveFilters({ activeFilters, onRemoveFilter, onClearAll }) {
    const filterEntries = Object.entries(activeFilters).filter(([_, value]) => value);

    if (filterEntries.length === 0) {
        return null;
    }

    const getFilterLabel = (key) => {
        const labels = {
            brand: 'Brand',
            category: 'Category',
            minPrice: 'Min Price',
            maxPrice: 'Max Price',
            ram: 'RAM',
            storage: 'Storage',
            color: 'Color',
            screensize: 'Screen Size',
            processor: 'Processor'
        };
        return labels[key] || key;
    };

    return (
        <div className="active-filters">
            <div className="active-filters-header">
                <h3 className="active-filters-title">Active Filters:</h3>
                <button className="clear-all-btn" onClick={onClearAll}>
                    Clear All
                </button>
            </div>
            <div className="filter-chips">
                {filterEntries.map(([key, value]) => (
                    <div key={key} className="filter-chip">
                        <span className="chip-label">{getFilterLabel(key)}:</span>
                        <span className="chip-value">{value}</span>
                        <button
                            className="chip-remove"
                            onClick={() => onRemoveFilter(key)}
                            aria-label={`Remove ${key} filter`}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActiveFilters;
