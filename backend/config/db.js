const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📊 Database: ${conn.connection.name}`);

        // Seed data if database is empty
        const Product = require('../models/Product');
        const count = await Product.countDocuments();

        if (count === 0) {
            console.log('📦 Database is empty. Seeding data...');
            const seeder = require('../utils/seeder');
            await seeder();
        } else {
            console.log(`📦 Database has ${count} products`);
        }
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
