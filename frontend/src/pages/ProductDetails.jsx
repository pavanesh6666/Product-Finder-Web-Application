import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productAPI } from '../services/api';
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productAPI.getProduct(id);
                setProduct(data);
            } catch (err) {
                setError('Failed to load product details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    if (loading) {
        return (
            <div className="product-details-page">
                <div className="container">
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading product details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="product-details-page">
                <div className="container">
                    <div className="error-state">
                        <span className="error-icon">⚠️</span>
                        <h2>{error || 'Product not found'}</h2>
                        <button className="back-btn" onClick={() => navigate('/')}>
                            ← Back to Products
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="product-details-page">
            <div className="container">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ← Back to Products
                </button>

                <div className="product-details-card">
                    <div className="product-header">
                        <div className="product-header-left">
                            <div className="product-brand-badge">{product.brand}</div>
                            <h1 className="product-title">{product.name}</h1>
                            <p className="product-category-text">{product.category}</p>
                        </div>
                        <div className="product-price-large">{formatPrice(product.basePrice)}</div>
                    </div>

                    <div className="product-content">
                        <section className="product-section">
                            <h2 className="section-title">
                                <span className="section-icon">📝</span>
                                Description
                            </h2>
                            <p className="product-full-description">{product.description}</p>
                        </section>

                        <section className="product-section">
                            <h2 className="section-title">
                                <span className="section-icon">⚙️</span>
                                Specifications
                            </h2>
                            <div className="specs-grid">
                                {Object.entries(product.specs || {}).map(([key, value]) => (
                                    <div key={key} className="spec-row">
                                        <div className="spec-row-key">{key}</div>
                                        <div className="spec-row-value">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="product-section">
                            <h2 className="section-title">
                                <span className="section-icon">🏪</span>
                                Available Vendors ({product.vendorListings?.length || 0})
                            </h2>
                            <div className="vendors-list">
                                {product.vendorListings && product.vendorListings.length > 0 ? (
                                    product.vendorListings.map((vendor, index) => (
                                        <div key={index} className="vendor-card">
                                            <div className="vendor-info">
                                                <h3 className="vendor-name">{vendor.vendorName}</h3>
                                                <div className="vendor-stock">
                                                    <span className={`stock-badge ${vendor.stock > 10 ? 'in-stock' : 'low-stock'}`}>
                                                        {vendor.stock > 0 ? `${vendor.stock} in stock` : 'Out of stock'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="vendor-price">{formatPrice(vendor.price)}</div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="no-vendors">No vendors available</p>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
