"use client";
import Link from "next/link";
// import { useState } from "react";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import Protected from "./components/Protected";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  // const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 25, 27, 24, 23, 26, 28], // Sample temperature data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(75, 192, 192, 0.4)");
          gradient.addColorStop(1, "rgba(75, 192, 192, 0)");
          return gradient;
        },
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverRadius: 7,
        fill: true, // Fill area under the line
        tension: 0.4, // Smooth curve
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#4A5568", // Gray color for legend text
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "7 Days Temperature Forecast",
        color: "#2D3748", // Dark gray color for title
        font: {
          size: 18,
          weight: "bold",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        cornerRadius: 5,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          color: "#4A5568", // Gray color for x-axis labels
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "#E2E8F0", // Light gray color for y-axis grid lines
        },
        ticks: {
          color: "#4A5568", // Gray color for y-axis labels
          font: {
            size: 14,
          },
        },
      },
    },
    animation: {
      duration: 2000, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Smooth animation
    },
  };


  return (
    <>
      <Protected>
        <div className="min-h-screen bg-gray-100 p-8">
          {/* Weather Graph (Full Width) */}
          <div className="w-full bg-white rounded-lg shadow-2xl shadow-blue-200 p-6 mb-8">
            <div className="flex flex-row flex-wrap items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                Weather Forecast
              </h2>
              <Link href="/weather">
                <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-500 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg group hover:from-blue-600 hover:to-teal-500 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {/* Button Text */}
                  <span className="relative z-10 text-lg cursor-pointer">
                    See Your City Weather
                  </span>

                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0 h-0 bg-white rounded-full opacity-0 group-hover:w-64 group-hover:h-64 group-hover:opacity-20 transition-all duration-700"></div>
                  </div>
                </button>
              </Link>
            </div>

            <div className="w-full h-96">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* News and Stock Market Cards (Equal Width in One Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Card */}
            <Link href="/news">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/20">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg
                    className="w-8 h-8 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  News
                </h2>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news.
                </p>
                {/* News Image */}
                <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="images/news.png" // Replace with your image path
                    alt="News"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide the image if it fails to load
                    }}
                  />
                </div>
              </div>
            </Link>

            {/* Stock Market Card */}
            <Link href="/stockMarket">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/20">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg
                    className="w-8 h-8 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Stock Market
                </h2>
                <p className="text-gray-600 mb-4">
                  Track the latest stock market trends.
                </p>
                {/* Stock Market Image */}
                <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="images/stock.png" // Replace with your image path
                    alt="Stock Market"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide the image if it fails to load
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Protected>
    </>
  );
};

export default Dashboard;
