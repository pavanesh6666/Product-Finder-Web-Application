# Quick Start Guide - Product Finder Application

## 🚀 Prerequisites Installation

Before running the application, you need to install the following:

### 1. Node.js and npm
**Required for Both Frontend and Backend**

**Windows:**
1. Download from: https://nodejs.org/ (LTS version recommended)
2. Run the installer
3. Verify installation:
```powershell
node --version
npm --version
```

### 2. MongoDB
**Required for Database**

**Option A: Local Installation (Windows)**
1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will run as a Windows service automatically

**Option B: MongoDB Atlas (Cloud - Recommended for Quick Start)**
1. Create free account at: https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `backend/.env`:
```env
MONGODB_URI=your-atlas-connection-string
```

---

## 📦 Installation Steps

### Step 1: Navigate to Project Directory
```powershell
cd d:\assignment
```

### Step 2: Setup Backend
```powershell
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Run the backend (this will also seed sample data)
npm run dev
```

✅ Backend should now be running at: `http://localhost:5000`

**Keep this terminal window open!**

### Step 3: Setup Frontend (New Terminal)
Open a **new terminal window** and run:

```powershell
# Navigate to frontend folder
cd d:\assignment\frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend should now be running at: `http://localhost:5173`

**Keep this terminal window open too!**

### Step 4: Open Application
Open your browser and go to: **http://localhost:5173**

---

## 🎯 Testing the Application

### Test Filters
1. **Brand Filter**: Select "Samsung" - should show only Samsung products
2. **Category Filter**: Select "Smartphone" - should show only phones
3. **Price Range**: Enter Min: 50000, Max: 100000
4. **RAM Filter**: Select "8GB" - should filter by RAM
5. **Multiple Filters**: Combine filters and see results update

### Test Filter Chips
1. Apply some filters
2. See chips appear above product list
3. Click ✕ on a chip to remove that filter
4. Click "Clear All" to remove all filters

### Test Product Details
1. Click any product card
2. Verify you see:
   - Full description
   - All specifications
   - Vendor listings with prices and stock

### Test Navigation
1. Click "Back to Products" button
2. Verify you return to the main page with filters intact

---

## 🐛 Troubleshooting

### Backend Issues

**Error: "npm: command not found"**
- Solution: Install Node.js from the link above
- Restart your terminal after installation

**Error: "Unable to connect to MongoDB"**
- Solution: 
  - Check if MongoDB service is running (Windows Services)
  - Or use MongoDB Atlas connection string
  - Verify connection string in `.env`

**Error: "Port 5000 already in use"**
- Solution: Change PORT in `.env` file to another port (e.g., 5001)

**Error: "Cannot find module"**
- Solution: Run `npm install` in the backend directory

### Frontend Issues

**Error: "npm: command not found"**
- Solution: Install Node.js from the link above

**Error: "Failed to load products"**
- Solution: Ensure backend is running at `http://localhost:5000`
- Check browser console for errors
- Verify API URL in `src/services/api.js`

**Error: "CORS policy blocked"**
- Solution: Backend should have CORS configured
- Check `server.js` has CORS middleware

---

## 📊 Sample Data

The application automatically seeds 10 products on first run:

**Smartphones (5):**
- Samsung Galaxy S23 Ultra
- Apple iPhone 15 Pro
- Google Pixel 8 Pro
- OnePlus 12
- Samsung Galaxy S23

**Tablets (2):**
- Samsung Galaxy Tab S9
- Apple iPad Pro 12.9

**Laptops (3):**
- Apple MacBook Air M2
- Samsung Galaxy Book3 Pro
- Microsoft Surface Laptop 5

Each product has:
- 2-3 vendor listings
- Multiple specifications
- Realistic pricing in INR

---

## 🔧 Development Commands

### Backend
```powershell
# Run in development mode (with auto-reload)
npm run dev

# Run in production mode
npm start

# Seed data manually
npm run seed
```

### Frontend
```powershell
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure Overview

```
d:/assignment/
├── backend/              # Node.js/Express API
│   ├── server.js        # Entry point
│   ├── config/          # Database config
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   └── utils/           # Utilities (seeder)
│
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── services/    # API service
│   └── package.json
│
└── README.md           # Full documentation
```

---

## ✅ Verification Checklist

After setup, verify:
- [ ] Backend running at http://localhost:5000
- [ ] API accessible (visit http://localhost:5000 in browser)
- [ ] Frontend running at http://localhost:5173
- [ ] Products loading on homepage
- [ ] Filters working (try brand filter)
- [ ] Filter chips appearing and removable
- [ ] Product details page working
- [ ] No console errors in browser

---

## 🎓 API Documentation

### Available Endpoints

**GET** `http://localhost:5000/api/products`
- Get all products with optional filters

**GET** `http://localhost:5000/api/products/filters`
- Get filter options

**GET** `http://localhost:5000/api/products/:id`
- Get single product by ID

You can test these directly in your browser or use Postman.

---

## 💡 Tips

1. **Keep both terminals open** while developing
2. **Use nodemon** for auto-reload during development
3. **Check browser console** for frontend errors
4. **Check terminal** for backend errors
5. **MongoDB Compass** is a great tool to view your database
6. **Hot reload** is enabled - changes auto-refresh

---

## 📞 Need Help?

If you encounter issues:
1. Check the error message carefully
2. Verify all prerequisites are installed
3. Ensure both backend and frontend are running
4. Check the troubleshooting section above
5. Review the full README.md for detailed information

---

## 🎉 You're All Set!

Your Product Finder application should now be running successfully!

**Next Steps:**
- Explore the application features
- Try different filter combinations
- View product details
- Check the code structure
- Read the full README.md for design decisions

Happy coding! 🚀
