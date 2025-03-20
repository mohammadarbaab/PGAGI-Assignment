import axios from 'axios';

const API_KEY = 'K8AJ1BASIMBUGAGX'; // Replace with your API key
const BASE_URL = 'https://www.alphavantage.co/query';

// Fetch stock data (e.g., daily time series)
export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};

// Search for stock symbols
export const searchStockSymbols = async (keywords) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: keywords,
        apikey: API_KEY,
      },
    });
    console.log('API Response:', response.data); // Debugging ke liye
    return response.data.bestMatches || [];
  } catch (error) {
    console.error('Error searching stock symbols:', error);
    return [];
  }
};