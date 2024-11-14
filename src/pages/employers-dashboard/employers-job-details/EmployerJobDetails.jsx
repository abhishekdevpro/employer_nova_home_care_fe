import React, { useState } from 'react';
import { Heart, MoreVertical, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmployerJobDetails = () => {
  const [activeTab, setActiveTab] = useState('FAVORITES');

  const caregivers = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Boston, MA",
      type: "Full Time",
      rate: "$18-22/hr",
      age: "25 yrs old",
      experience: "5 yr(s) exp.",
      description: "Hi, I'm Sarah! I'm a certified early childhood educator with experience in both daycare and private home settings. I believe in creating a nurturing and educational environment...",
      rating: 5
    },
    {
      id: 2,
      name: "Emma L.",
      location: "Cambridge, MA",
      type: "Part Time",
      rate: "$20-25/hr",
      age: "30 yrs old",
      experience: "8 yr(s) exp.",
      description: "Experienced nanny with a background in child development. I specialize in creating age-appropriate activities and maintaining consistent routines...",
      rating: 4
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">
      {/* Header Navigation */}
      <div className="flex justify-between border-b pb-4 mb-6">
        <div className="flex space-x-8">
          <button
            className={`${activeTab === 'APPLICANTS' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            onClick={() => handleTabClick('APPLICANTS')}
          >
            APPLICANTS
          </button>
          <button
            className={`${activeTab === 'FAVORITES' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            onClick={() => handleTabClick('FAVORITES')}
          >
            FAVORITES
          </button>
          <button
            className={`${activeTab === 'VIEWED' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            onClick={() => handleTabClick('VIEWED')}
          >
            VIEWED
          </button>
          <button
            className={`${activeTab === 'HIRED' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            onClick={() => handleTabClick('HIRED')}
          >
            HIRED
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border rounded-md px-3 py-1 text-gray-600">
            <option>Child caregivers</option>
          </select>
          <select className="border rounded-md px-3 py-1 text-gray-600">
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Caregiver Cards */}
      <div className="space-y-4">
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} className="border rounded-lg p-4 flex">
            <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4">
              <div className="w-full h-full rounded-lg bg-teal-100" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <Link to={'/caregiver-profile-page/1'}>
                  <h3 className="text-xl font-semibold text-gray-800">{caregiver.name}</h3>
                  </Link>
                  <div className="flex space-x-2 text-yellow-400">
                    {[...Array(caregiver.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-red-400 hover:text-red-500">
                    <Heart size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical size={20} />
                  </button>
                  <button className="bg-teal-600 text-white px-4 py-1 rounded-md hover:bg-teal-700">
                    Message
                  </button>
                </div>
              </div>
              <div className="flex space-x-4 mt-2 text-sm text-gray-600">
                <span>{caregiver.location}</span>
                <span>•</span>
                <span>{caregiver.type}</span>
                <span>•</span>
                <span>{caregiver.rate}</span>
                <span>•</span>
                <span>{caregiver.age}</span>
                <span>•</span>
                <span>{caregiver.experience}</span>
              </div>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {caregiver.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerJobDetails;