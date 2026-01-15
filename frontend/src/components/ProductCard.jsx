import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
    const navigate = useNavigate();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleClick = () => {
        navigate(`/product/${product._id}`);
    };

    const vendorCount = product.vendorListings?.length || 0;
    const topSpecs = Object.entries(product.specs || {}).slice(0, 3);

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="product-card-header">
                <div className="product-brand">{product.brand}</div>
                <div className="vendor-badge">
                    {vendorCount} {vendorCount === 1 ? 'vendor' : 'vendors'}
                </div>
            </div>

            <div className="product-card-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>

                <div className="product-specs">
                    {topSpecs.map(([key, value]) => (
                        <div key={key} className="spec-item">
                            <span className="spec-key">{key}:</span>
                            <span className="spec-value">{value}</span>
                        </div>
                    ))}
                </div>

                <p className="product-description">{product.description}</p>
            </div>

            <div className="product-card-footer">
                <div className="product-price">{formatPrice(product.basePrice)}</div>
                <button className="view-details-btn">
                    View Details →
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
