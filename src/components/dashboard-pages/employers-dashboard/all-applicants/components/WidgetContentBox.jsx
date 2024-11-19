import React, { useState } from 'react';
import { Heart, MoreHorizontal, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicantTracker = () => {
  const [activeTab, setActiveTab] = useState('APPLICANTS');
  const [selectedFilter, setSelectedFilter] = useState('Child caregivers');
  const [sortBy, setSelectedSort] = useState('Newest');

  // Sample data for demonstration
  const candidates = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      location: "Boston, MA",
      type: "Full Time",
      rate: "$18-22/hr",
      age: "25 yrs old",
      experience: "5 yr(s) exp.",
      bio: "Hi, I'm Sarah! I'm a certified early childhood educator with experience in both daycare and private home settings. I believe in creating a nurturing and educational environment...",
      isFavorite: false
    },
    {
      id: 2,
      name: "Emma L.",
      rating: 4,
      location: "Cambridge, MA",
      type: "Part Time",
      rate: "$20-25/hr",
      age: "30 yrs old",
      experience: "8 yr(s) exp.",
      bio: "Experienced nanny with a background in child development. I specialize in creating age-appropriate activities and maintaining consistent routines...",
      isFavorite: false
    }
  ];

  const tabs = [
    { id: 'APPLICANTS', label: 'APPLICANTS' },
    { id: 'FAVORITES', label: 'FAVORITES' },
    { id: 'VIEWED', label: 'VIEWED' },
    { id: 'HIRED', label: 'HIRED' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 ${
                activeTab === tab.id
                  ? 'border-b-2 border-teal-500 text-teal-600 font-medium'
                  : 'text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border rounded-md py-2 px-4 text-gray-700"
          >
            <option>Child caregivers</option>
            <option>Pet sitters</option>
            <option>House cleaners</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="border rounded-md py-2 px-4 text-gray-700"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Highest rated</option>
          </select>
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="space-y-6">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-teal-50 rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Link to={'/caregiver-profile-page/1'}>
                    <h3 className="text-xl font-semibold text-gray-800">{candidate.name}</h3>
                    </Link>
                    <div className="flex">
                      {[...Array(candidate.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-gray-600 mt-1 space-x-4">
                    <span>{candidate.location}</span>
                    <span>•</span>
                    <span>{candidate.type}</span>
                    <span>•</span>
                    <span>{candidate.rate}</span>
                    <span>•</span>
                    <span>{candidate.age}</span>
                    <span>•</span>
                    <span>{candidate.experience}</span>
                  </div>
                  
                  <p className="mt-3 text-gray-700">{candidate.bio}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => {
                    // Handle favorite toggle
                  }}
                >
                  <Heart className="w-6 h-6 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreHorizontal className="w-6 h-6 text-gray-400" />
                </button>
                <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantTracker;