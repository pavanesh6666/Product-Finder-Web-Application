import { useState, useEffect } from 'react';
import { productAPI } from '../services/api';
import FilterPanel from '../components/FilterPanel';
import ProductList from '../components/ProductList';
import ActiveFilters from '../components/ActiveFilters';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState(null);
    const [activeFilters, setActiveFilters] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch filter options on mount
    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const filters = await productAPI.getFilters();
                setFilterOptions(filters);
            } catch (err) {
                setError('Failed to load filters. Please ensure the backend is running.');
                console.error(err);
            }
        };
        fetchFilters();
    }, []);

    // Fetch products whenever filters change
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await productAPI.getProducts(activeFilters);
                setProducts(data);
                setError(null);
            } catch (err) {
                setError('Failed to load products. Please ensure the backend is running.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [activeFilters]);

    const handleFilterChange = (filterType, value) => {
        setActiveFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const handleRemoveFilter = (filterType) => {
        setActiveFilters(prev => {
            const newFilters = { ...prev };
            delete newFilters[filterType];
            return newFilters;
        });
    };

    const handleClearAllFilters = () => {
        setActiveFilters({});
    };

    return (
        <div className="home-page">
            <div className="container">
                <div className="home-layout">
                    <aside className="filter-sidebar">
                        <FilterPanel
                            filterOptions={filterOptions}
                            activeFilters={activeFilters}
                            onFilterChange={handleFilterChange}
                        />
                    </aside>

                    <main className="products-main">
                        <ActiveFilters
                            activeFilters={activeFilters}
                            onRemoveFilter={handleRemoveFilter}
                            onClearAll={handleClearAllFilters}
                        />

                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span>
                                {error}
                            </div>
                        )}

                        <ProductList products={products} loading={loading} />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;
