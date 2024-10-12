import React from 'react';
import { FaHome, FaUser, FaBlog, FaChartBar } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
     return (
          <div className="bg-gray-900 text-white w-64 h-full fixed top-0 left-0 py-6 px-4">
               <ul>
                    <li className="mb-4">
                         <Link href={'/dashboard'} className="flex items-center">
                              <FaChartBar /> Dashboard
                         </Link>
                    </li>
                    <li className="mb-4">
                         <Link href="/home" className="flex items-center">
                              <FaHome className="mr-2" /> Home
                         </Link>
                    </li>
                    <li className="mb-4">
                         <Link href="/profile" className="flex items-center">
                              <FaUser className="mr-2" /> Profile
                         </Link>
                    </li>
                    <li className="mb-4">
                         <Link href="/blogs" className="flex items-center">
                              <FaBlog className="mr-2" /> Blogs
                         </Link>
                    </li>
               </ul>
          </div>
     );
};

export default Sidebar;
