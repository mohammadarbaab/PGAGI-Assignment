// "useClient";

// import { useState } from "react";
// import "../styles/globals.css"; // Make sure this is included
// import Weather from "../components/Weather";

// export default function Home() {
//   const [city, setCity] = useState("");
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [errorAlert, setErrorAlert] = useState(null);
//   const [hourlyTemperatureData, setHourlyTempratureData] = useState([]);

//   const fetchWeatherData = async () => {
//     const apiKey = "03131ba28b85826da98fca29b5938df9"; // Add your actual API key here
//     const commanUrl = `https://api.openweathermap.org/data/2.5`;
//     const city = "YOUR_CITY_NAME"; // Define your city name or pass it as a parameter
//     const weatherUrl = `${commanUrl}/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const forecastUrl = `${commanUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`;
//     const hourlyUrl = `${commanUrl}/forecast/hourly?q=${city}&appid=${apiKey}&units=metric`; // Define hourlyUrl

//     try {
//       const [weatherResponse, forecastResponse, hourlyResponse] =
//         await Promise.all([
//           fetch(weatherUrl),
//           fetch(forecastUrl),
//           fetch(hourlyUrl), // Now hourlyUrl is defined
//         ]);

//       if (weatherResponse.ok && forecastResponse.ok && hourlyResponse.ok) {
//         const weatherData = await weatherResponse.json();
//         setCurrentWeather(weatherData);

//         const forecastData = await forecastResponse.json();
//         setForecastData(forecastData.list.slice(0, 5 * 8)); // Assuming you want the first 5 days' data (5*8 entries)

//         const hourlyData = await hourlyResponse.json();

//         const hourlyTemperatureData = hourlyData.list.map((hourlyEntry) => ({
//           time: hourlyEntry.dt,
//           temperature: hourlyEntry.main.temp,
//         }));
//         setHourlyTemperatureData(hourlyTemperatureData);

//         setErrorAlert(null);
//       } else {
//         setErrorAlert("Invalid City Name, try again");
//       }
//     } catch (error) {
//       console.log("Error fetching data", error);
//       setErrorAlert("An error occurred");
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
//         <main className="text-center flex-1 w-full">
//           <h1 className="text-4xl font-bold mb-8 mt-4 text-white">
//             Welcome to the weather app
//           </h1>

//           <div className="flex items-center justify-center mb-8">
//             <input
//               type="text"
//               placeholder="enter city name"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               className="p-4 mr-4 bg-gray-700 text-white rounded"
//             />

//             <button
//               className="p-4 bg-blue-500 text-white rounded cursor-pointer"
//               onClick={fetchWeatherData}
//             >
//               Search
//             </button>
//           </div>

//           {errorAlert && <div className="text-red-500 mb-4">{errorAlert}</div>}

//           {currentWeather && forecastData && hourlyTemperatureData > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="md:col-span-2">
//                 <Weather currentWeather={currentWeather} />
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import "../styles/globals.css"; // Make sure this is included
import Weather from "../components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);
  const [hourlyTemperatureData, setHourlyTemperatureData] = useState([]);

  const fetchWeatherData = async () => {
    const apiKey = "03131ba28b85826da98fca29b5938df9"; // Add your actual API key here
    const commanUrl = `https://api.openweathermap.org/data/2.5`;
    const weatherUrl = `${commanUrl}/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `${commanUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
      ]);

      if (weatherResponse.ok && forecastResponse.ok) {
        const weatherData = await weatherResponse.json();
        setCurrentWeather(weatherData);

        const forecastData = await forecastResponse.json();
        setForecastData(forecastData.list.slice(0, 5 * 8)); // First 5 days' data

        const hourlyTemperatureData = forecastData.list.map((hourlyEntry) => ({
          time: hourlyEntry.dt,
          temperature: hourlyEntry.main.temp,
        }));
        setHourlyTemperatureData(hourlyTemperatureData);

        setErrorAlert(null);
      } else {
        setErrorAlert("Invalid City Name, try again");
        setHourlyTemperatureData([]); // Reset hourly data
      }
    } catch (error) {
      console.log("Error fetching data", error);
      setErrorAlert("An error occurred");
      setHourlyTemperatureData([]); // Reset hourly data
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
        <main className="text-center flex-1 w-full">
          <h1 className="text-4xl font-bold mb-8 mt-4 text-white">
            Welcome to the weather app
          </h1>

          <div className="flex items-center justify-center mb-8">
            <input
              type="text"
              placeholder="enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-4 mr-4 bg-gray-700 text-white rounded"
            />

            <button
              className="p-4 bg-blue-500 text-white rounded cursor-pointer"
              onClick={fetchWeatherData}
            >
              Search
            </button>
          </div>

          {errorAlert && <div className="text-red-500 mb-4">{errorAlert}</div>}

          {currentWeather && forecastData && hourlyTemperatureData.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Weather currentWeather={currentWeather} />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}