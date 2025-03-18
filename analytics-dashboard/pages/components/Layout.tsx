import Link from "next/link";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Toggle side navbar on small screens
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Sidebar */}
      <div
        className={`fixed w-64 bg-white/90 backdrop-blur-md p-4 h-screen shadow-2xl z-20 transform ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-500 overflow-y-auto`}
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
          <svg
            className="w-8 h-8 mr-2 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          Dashboard
        </h2>
        <ul>
          <li className="mb-4">
            <Link
              href="/weather"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-6 h-6 mr-2"
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
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/news"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-6 h-6 mr-2"
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
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar */}
        <nav className="fixed w-full md:w-[calc(100%-16rem)] bg-white/80 backdrop-blur-md p-4 text-gray-800 flex justify-between items-center shadow-md z-10">
          {/* Hamburger Menu (visible on small screens) */}
          <button
            onClick={toggleSideNav}
            className="md:hidden p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* User Profile Icon */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 p-8 mt-16 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
