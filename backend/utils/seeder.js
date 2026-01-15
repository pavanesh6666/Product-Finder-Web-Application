const Product = require('../models/Product');

const sampleProducts = [
    {
        name: 'Galaxy S23 Ultra',
        brand: 'Samsung',
        category: 'Smartphone',
        description: 'Premium flagship smartphone with advanced camera system and S Pen',
        basePrice: 89999,
        specs: new Map([
            ['RAM', '12GB'],
            ['Storage', '256GB'],
            ['Color', 'Phantom Black'],
            ['Screen Size', '6.8 inch'],
            ['Battery', '5000mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 89999, stock: 15 },
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 88499, stock: 8 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 90999, stock: 20 }
        ]
    },
    {
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        category: 'Smartphone',
        description: 'Latest iPhone with A17 Pro chip and titanium design',
        basePrice: 134900,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '256GB'],
            ['Color', 'Natural Titanium'],
            ['Screen Size', '6.1 inch'],
            ['Battery', '3274mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 134900, stock: 10 },
            { vendorId: 'vendor4', vendorName: 'AppleStore', price: 134900, stock: 25 }
        ]
    },
    {
        name: 'Galaxy Tab S9',
        brand: 'Samsung',
        category: 'Tablet',
        description: 'Premium Android tablet with S Pen included',
        basePrice: 76999,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '128GB'],
            ['Color', 'Graphite'],
            ['Screen Size', '11 inch'],
            ['Battery', '8400mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 76999, stock: 12 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 75499, stock: 7 }
        ]
    },
    {
        name: 'MacBook Air M2',
        brand: 'Apple',
        category: 'Laptop',
        description: 'Thin and light laptop powered by Apple M2 chip',
        basePrice: 114900,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '256GB'],
            ['Color', 'Midnight'],
            ['Screen Size', '13.6 inch'],
            ['Processor', 'M2']
        ]),
        vendorListings: [
            { vendorId: 'vendor4', vendorName: 'AppleStore', price: 114900, stock: 18 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 112900, stock: 5 }
        ]
    },
    {
        name: 'Galaxy Book3 Pro',
        brand: 'Samsung',
        category: 'Laptop',
        description: 'Ultra-thin Windows laptop with AMOLED display',
        basePrice: 124990,
        specs: new Map([
            ['RAM', '16GB'],
            ['Storage', '512GB'],
            ['Color', 'Graphite'],
            ['Screen Size', '14 inch'],
            ['Processor', 'Intel i7']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 124990, stock: 6 },
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 122990, stock: 9 }
        ]
    },
    {
        name: 'Pixel 8 Pro',
        brand: 'Google',
        category: 'Smartphone',
        description: "Google's flagship with advanced AI features and excellent camera",
        basePrice: 106999,
        specs: new Map([
            ['RAM', '12GB'],
            ['Storage', '256GB'],
            ['Color', 'Obsidian'],
            ['Screen Size', '6.7 inch'],
            ['Battery', '5050mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 106999, stock: 14 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 105999, stock: 11 }
        ]
    },
    {
        name: 'iPad Pro 12.9',
        brand: 'Apple',
        category: 'Tablet',
        description: 'Professional tablet with M2 chip and Liquid Retina XDR display',
        basePrice: 112900,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '128GB'],
            ['Color', 'Space Gray'],
            ['Screen Size', '12.9 inch'],
            ['Battery', '10758mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor4', vendorName: 'AppleStore', price: 112900, stock: 22 },
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 111900, stock: 4 }
        ]
    },
    {
        name: 'OnePlus 12',
        brand: 'OnePlus',
        category: 'Smartphone',
        description: 'Flagship killer with Snapdragon 8 Gen 3 and fast charging',
        basePrice: 64999,
        specs: new Map([
            ['RAM', '12GB'],
            ['Storage', '256GB'],
            ['Color', 'Flowy Emerald'],
            ['Screen Size', '6.82 inch'],
            ['Battery', '5400mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 64999, stock: 17 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 63999, stock: 13 }
        ]
    },
    {
        name: 'Surface Laptop 5',
        brand: 'Microsoft',
        category: 'Laptop',
        description: 'Elegant Windows laptop with touchscreen display',
        basePrice: 99990,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '256GB'],
            ['Color', 'Platinum'],
            ['Screen Size', '13.5 inch'],
            ['Processor', 'Intel i5']
        ]),
        vendorListings: [
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 99990, stock: 8 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 98990, stock: 6 }
        ]
    },
    {
        name: 'Galaxy S23',
        brand: 'Samsung',
        category: 'Smartphone',
        description: 'Compact flagship with powerful performance',
        basePrice: 74999,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '128GB'],
            ['Color', 'Cream'],
            ['Screen Size', '6.1 inch'],
            ['Battery', '3900mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 74999, stock: 19 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 73499, stock: 16 }
        ]
    },
    {
        name: 'Dell XPS 15',
        brand: 'Dell',
        category: 'Laptop',
        description: 'Premium laptop with stunning InfinityEdge display and powerful performance',
        basePrice: 154990,
        specs: new Map([
            ['RAM', '16GB'],
            ['Storage', '512GB'],
            ['Color', 'Platinum Silver'],
            ['Screen Size', '15.6 inch'],
            ['Processor', 'Intel i7']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 154990, stock: 7 },
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 152990, stock: 5 }
        ]
    },
    {
        name: 'iPhone 14',
        brand: 'Apple',
        category: 'Smartphone',
        description: 'Reliable iPhone with great camera and all-day battery life',
        basePrice: 79900,
        specs: new Map([
            ['RAM', '6GB'],
            ['Storage', '128GB'],
            ['Color', 'Blue'],
            ['Screen Size', '6.1 inch'],
            ['Battery', '3279mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor4', vendorName: 'AppleStore', price: 79900, stock: 30 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 78900, stock: 12 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 79499, stock: 18 }
        ]
    },
    {
        name: 'Lenovo ThinkPad X1 Carbon',
        brand: 'Lenovo',
        category: 'Laptop',
        description: 'Business laptop with legendary ThinkPad keyboard and durability',
        basePrice: 139990,
        specs: new Map([
            ['RAM', '16GB'],
            ['Storage', '512GB'],
            ['Color', 'Black'],
            ['Screen Size', '14 inch'],
            ['Processor', 'Intel i7']
        ]),
        vendorListings: [
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 139990, stock: 6 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 137990, stock: 4 }
        ]
    },
    {
        name: 'OnePlus Nord 3',
        brand: 'OnePlus',
        category: 'Smartphone',
        description: 'Mid-range smartphone with flagship features at affordable price',
        basePrice: 33999,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '128GB'],
            ['Color', 'Misty Green'],
            ['Screen Size', '6.74 inch'],
            ['Battery', '5000mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 33999, stock: 25 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 32999, stock: 20 }
        ]
    },
    {
        name: 'HP Pavilion 14',
        brand: 'HP',
        category: 'Laptop',
        description: 'Versatile laptop for everyday computing and entertainment',
        basePrice: 54990,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '512GB'],
            ['Color', 'Natural Silver'],
            ['Screen Size', '14 inch'],
            ['Processor', 'Intel i5']
        ]),
        vendorListings: [
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 54990, stock: 15 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 53990, stock: 10 }
        ]
    },
    {
        name: 'iPad Air',
        brand: 'Apple',
        category: 'Tablet',
        description: 'Powerful and versatile tablet with M1 chip',
        basePrice: 59900,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '64GB'],
            ['Color', 'Starlight'],
            ['Screen Size', '10.9 inch'],
            ['Battery', '7606mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor4', vendorName: 'AppleStore', price: 59900, stock: 28 },
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 58900, stock: 9 }
        ]
    },
    {
        name: 'Asus ROG Zephyrus G14',
        brand: 'Asus',
        category: 'Laptop',
        description: 'Compact gaming laptop with AMD Ryzen and RTX graphics',
        basePrice: 164990,
        specs: new Map([
            ['RAM', '16GB'],
            ['Storage', '1TB'],
            ['Color', 'Moonlight White'],
            ['Screen Size', '14 inch'],
            ['Processor', 'AMD Ryzen 9']
        ]),
        vendorListings: [
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 164990, stock: 5 },
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 162990, stock: 3 }
        ]
    },
    {
        name: 'Pixel 7a',
        brand: 'Google',
        category: 'Smartphone',
        description: 'Affordable Pixel with excellent camera and clean Android experience',
        basePrice: 43999,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '128GB'],
            ['Color', 'Sea'],
            ['Screen Size', '6.1 inch'],
            ['Battery', '4385mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 43999, stock: 22 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 42999, stock: 18 }
        ]
    },
    {
        name: 'Samsung Galaxy Book2',
        brand: 'Samsung',
        category: 'Laptop',
        description: 'Lightweight laptop with long battery life and vibrant display',
        basePrice: 74990,
        specs: new Map([
            ['RAM', '8GB'],
            ['Storage', '256GB'],
            ['Color', 'Silver'],
            ['Screen Size', '15.6 inch'],
            ['Processor', 'Intel i5']
        ]),
        vendorListings: [
            { vendorId: 'vendor2', vendorName: 'ElectroHub', price: 74990, stock: 11 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 73490, stock: 8 }
        ]
    },
    {
        name: 'Xiaomi Pad 6',
        brand: 'Xiaomi',
        category: 'Tablet',
        description: 'Affordable tablet with high refresh rate display and great performance',
        basePrice: 26999,
        specs: new Map([
            ['RAM', '6GB'],
            ['Storage', '128GB'],
            ['Color', 'Mist Blue'],
            ['Screen Size', '11 inch'],
            ['Battery', '8840mAh']
        ]),
        vendorListings: [
            { vendorId: 'vendor3', vendorName: 'GadgetWorld', price: 26999, stock: 30 },
            { vendorId: 'vendor1', vendorName: 'TechMart', price: 25999, stock: 25 }
        ]
    }
];

const seedProducts = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('🗑️  Cleared existing products');

        // Insert sample products
        await Product.insertMany(sampleProducts);
        console.log(`✅ Successfully seeded ${sampleProducts.length} products!`);

        return true;
    } catch (error) {
        console.error('❌ Error seeding products:', error);
        throw error;
    }
};

// If run directly
if (require.main === module) {
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');

    dotenv.config();

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('✅ MongoDB Connected');
            return seedProducts();
        })
        .then(() => {
            console.log('🎉 Seeding complete!');
            process.exit(0);
        })
        .catch(err => {
            console.error('❌ Error:', err);
            process.exit(1);
        });
}

module.exports = seedProducts;
