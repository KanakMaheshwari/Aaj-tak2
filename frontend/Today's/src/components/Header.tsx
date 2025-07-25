import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, BellIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Today's
          </Link>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <input type="text" placeholder="Search articles..." className="w-80 pl-9 pr-3 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            {/* <button className="p-1 rounded-full hover:bg-gray-100">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <UserIcon className="h-5 w-5 text-gray-600" />
            </button> */}
          </div>
        </div>
      </div>
    </header>;
};