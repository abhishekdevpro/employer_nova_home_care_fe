import React from 'react';
import { Clock, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaregiverProfilePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  return (
    <div className="bg-white min-h-screen p-2 md:p-8">
      {/* Back Button */}
      <div className="max-w-8xl mx-auto mb-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <div className="w-full md:w-1/3 ">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative">
              <div className="absolute top-2 right-2">
                <div className="text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt="Profile"
                className="w-32 h-32 rounded-lg object-cover mb-4"
              />
              <h1 className="text-xl font-bold mb-1">Your Name</h1>
              <p className="text-gray-500 mb-4">Your Location</p>
              
              <div className="flex justify-between w-full mb-6">
                <div className="text-center">
                  <p className="font-bold">4 years</p>
                  <p className="text-sm text-gray-500">Work experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">$15/hour</p>
                  <p className="text-sm text-gray-500">Starting rate</p>
                </div>
              </div>
              
              <div className="w-full mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <h3 className="font-medium">Cares for various age groups</h3>
                </div>
                <p className="text-gray-600 text-sm pl-7">
                  Ages 0-11 months, 1-3 years, 4-5 years, 6-11 years and 12+ years, up to 4 children.
                </p>
              </div>
              
              <div className="w-full mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    This is the background check we require for all caregivers.
                    <a href="#" className="text-blue-500 hover:underline ml-1">Learn more</a>
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                Write your bio here. Share your experience, qualifications, and what makes you unique.
                Include details about your experience with children, certifications, and special skills.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Credentials</h2>
              <p className="text-gray-500 text-sm mb-4">
                Care does not verify these credentials. We recommend asking caregivers for proof.
              </p>
              <ul className="space-y-3">
                {['Babysitter', 'CPR training', 'Comfortable with pets', 'First aid training', 'Nanny'].map((credential) => (
                  <li key={credential} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {credential}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Reviews</h2>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Leave a review
                </button>
              </div>
              <div className="text-gray-600">
                <p>No reviews yet</p>
                <p className="text-sm">Be the first to leave a review!</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverProfilePage;