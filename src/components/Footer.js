import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="/home" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact Us
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Terms of Service
          </a>
        </div>
        <p className="mt-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
