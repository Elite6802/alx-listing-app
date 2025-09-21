import React from 'react';

const Header: React.FC = () => {
  // A simple array of categories to display below the search bar.
  // We can dynamically get these from the property data if needed.
  const categories = [
    'Rooms',
    'Mansion',
    'Countryside',
    'Beachfront',
    'City View',
    'Lakeside',
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center space-x-2 text-xl font-bold text-blue-600">
            {/* Simple logo or a placeholder */}
            <svg
              className="h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Airbnb Clone</span>
          </a>
        </div>

        {/* Search Bar Section */}
        <div className="hidden md:block flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location, price, etc."
              className="w-full px-5 py-2 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Auth and User Section */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 hidden sm:block"
          >
            Become a Host
          </a>
          <button
            className="hidden sm:block px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Sign In
          </button>
          <button
            className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-t border-gray-200 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-6">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="flex-shrink-0 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
