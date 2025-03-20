import React from "react";
import { useEffect, useRef } from "react";
import moment from "moment";
import Chart from "chart.js/auto";

const HourlyWeather = ({ HourlyTemperatureData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const createChart = () => {
      const uniqueData = HourlyTemperatureData.reduce(
        (acc, entry) => {
          const time = moment.unix(entry.time).format("H A");

          if (!acc.times.includes(time)) {
            acc.times.push(time);
            acc.temperatures.push(entry.temperature);
          }
          return acc;
        },
        { times: [], temperatures: [] }
      );

      // chart
      const chartConfig = {
        type: "line",
        data: {
          labels: uniqueData.times,
          datasets: [
            {
              label: "Temperature",
              data: uniqueData.temperatures,
              fill: false,
              borderColor: "rgb(75,192,192)",
              tension: 0.1,
            },
          ],
        },
      };

      // destry chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // create chart
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, chartConfig);
    };

    if (HourlyTemperatureData.length > 0) {
      createChart();
    }
  }, [HourlyTemperatureData]);

  return (
    <div className="bg-gray-200 p-8 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Hourly Weather</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};
export default HourlyWeather;
