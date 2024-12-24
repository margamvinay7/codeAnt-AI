import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-transparent hover:bg-[#1570EF] text-[#1570EF] hover:text-white py-2 px-6 border border-[#1570EF] rounded-lg transition-all duration-300 font-medium"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-[#1570EF] hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all duration-300 font-medium"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
