const Product = require('../models/Product');

// @desc    Get all products with optional filters
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        const { brand, category, minPrice, maxPrice, ram, storage, color, screenSize, processor } = req.query;

        // Build filter object
        let filter = {};

        if (brand) filter.brand = brand;
        if (category) filter.category = category;

        if (minPrice || maxPrice) {
            filter.basePrice = {};
            if (minPrice) filter.basePrice.$gte = Number(minPrice);
            if (maxPrice) filter.basePrice.$lte = Number(maxPrice);
        }

        // Dynamic specs filtering
        if (ram) filter['specs.RAM'] = ram;
        if (storage) filter['specs.Storage'] = storage;
        if (color) filter['specs.Color'] = color;
        if (screenSize) filter['specs.Screen Size'] = screenSize;
        if (processor) filter['specs.Processor'] = processor;

        const products = await Product.find(filter).sort({ createdAt: -1 });

        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

// @desc    Get filter options
// @route   GET /api/products/filters
// @access  Public
exports.getFilters = async (req, res) => {
    try {
        const products = await Product.find();

        // Extract unique brands
        const brands = [...new Set(products.map(p => p.brand))].sort();

        // Extract unique categories
        const categories = [...new Set(products.map(p => p.category))].sort();

        // Get price range
        const prices = products.map(p => p.basePrice);
        const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
        const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

        // Extract dynamic specs
        const dynamicSpecs = {};
        products.forEach(product => {
            if (product.specs) {
                product.specs.forEach((value, key) => {
                    if (!dynamicSpecs[key]) {
                        dynamicSpecs[key] = new Set();
                    }
                    dynamicSpecs[key].add(value);
                });
            }
        });

        // Convert Sets to sorted arrays
        const dynamicSpecsObj = {};
        Object.keys(dynamicSpecs).forEach(key => {
            dynamicSpecsObj[key] = Array.from(dynamicSpecs[key]).sort();
        });

        res.json({
            brands,
            categories,
            minPrice,
            maxPrice,
            dynamicSpecs: dynamicSpecsObj
        });
    } catch (error) {
        console.error('Error fetching filters:', error);
        res.status(500).json({ message: 'Error fetching filters', error: error.message });
    }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};
