import React from "react";
import moment from "moment";


const SunriseSunset = ({ sunrise, sunset }) => {
  return (
<div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-8 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <h2 className="text-3xl font-bold text-white mb-6">Sunrise and Sunset</h2>
  <p className="text-2xl text-white mb-2">
    Sunrise: {moment.unix(sunrise).format("HH:mm")}
  </p>
  <p className="text-2xl text-white">
    Sunset: {moment.unix(sunset).format("HH:mm")}
  </p>
</div>

  );
};
export default SunriseSunset;
