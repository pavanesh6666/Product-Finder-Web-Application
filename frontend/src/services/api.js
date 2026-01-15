import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const productAPI = {
    // Get all products with optional filters
    getProducts: async (filters = {}) => {
        const params = new URLSearchParams();

        if (filters.brand) params.append('brand', filters.brand);
        if (filters.category) params.append('category', filters.category);
        if (filters.minPrice) params.append('minPrice', filters.minPrice);
        if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
        if (filters.ram) params.append('ram', filters.ram);
        if (filters.storage) params.append('storage', filters.storage);
        if (filters.color) params.append('color', filters.color);
        if (filters.screenSize) params.append('screenSize', filters.screenSize);
        if (filters.processor) params.append('processor', filters.processor);

        const response = await axios.get(`${API_BASE_URL}/products?${params.toString()}`);
        return response.data;
    },

    // Get single product by ID
    getProduct: async (id) => {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    },

    // Get filter options
    getFilters: async () => {
        const response = await axios.get(`${API_BASE_URL}/products/filters`);
        return response.data;
    }
};
