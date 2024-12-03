import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

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
