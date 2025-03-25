import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row gap-4">
          {/* Left Section: Copyright and Author (Inline) */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()}  All rights reserved. | Created by{' '}
              <Link to="https://akhileshts.netlify.app/">
              <span className="font-semibold underline">Akhilesh Ts</span>
              </Link>
              
            </p>
          </div>

          {/* Right Section: Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;