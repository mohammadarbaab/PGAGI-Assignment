import React from "react";
import moment from "moment";

import {
  FaCloud,
  FaSun,
  FaCloudRain,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";

const Weather = ({ currentWeather }) => {
  const formatDateTime = (timestamp) => {
    return moment.unix(timestamp).format("MMMM D,ddd HH:mm");
  };

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription.toLowerCase()) {
      case "clear sky":
        return <FaSun />;
      case "few Clouds":
      case "scattered clouds":
      case "broken clouds":
        return <FaCloud />;
      case "shower rain":
      case "rain":
        return <FaCloudRain />;
      case "snow":
        return <FaSnowflake />;
      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        return <FaSmog />;
      default:
        return null;
    }
  };

  return (
    // <div className="bg-gray-300 p-8 rounded-lg mb-3">
    //   <div className="flex justify-between items-center">
    //     <div>
    //       <h2 className="text-2xl font-bold mb-2">{currentWeather.name}</h2>
    //       <p className="text-lg mb-2">
    //         {moment.unix(currentWeather.dt).format("dddd")}
    //       </p>
    //     </div>
    //     <p className="text-lg mb-2">{formatDateTime(currentWeather.dt)}</p>
    //   </div>
  
    //   <p className="text-5xl mb-4 mt-4 font-bold">{currentWeather.main.temp}°C</p>
  
    //   <div className="flex justify-between items-center mb-4 ">
    //     <div className="flex items-center ">
    //       {getWeatherIcon(currentWeather.weather[0].description)}
  
    //       <p className="text-xl ml-2">{currentWeather.weather[0].description}</p>
    //     </div>
  
    //     <div>
    //       <p className="text-sm">
    //         High:{currentWeather.main.temp_max}°C Low:
    //         {currentWeather.main.temp_min}°C
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg mb-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">{currentWeather.name}</h2>
      <p className="text-xl text-white/90 mb-2">
        {moment.unix(currentWeather.dt).format("dddd")}
      </p>
    </div>
    <p className="text-xl text-white/90 mb-2">{formatDateTime(currentWeather.dt)}</p>
  </div>

  <p className="text-6xl font-bold text-white mb-4 mt-4">{currentWeather.main.temp}°C</p>

  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center text-white">
      {getWeatherIcon(currentWeather.weather[0].description)}
      <p className="text-xl ml-2">{currentWeather.weather[0].description}</p>
    </div>

    <div>
      <p className="text-sm text-white/90">
        High: {currentWeather.main.temp_max}°C Low: {currentWeather.main.temp_min}°C
      </p>
    </div>
  </div>
</div>

  );
};


export default Weather;
