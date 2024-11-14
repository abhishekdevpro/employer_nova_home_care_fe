import React from 'react';

const CaregiverProfilePage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-teal-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Caroline S. - Babysitter</h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-12 my-12">
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt="Caroline S."
            className="rounded-full w-40 h-40 object-cover mb-6"
          />
          <div className="text-center">
            <h2 className="text-teal-500 text-2xl font-bold mb-4">About Caroline</h2>
            <p className="text-gray-700 mb-8">
              My name is Caroline and I am 18 years old. I have just graduated from Dover Sherborn High School and I will be attending the University of Pennsylvania this fall. I have experience babysitting kids from 3 months to 14 years. I am also am comfortable watching up to seven kids, am CPR certified and can drive. I can do errands, housework, meal prep, and driving. I love being active, doing arts and crafts, and having fun!
            </p>

            <h2 className="text-teal-500 text-2xl font-bold mb-4">Credentials</h2>
            <ul className="text-gray-700 mb-8 list-none">
              <li className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-3 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Babysitter
              </li>
              <li className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-3 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                CPR training
              </li>
              <li className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-3 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Comfortable with pets
              </li>
              <li className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-3 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                First aid training
              </li>
              <li className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-3 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Nanny
              </li>
            </ul>

            <div className="text-right">
              <a href="#" className="text-teal-500 hover:underline">
                Leave a review
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverProfilePage;