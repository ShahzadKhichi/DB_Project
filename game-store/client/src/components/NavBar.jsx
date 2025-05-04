import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUserShield, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors duration-200">
          Game Store
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105">
            <FaHome className="text-lg" />
            <span className="font-semibold">Home</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105">
            <FaShoppingCart className="text-lg" />
            <span className="font-semibold">Cart</span>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/admin" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105">
                <FaUserShield className="text-lg" />
                <span className="font-semibold">Admin</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-semibold">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105">
                <FaSignInAlt className="text-lg" />
                <span className="font-semibold">Login</span>
              </Link>
              <Link to="/register" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105">
                <FaUserPlus className="text-lg" />
                <span className="font-semibold">Register</span>
              </Link>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-amber-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 px-4 pt-2 pb-4 transition-all duration-300`}
      >
        <div className="flex flex-col space-y-2">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2"
            onClick={toggleMenu}
          >
            <FaHome className="text-lg" />
            <span className="font-semibold">Home</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2"
            onClick={toggleMenu}
          >
            <FaShoppingCart className="text-lg" />
            <span className="font-semibold">Cart</span>
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/admin"
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2"
                onClick={toggleMenu}
              >
                <FaUserShield className="text-lg" />
                <span className="font-semibold">Admin</span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2 text-left"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-semibold">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2"
                onClick={toggleMenu}
              >
                <FaSignInAlt className="text-lg" />
                <span className="font-semibold">Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-all duration-200 hover:scale-105 py-2"
                onClick={toggleMenu}
              >
                <FaUserPlus className="text-lg" />
                <span className="font-semibold">Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
