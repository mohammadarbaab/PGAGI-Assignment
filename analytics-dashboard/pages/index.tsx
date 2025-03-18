import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      {/* Centered Cards */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weather Card */}
          <Link href="/weather">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-white/20">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                Weather
              </h2>
              <p className="text-gray-600 mb-4">
                Check the latest weather updates.
              </p>
              {/* Weather Graph */}
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="images/weather.png" // Replace with your image path
                  alt="Weather Graph"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide the image if it fails to load
                  }}
                />
              </div>
            </div>
          </Link>

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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
