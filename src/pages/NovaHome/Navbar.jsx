
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdChildCare, MdSchool, MdElderlyWoman, MdPets, MdCleaningServices, MdWork } from 'react-icons/md';
import logo from './assests/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null); 

  const categories = [
    { name: 'Child care', icon: MdChildCare, subcategories: ['Babysitters', 'Overnight sitters', "Mother's helpers", 'Nannies', 'Night nannies', 'Newborn nannies', 'Live-in nannies', 'Daycares', 'Family daycares'] },
    { name: 'Tutoring', icon: MdSchool },
    { name: 'Senior care', icon: MdElderlyWoman },
    { name: 'Pet care', icon: MdPets },
    { name: 'Housekeeping', icon: MdCleaningServices },
    { name: 'Jobs', icon: MdWork },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index); 
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Nova Home Care"
            />
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link
             to={`https://jobseeker-nova-home-care-fe.vercel.app/`}
              className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Jobs
            </Link>
            <Link
              href="#"
              className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Partner with Us
            </Link>
            <Link
            to={'/login'}
              className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Login
            </Link>
            <Link
            to={'/register'}
              className="bg-teal-700 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Signup
            </Link>
            <button
              onClick={() => setIsSliderOpen(!isSliderOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Partner with Us</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
          <a href="#" 
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >Signup</a>
        </div>
      </div>

      {/* Slider menu */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 transform ${isSliderOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-6">
          <button
            onClick={() => setIsSliderOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex items-center text-lg text-gray-700 hover:text-teal-600 focus:outline-none"
                >
                  <category.icon className="mr-2" />
                  {category.name}
                </button>
                {expandedCategory === index && category.subcategories && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="text-gray-600 hover:text-teal-600">{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

