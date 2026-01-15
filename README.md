# Product Finder Web Application

## 🔗 GitHub Repository

**Repository Link**: [_Add your GitHub repository URL here_]

---

A full-stack Product Finder application built with **React** (frontend) and **Node.js/Express** (backend), using **MongoDB** as the database. This application allows users to dynamically filter products and view detailed product information along with vendor listings.

## 🎯 Features

### Product Listing Page
- **Split Screen Layout**: Dynamic filters on the left, product results on the right
- **Dynamic Filters**: All filters are loaded from the database (not hard-coded)
  - Brand
  - Category
  - Price Range
  - Dynamic Specifications (RAM, Storage, Color, Screen Size, Processor, etc.)
- **Active Filter Display**: Selected filters shown as removable chips/tags
- **Real-time Updates**: Product list updates instantly without page reload

### Product Details Page
- Full product description
- Complete specifications in key-value format
- Product type and category
- List of vendors with:
  - Vendor name
  - Price
  - Stock availability

## 🛠️ Technology Stack

### Frontend
- **React 18** with functional components
- **React Hooks** (useState, useEffect)
- **React Router** for navigation
- **Axios** for API calls
- **Vite** as build tool
- **Modern CSS** with animations and responsive design

### Backend
- **Node.js** with Express.js
- **Mongoose** ODM for MongoDB
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Database
- **MongoDB** (NoSQL document database)

## 📊 Database Design

### Product Collection
```javascript
{
  _id: ObjectId,
  name: String,
  brand: String,
  category: String,
  description: String,
  basePrice: Number,
  specs: Map {
    "RAM": String,
    "Storage": String,
    "Color": String,
    // ... dynamic attributes
  },
  vendorListings: [
    {
      vendorId: String,
      vendorName: String,
      price: Number,
      stock: Number
    }
  ]
}
```

