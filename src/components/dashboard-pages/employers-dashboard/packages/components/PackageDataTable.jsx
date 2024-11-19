import React from 'react';
import { CheckIcon } from 'lucide-react';

const PricingOption = ({ duration, price, discount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{duration}</h3>
        <span className="text-teal-500 font-bold text-3xl">${price}/mo*</span>
      </div>
      {discount && (
        <div className="bg-teal-100 text-teal-500 font-medium px-4 py-2 rounded-md mt-4">
          {discount} OFF
        </div>
      )}
      <ul className="mt-6 space-y-4">
        <li className="flex items-center">
          <CheckIcon className="w-5 h-5 mr-2 text-teal-500" />
          <span>Stand out with personal introductions to any employer</span>
        </li>
        <li className="flex items-center">
          <CheckIcon className="w-5 h-5 mr-2 text-teal-500" />
          <span>Rank high: get noticed in search results</span>
        </li>
        <li className="flex items-center">
          <CheckIcon className="w-5 h-5 mr-2 text-teal-500" />
          <span>See who viewed your profile</span>
        </li>
      </ul>
    </div>
  );
};

const PackageDataTable = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Go Premium</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingOption duration="1 Month" price={9} />
          <PricingOption duration="3 Months" price={6.34} discount="30% OFF" />
          <PricingOption duration="6 Months" price={4.84} discount="46% OFF" />
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-teal-500 hover:underline">
            + Discount code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageDataTable;