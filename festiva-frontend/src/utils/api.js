import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

// User login endpoint
export const userLogin = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};

export const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    return null;
  }
};


export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
};


// Fetch recommendations from the backend
export const getRecommendations = async () => {
  try {
    const response = await axios.get(`${API_URL}/recommendations`);
    return response.data; // This should include the "products" array
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return null;
  }
};

// Fetch prediction results from the backend
export const getPrediction = async (features) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, { features });
    console.log('API Response:', response.data); // Log the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    return null; // Return null on error
  }
};

// Fetch products for product page just regular products
export const fetchRegularProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data; // Trending products data
  } catch (error) {
    console.error('Error fetching trending products:', error);
    return [];
  }
};

// Fetch trending products from the backend
export const fetchTrendingProducts = async () => {
  try {
    // Append a random query parameter to prevent caching and encourage variety
    const randomQueryParam = Math.random();
    const response = await axios.get(`${API_URL}/fetch-trends?random=${randomQueryParam}`);
    return response.data; // Trending products data
  } catch (error) {
    console.error('Error fetching trending products:', error);
    return [];
  }
};

// Fetch a single product by ID from the backend
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data; // Single product data
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
