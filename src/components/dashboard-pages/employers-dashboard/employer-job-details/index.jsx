// JobDetailsPage.jsx
import DashboardHeader from '@/components/header/DashboardHeader';
import React from 'react';

const JobDetailsPage = () => {
  return (
    <div className="bg-teal-50 min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <DashboardHeader />
      <div className="bg-teal-100 w-full max-w-8xl rounded-lg p-6 m-6">
        <h1 className="text-center text-teal-900 text-2xl font-semibold mb-2">
          View Job Details
        </h1>
        <p className="text-center text-teal-700 text-sm">
          Edit your job post any time. Jobs with more detail attract the right applicants.
        </p>
      </div>

      {/* Job Details Card */}
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-md p-6">
        <h2 className="text-teal-900 text-xl font-semibold mb-4">
          Nanny Needed For My Children In Waltham.
        </h2>

        {/* Job Summary Section */}
        <div className="flex flex-wrap justify-between items-center mb-4 text-teal-800">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Job type:</span>
            <span className="text-teal-600">Recurring</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Job start date:</span>
            <span className="text-teal-600">Thu, Dec 12, 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Pay rate:</span>
            <span className="text-teal-600">$15-20/hr</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Location:</span>
            <span className="text-teal-600">Waltham, MA</span>
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="space-y-4 text-teal-900">
          <div>
            <h3 className="font-semibold">Job description</h3>
            <p className="text-teal-700">Just looking for my 2 kids</p>
          </div>

          <div>
            <h3 className="font-semibold">Who needs care</h3>
            <p className="text-teal-700">1 child, 6-11 years</p>
          </div>

          <div>
            <h3 className="font-semibold">Ideal caregiver qualities</h3>
            <ul className="text-teal-700 space-y-2 mt-2">
              <li className="flex items-center space-x-2">
                <span>✔️ Comfortable with pets</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✔️ College educated</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✔️ CPR / First Aid trained</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✔️ Has a reliable car</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✔️ Non-smoker</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
