import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, loading }) {
    if (loading) {
        return (
            <div className="product-list">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="product-card-skeleton">
                        <div className="skeleton-image"></div>
                        <div className="skeleton-content">
                            <div className="skeleton-line short"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line medium"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📦</div>
                <h3 className="empty-title">No products found</h3>
                <p className="empty-message">Try adjusting your filters to see more results</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