### Design Decisions
1. **Embedded Vendor Listings**: Vendors are embedded within products for faster queries and simpler joins
2. **Dynamic Specs**: Using a Map for specifications allows flexible product attributes
3. **Denormalized Vendor Name**: Stored in vendorListings to avoid additional lookups during product display

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher) and npm
- **MongoDB** (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (or use the existing one):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ProductFinderDB
NODE_ENV=development
```

4. Run the backend:
```bash
npm run dev
```

The API will start at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Update API base URL in `src/services/api.js` if needed:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

4. Run the development server:
```bash
npm run dev
```

The app will start at `http://localhost:5173`

### MongoDB Setup

**Option 1: Local MongoDB**
- Install MongoDB Community Edition
- Start MongoDB service
- The application will use `mongodb://localhost:27017`

**Option 2: MongoDB Atlas (Cloud)**
- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Get your connection string
- Update `.env` with your Atlas connection string

### Data Seeding

The application automatically seeds sample data on first run. The seeder includes:
- 10 sample products (smartphones, tablets, laptops)
- Multiple brands (Samsung, Apple, Google, OnePlus, Microsoft)
- Various specifications and vendor listings

You can also manually seed data:
```bash
npm run seed
```

## 📡 API Endpoints

### Products

**GET** `/api/products`
- Get all products with optional filters
- Query parameters:
  - `brand` (string)
  - `category` (string)
  - `minPrice` (number)
  - `maxPrice` (number)
  - `ram` (string)
  - `storage` (string)
  - `color` (string)
  - `screenSize` (string)
  - `processor` (string)

**GET** `/api/products/:id`
- Get single product by ID

**GET** `/api/products/filters`
- Get available filter options (brands, categories, specs, price range)

## 🎨 Design Decisions

### Frontend Architecture
1. **Component Structure**: Modular components for reusability
   - `FilterPanel`: Handles all filter inputs
   - `ActiveFilters`: Displays selected filters as chips
   - `ProductList`: Grid layout for products
   - `ProductCard`: Individual product display
   - `ProductDetails`: Full product information page

2. **State Management**: Using React hooks for local state
   - `useState` for component state
   - `useEffect` for API calls and side effects

3. **Styling**: Modern dark theme with:
   - Gradient backgrounds
   - Smooth animations
   - Hover effects
   - Responsive design
   - Loading skeletons

### Backend Architecture
1. **MVC Pattern**: 
   - **Models**: Mongoose schemas
   - **Controllers**: Business logic
   - **Routes**: API endpoints

2. **Middleware**: CORS, JSON parsing, error handling

3. **Dynamic Filtering**: MongoDB queries built dynamically based on provided filters

### Key Features
- **Real-time filtering**: No page reloads
- **Responsive design**: Works on all screen sizes
- **Loading states**: Skeleton loaders for better UX
- **Error handling**: User-friendly error messages
- **Auto-seeding**: Sample data loaded automatically

## 🧪 Testing

### Manual Testing Checklist
- [ ] Filter by brand
- [ ] Filter by category
- [ ] Filter by price range
- [ ] Filter by multiple specs (RAM, Storage, etc.)
- [ ] Remove individual filters via chips
- [ ] Clear all filters
- [ ] Click product to view details
- [ ] Verify vendor information displays correctly
- [ ] Test responsive design on mobile

### API Testing
Use tools like Postman or visit endpoints directly:
- `http://localhost:5000/api/products`
- `http://localhost:5000/api/products/filters`

## 📁 Project Structure

```
assignment/
├── 📄 README.md                    # This file
├── 📄 QUICK_START.md              # Quick setup guide
│
├── 📁 backend/                     # Node.js/Express API
│   ├── 📄 server.js               # Entry point
│   ├── 📄 package.json            # Dependencies
│   ├── 📄 .env                    # Environment variables
│   ├── 📄 .gitignore
│   │
│   ├── 📁 config/
│   │   └── db.js                  # MongoDB connection
│   │
│   ├── 📁 models/
│   │   └── Product.js             # Mongoose schema
│   │
│   ├── 📁 routes/
│   │   └── products.js            # API routes
│   │
│   ├── 📁 controllers/
│   │   └── productController.js   # Business logic
│   │
│   └── 📁 utils/
│       └── seeder.js              # Data seeding
│
└── 📁 frontend/                    # React Application
    ├── 📄 package.json
    ├── 📄 vite.config.js
    ├── 📄 index.html
    ├── 📄 .gitignore
    │
    └── 📁 src/
        ├── 📄 main.jsx
        ├── 📄 App.jsx
        ├── 📄 App.css
        ├── 📄 index.css
        │
        ├── 📁 components/
        │   ├── FilterPanel.jsx
        │   ├── FilterPanel.css
        │   ├── ActiveFilters.jsx
        │   ├── ActiveFilters.css
        │   ├── ProductList.jsx
        │   ├── ProductList.css
        │   ├── ProductCard.jsx
        │   └── ProductCard.css
        │
        ├── 📁 pages/
        │   ├── Home.jsx
        │   ├── Home.css
        │   ├── ProductDetails.jsx
        │   └── ProductDetails.css
        │
        └── 📁 services/
            └── api.js
```

## 🔧 Troubleshooting

### Backend Issues
- **MongoDB Connection Error**: Ensure MongoDB is running and connection string is correct
- **Port Already in Use**: Change PORT in `.env` file
- **Module not found**: Run `npm install` in backend directory

### Frontend Issues
- **API Connection Error**: Verify backend is running and API URL is correct
- **CORS Error**: Check CORS configuration in `server.js`
- **Module not found**: Run `npm install` in frontend directory

## 📝 Future Enhancements
- Add pagination for large product lists
- Implement search functionality
- Add product images
- User authentication
- Shopping cart functionality
- Vendor management interface
- Product comparison feature

## 👨‍💻 Author
Developed as part of a technical assessment demonstrating proficiency in:
- React (functional components, hooks, routing)
- Node.js and Express.js
- MongoDB and Mongoose
- RESTful API design
- Modern UI/UX principles

## 📄 License
This project is created for assessment purposes.
