// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import HeaderNavContent from "./HeaderNavContent";
// import logo from "../../pages/NovaHome/assests/logo.png";
// import { useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const DashboardHeader = () => {
//   const { pathname } = useLocation();
//   const [navbar, setNavbar] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY >= 0) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeBackground);
//     return () => window.removeEventListener("scroll", changeBackground); // Cleanup listener
//   }, []);

//   const handleDropdownToggle = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <header
//       // style={{ backgroundColor: "#4C3957" }}
//       className={`main-header header-shadow z-10 ${navbar ? "fixed-header" : ""}`}
//     >
//       <div className="container-fluid">
//         <div className="main-box ">
//           <div className="nav-outer ">
//             <div className="logo-box">
//               <div className="me-10">
//                 <Link to="/">
//                   <img alt="brand" src={logo} className="h-16 p-2" />
//                 </Link>
//               </div>
//             </div>

//             {/* <HeaderNavContent /> */}

//             {/* <div className="outer-box float-end ">
//               <button className="menu-btn">
//                 <span className="count">1</span>
//                 <span className="icon la la-heart-o"></span>
//               </button>

//               <button className="menu-btn mx-3">
//                 <span className="icon la la-bell"></span>
//               </button>

//               <div className="relative">
//                 <button
//                   className="flex items-center space-x-2 text-white"
//                   onClick={handleDropdownToggle}
//                 >
//                   <img
//                     alt="avatar"
//                     className="w-8 h-8 rounded-full"
//                     src="/images/resource/company-6.png"
//                   />

//                   <i className={`la la-angle-down ${dropdownOpen ? 'rotate-180' : ''}`}></i>
//                 </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg  z-50">
//                     <div className="px-4 pb-4 pt-2 bg-purple-700 rounded-t-lg">
//                       <p className="font-bold text-white">User</p>
//                       <p className="text-sm text-white">User@cUser.com</p>
//                       <Link to="/public-profile" className="text-white text-sm hover:underline">
//                         View Public Profile
//                       </Link>
//                     </div>

//                     <div className="px-3 flex justify-between py-1 text-white bg-violet-900">
//                       <p className="text-xs text-white">Viewed: 0 times</p>
//                       <p className="text-xs text-white">Last Login: Sep 9, 2024</p>
//                     </div>

//                     <div className="px-2 py-2 border-b border-gray-200">
//                       <p className="text-sm text-gray-700 mt-2">Basic Postings: Unlimited</p>
//                       <p className="text-sm text-gray-700 my-2">Premium Postings: 0 Credits    <Link to="/buy-credits" className="text-indigo-600 text-xs border-1 p-0.5 rounded-sm border-blue-600 hover:underline">
//                         Buy Credits
//                       </Link></p>
//                       <p className="text-sm text-gray-700">Global Postings: 0 Credits</p>
//                     </div>

//                     <div className="px-4 py-2">
//                       <Link to="/account-settings" className="block text-sm text-gray-800 hover:bg-gray-100 py-2 rounded-lg">
//                         Account Settings
//                       </Link>
//                       <button
//                         onClick={() => {
//                           // Add your logout logic here
//                         }}
//                         className="block w-full text-left text-sm text-gray-800 hover:bg-gray-100 py-2 rounded-lg"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div> */}

//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaEnvelope,
  FaBriefcase,
  FaHeart,
  FaCaretDown,
} from "react-icons/fa";
import logo from "../../pages/NovaHome/assests/logo.png";

const DashboardHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const changeBackground = () => {
    setNavbar(window.scrollY > 0);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Attach outside click listener
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header
      className={`main-header header-shadow z-10 ${
        navbar ? "fixed-header bg-white shadow-md" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="main-box flex items-center justify-between">
          {/* Logo Section */}
          <div className="logo-box">
            <Link to="/">
              <img alt="brand" src={logo} className="h-16 p-2" />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="nav-outer flex items-center space-x-6">
            {/* Search */}

            <div className="nav-item flex flex-col items-center justify-center hover:text-blue-600">
              <FaSearch className="text-gray-600 text-lg " />
              <span className="text-sm font-medium text-center">Search</span>
            </div>

            {/* Messages */}
            <div className="nav-item  flex flex-col items-center justify-center hover:text-blue-600 relative">
              <FaEnvelope className="text-gray-600 text-lg" />
              <span className="hidden md:block text-sm font-medium">
                Messages
              </span>
              <span className="absolute -top-2 -right-2 mr-5 bg-red-500 text-white rounded-full px-1 text-xs font-bold">
                5
              </span>
            </div>

            {/* Jobs */}
            <div className="nav-item flex flex-col  items-center justify-center hover:text-blue-600">
              <FaBriefcase className="text-gray-600 text-lg" />
              <span className="hidden md:block text-sm font-medium">Jobs</span>
            </div>

            {/* Favorites */}
            <div className="nav-item  items-center flex flex-col justify-center hover:text-blue-600">
              <FaHeart className="text-gray-600 text-lg" />
              <span className="hidden md:block text-sm font-medium">
                Favorites
              </span>
            </div>

            {/* Dropdown Section */}

            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2"
                onClick={toggleDropdown}
              >
                <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-gray-600">
                  SA
                </div>
                <FaCaretDown className="text-gray-600" />
              </button>

              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg">
                  {/* User Info */}
                  <div className="px-4 py-3 text-gray-800 font-medium">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center text-lg text-gray-700">
                        SA
                      </div>
                      <span>Sonu A.</span>
                    </div>
                  </div>
                  <hr className="border-gray-500  h-[2px]" />

                  {/* Dropdown Links */}
                  <ul>
                    {/* Manage Section */}
                    <li className="px-4 py-2 text-sm text-gray-500 font-semibold">
                      Manage
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/jobs" className="text-gray-800">
                        Jobs
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/caregivers" className="text-gray-800">
                        Caregivers
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/payments" className="text-gray-800">
                        Payments & Rewards
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/background-checks" className="text-gray-800">
                        Background Checks
                      </Link>
                    </li>
                    <hr className="border-gray-500 h-[2px]" />

                    {/* Account Section */}
                    <li className="px-4 py-2 text-sm text-gray-500 font-semibold">
                      Account
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/profile" className="text-gray-800">
                        Profile
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/settings" className="text-gray-800">
                        Accounts & Settings
                      </Link>
                    </li>
                    <hr className="border-gray-500  h-[2px]" />

                    {/* Resources Section */}
                    <li className="px-4 py-2 text-sm text-gray-500 font-semibold">
                      Resources
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/safety" className="text-gray-800">
                        Safety
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/articles-guides" className="text-gray-800">
                        Articles & Guides
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/help" className="text-gray-800">
                        Help
                      </Link>
                    </li>
                  </ul>
                  <hr className="border-gray-500  h-[2px]" />

                  {/* Logout Button */}
                  <div className="px-4 py-3">
                    <button
                      onClick={() => {
                        console.log("Logging out...");
                      }}
                      className="w-full bg-red-500 text-white text-center py-2 rounded hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Upgrade Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
