import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { fetchTrendingProducts } from '../utils/api'; // Assuming you have an API utility for fetching data

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductTrendsChart = ({ products }) => {
  const [chartData, setChartData] = useState(null);

  useEffect((products) => {
    const fetchData = async () => {
      try {
        // Fetch trending products data from backend
        // const products = await fetchTrendingProducts(); // API call to get dynamic data
        // const products = products
        const labels = products.map((product) => product.name.length > 20 ? `${product.name.slice(0, 12)}...` : product.name); // Product names as labels
        const data = products.map((product) => product.price || 0); // Prices as data
        console.log(products);
        // Set chart data
        setChartData({
          labels,
          datasets: [
            {
              label: 'Trending Product Prices',
              data,
              backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
              borderColor: 'rgba(75, 192, 192, 1)', // Border color
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching trending products:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Trending Product Prices',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ProductTrendsChart;
