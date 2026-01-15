const mongoose = require('mongoose');

const vendorListingSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        required: true
    },
    vendorName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
}, { _id: false });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    basePrice: {
        type: Number,
        required: [true, 'Base price is required'],
        min: 0
    },
    specs: {
        type: Map,
        of: String,
        default: {}
    },
    vendorListings: {
        type: [vendorListingSchema],
        default: []
    }
}, {
    timestamps: true
});

// Index for faster queries
productSchema.index({ brand: 1, category: 1 });
productSchema.index({ basePrice: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
