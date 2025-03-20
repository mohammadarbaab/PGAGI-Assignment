// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
// import moment from "moment";

// const FiveDaysGraph = ({ forecastData }) => {
//   const chartRef = useRef(null);
//   const chartInstance =useRef(null)

//   useEffect(() => {
//     if (forecastData && forecastData.list) {
//       // Data ready hai, ab aap use kar sakte ho
//     } else {
//       console.log("forecastData abhi tak nahi aaya ya list missing hai");
//     }
//   }, [forecastData]);
  

//   useEffect(() => {
//     const createChart = () => {
//       const uniqueData = forecastData.reduce(
//         (acc, forecastDay) => {
//           const date = moment.unix(forecastData.dt).format("MMMM D");
//           if (!acc.dates.includes(date)) {
//             acc.dates.push(date);
//             acc.avgTemps.push(
//               (forecastDay.main.temp_max + forecastData.main.temp_min) / 2
//             );
//           }
//           return acc;
//         },
//         { dates: [], avgTemps: [] }
//       );

//       // chart config
//       const chartConfig = {
//         type: "line",
//         data: {
//           labels: uniqueData.dates,
//           datasets: [
//             {
//               label: "Average Temperature",
//               data: uniqueData.avgTemps,
//               backgroundColor: "rgba(255,99,132,0.2)",
//               borderColor: "rgba(255,99,132,1)",
//               tension: 0.1,
//             },
//           ],
//         },
//       };

//       // destroye exsisting
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }

//       // create a chart
//       const ctx = chartRef.current.getContext("2d");
//       const chartInstance = new Chart(ctx, chartConfig);
//     };

//     if (forecastData.length > 0) {
//       createChart();
//     }
//   }, [forecastData]);

//   return (
//     <div className="bg-gray-900 p-8 rounded-lg mb-8">
//       <h2 className="text-2xl font-bold mb-4">5-DAY Forecast Graph</h2>
//       <canvas ref={chartRef} width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default FiveDaysGraph

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import moment from "moment";

const FiveDaysGraph = ({ forecastData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (forecastData?.list?.length > 0 > 0) {
      createChart(); // Only call createChart if forecastData is valid
    } else {
      console.log("forecastData abhi tak nahi aaya ya list missing hai");
    }
  }, [forecastData]);

  const createChart = () => {
    // Prepare the data for the chart
    const uniqueData = forecastData.list.reduce(
      (acc, forecastDay) => {
        const date = moment.unix(forecastDay.dt).format("MMMM D");
        if (!acc.dates.includes(date)) {
          acc.dates.push(date);
          acc.avgTemps.push(
            (forecastDay.main.temp_max + forecastDay.main.temp_min) / 2
          );
        }
        return acc;
      },
      { dates: [], avgTemps: [] }
    );

    // Ensure there's data to plot
    if (uniqueData.dates.length === 0 || uniqueData.avgTemps.length === 0) {
      console.log("No valid data available for chart.");
      return;
    }

    // chart config
    const chartConfig = {
      type: "line",
      data: {
        labels: uniqueData.dates,
        datasets: [
          {
            label: "Average Temperature",
            data: uniqueData.avgTemps,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            tension: 0.1,
          },
        ],
      },
    };

    // Destroy existing chart if any
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, chartConfig);
  };

  return (
<div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-8 rounded-lg shadow-lg mb-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <h2 className="text-3xl font-bold text-white mb-6">5-DAY Forecast Graph</h2>
  <canvas ref={chartRef} width="400" height="200" className="rounded-lg border-2 border-white/20"></canvas>
</div>

  );
};

export default FiveDaysGraph;
