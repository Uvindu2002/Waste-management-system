import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('userId');
    Cookies.remove('email');
    Cookies.remove('userRole');
    navigate('/customerlogin');
  };

  const isLoggedIn = Cookies.get('userId');

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/" className="hover:text-gray-200 transition duration-200">IV</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-200 text-lg">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition duration-200 text-lg">
            About
          </Link>
          <Link to="/stockview" className="text-white hover:text-gray-200 transition duration-200 text-lg">
            Stock
          </Link>
          <Link to="/contactus" className="text-white hover:text-gray-200 transition duration-200 text-lg">
            Contact
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-white hover:text-gray-200 transition duration-200 text-lg">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200 text-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/customerlogin"
              className="bg-yellow-700 text-white px-4 py-2 rounded-full hover:bg-yellow-800 transition duration-200 text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
