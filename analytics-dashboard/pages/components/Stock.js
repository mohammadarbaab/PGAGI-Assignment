import { useEffect, useState } from 'react';
import { fetchStockData } from '../../services/alphaVantage';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stock = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStockData(symbol);
      setStockData(data);
    };

    if (symbol) {
      loadData();
    }
  }, [symbol]);

  if (!stockData) return <div>Loading...</div>;

  const timeSeries = stockData['Time Series (Daily)'];
  const dates = Object.keys(timeSeries).reverse();
  const prices = dates.map((date) => parseFloat(timeSeries[date]['4. close']));

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Stock Price',
        data: prices,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>{symbol}</h2>
      <Line data={data} />
    </div>
  );
};

export default Stock;