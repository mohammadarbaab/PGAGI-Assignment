// pages/dashboard.tsx
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-white">Dashboard</h1>

      <div className="flex items-center justify-center mb-8">
        <Link href="/weather">
          <button className="p-4 bg-blue-500 text-white rounded cursor-pointer">
            Weather App
          </button>
        </Link>
        <Link href="/news">
          <button className="p-4 bg-blue-500 text-white rounded cursor-pointer ml-4">
            News App
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
