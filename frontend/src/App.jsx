import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <div className="container">
                    <h1 className="logo">
                        <span className="logo-icon">🔍</span>
                        Product Finder
                    </h1>
                    <p className="tagline">Discover the perfect product for you</p>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}

export default App;
