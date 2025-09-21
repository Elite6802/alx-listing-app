import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Airbnb Clone</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for unique accommodations and travel experiences.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">How it works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Newsroom</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Airbnb Plus</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Accessibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">This is not a real site</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Referrals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Partner with Us</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Safety Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cancellations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Airbnb Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
