import React from 'react';
import { FaHome, FaUser, FaBlog } from 'react-icons/fa';

const Sidebar = () => {
     return (
          <div className="bg-gray-900 text-white w-64 h-full fixed top-0 left-0 py-6 px-4">
               <ul>
                    <li className="mb-4">
                         <a href="/" className="flex items-center">
                              <FaHome className="mr-2" /> Home
                         </a>
                    </li>
                    <li className="mb-4">
                         <a href="/profile" className="flex items-center">
                              <FaUser className="mr-2" /> Profile
                         </a>
                    </li>
                    <li className="mb-4">
                         <a href="/blogs" className="flex items-center">
                              <FaBlog className="mr-2" /> Blogs
                         </a>
                    </li>
               </ul>
          </div>
     );
};

export default Sidebar;
