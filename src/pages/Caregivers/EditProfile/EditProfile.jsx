import React, { useState } from 'react';

const EditableProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Caroline S.',
    age: 18,
    school: 'Dover Sherborn High School',
    university: 'University of Pennsylvania',
    experience: '3 months to 14 years',
    comfortLevel: 'up to seven kids',
    certifications: ['CPR training', 'Comfortable with pets', 'First aid training', 'Nanny'],
    bio: 'My name is Caroline and I am 18 years old. I have just graduated from Dover Sherborn High School and I will be attending the University of Pennsylvania this fall. I have experience babysitting kids from 3 months to 14 years. I am also am comfortable watching up to seven kids, am CPR certified and can drive. I can do errands, housework, meal prep, and driving. I love being active, doing arts and crafts, and having fun!'
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCertificationChange = (index, checked) => {
    setProfileData((prevData) => {
      const updatedCertifications = [...prevData.certifications];
      updatedCertifications[index] = checked
        ? prevData.certifications[index]
        : '';
      return { ...prevData, certifications: updatedCertifications };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any logic to save the updated profile data
    toggleEditMode();
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-teal-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">{profileData.name} - Babysitter</h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-12 my-12">
        {editMode ? (
          <form onSubmit={handleSubmit} className="text-center w-full">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={profileData.age}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="school" className="block text-gray-700 font-bold mb-2">
                School
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={profileData.school}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="university" className="block text-gray-700 font-bold mb-2">
                University
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={profileData.university}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mb-6">
              <h2 className="text-teal-500 text-2xl font-bold mb-2">Credentials</h2>
              {profileData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={!!cert}
                    onChange={(e) => handleCertificationChange(index, e.target.checked)}
                    className="mr-2"
                  />
                  <label>{cert}</label>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={toggleEditMode}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-teal-500 text-2xl font-bold mb-4">About {profileData.name}</h2>
            <p className="text-gray-700 mb-8">{profileData.bio}</p>

            <h2 className="text-teal-500 text-2xl font-bold mb-4">Details</h2>
            <p className="text-gray-700 mb-2">Age: {profileData.age}</p>
            <p className="text-gray-700 mb-2">School: {profileData.school}</p>
            <p className="text-gray-700 mb-2">University: {profileData.university}</p>
            <p className="text-gray-700 mb-2">Experience: {profileData.experience}</p>
            <p className="text-gray-700 mb-2">Comfort Level: {profileData.comfortLevel}</p>

            <h2 className="text-teal-500 text-2xl font-bold mb-4">Credentials</h2>
            <ul className="text-gray-700 mb-8 list-none">
              {profileData.certifications.map((cert, index) => (
                cert && (
                  <li key={index} className="flex items-center mb-3">
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
                    {cert}
                  </li>
                )
              ))}
            </ul>

            <button
              onClick={toggleEditMode}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableProfilePage;