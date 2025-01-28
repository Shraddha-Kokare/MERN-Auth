import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const {currentUser}=useSelector(state=>state.user);
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold tracking-tight hover:opacity-90 transition-opacity">
            Auth<span className="text-yellow-300">App</span>
          </h1>
        </Link>
        
        {/* Navigation Menu */}
        <ul className="flex gap-6 text-lg font-medium">
          <Link to="/">
            <li className="hover:text-yellow-300 transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-yellow-300 transition-all duration-200">
              About
            </li>
          </Link>
          <Link to="/profile">
          {currentUser?(
            <img src={currentUser.profilePicture} alt='profile' className='h-8 w-8 rounded-full object-cover'/>
          ):(
            <li className="hover:text-yellow-300 transition-all duration-200">
              Sign In
            </li>
          )}
            
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
