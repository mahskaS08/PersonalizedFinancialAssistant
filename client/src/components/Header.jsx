import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <header className='bg-indigo-100 shadow-lg relative'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl cursor-pointer flex space-x-1'>
            <span className='text-purple-500'>Personal</span>
            <span className='text-blue-400'>Financial-</span>
            <span className='text-orange-400'>Assistant</span>
          </h1>
        </Link>
        
        <div className="flex items-center">
          {/* Toggle Button */}
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='sm:hidden focus:outline-none'>
            Menu
          </button>

          {/* Mobile Dropdown */}
          <div ref={dropdownRef} className={`sm:hidden ${isDropdownOpen ? "block" : "hidden"} absolute right-0 mt-10 py-2 w-48 bg-white rounded-md shadow-lg z-20`}>
            <ul className='flex flex-col'>
              <Link to='/first'><li className='text-gray-700 hover:text-black cursor-pointer py-2 px-4'>First</li></Link>
              <Link to='/second'><li className='text-gray-700 hover:text-black cursor-pointer py-2 px-4'>Second</li></Link>
              <Link to='/third'><li className='text-gray-700 hover:text-black cursor-pointer py-2 px-4'>Third</li></Link>
            </ul>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className='hidden sm:flex gap-4'>
          <Link to='/first'><li className='text-gray-700 hover:text-black cursor-pointer'>First</li></Link>
          <Link to='/second'><li className='text-gray-700 hover:text-black cursor-pointer'>Second</li></Link>
          <Link to='/third'><li className='text-gray-700 hover:text-black cursor-pointer'>Third</li></Link>
        </ul>
      </div>
    </header>
  );
}
