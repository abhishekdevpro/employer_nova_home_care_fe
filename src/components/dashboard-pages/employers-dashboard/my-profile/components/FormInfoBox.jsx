import React, { useState } from 'react';
import { User, Camera, Baby, X } from 'lucide-react';

const EditProfileForm = () => {
  const [numChildren, setNumChildren] = useState(0);
  const [numPets, setNumPets] = useState(0);
  const [children, setChildren] = useState([]);
  const [pets, setPets] = useState([]);

  const addChild = () => {
    if (children.length < numChildren) {
      setChildren([...children, { name: '', age: '' }]);
    }
  };

  const removeChild = (index) => {
    const newChildren = children.filter((_, i) => i !== index);
    setChildren(newChildren);
  };

  const addPet = () => {
    if (pets.length < numPets) {
      setPets([...pets, { name: '', type: '' }]);
    }
  };

  const removePet = (index) => {
    const newPets = pets.filter((_, i) => i !== index);
    setPets(newPets);
  };

  const handleChildChange = (index, field, value) => {
    const newChildren = [...children];
    newChildren[index][field] = value;
    setChildren(newChildren);
  };

  const handlePetChange = (index, field, value) => {
    const newPets = [...pets];
    newPets[index][field] = value;
    setPets(newPets);
  };

  const handleNumChildrenChange = (value) => {
    const newValue = parseInt(value) || 0;
    setNumChildren(newValue);
    if (newValue < children.length) {
      setChildren(children.slice(0, newValue));
    }
  };

  const handleNumPetsChange = (value) => {
    const newValue = parseInt(value) || 0;
    setNumPets(newValue);
    if (newValue < pets.length) {
      setPets(pets.slice(0, newValue));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-teal-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <User className="h-6 w-6" />
              Edit Profile
            </h1>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Basic Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                  <div className="mt-1 flex items-center gap-4">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
                    >
                      Upload Photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Family Size</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Care Needs</label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              {/* Children Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Children Information
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Children</label>
                  <input
                    type="number"
                    min="0"
                    value={numChildren}
                    onChange={(e) => handleNumChildrenChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                {children.map((child, index) => (
                  <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
                    <button
                      type="button"
                      onClick={() => removeChild(index)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Child Name</label>
                      <input
                        type="text"
                        value={child.name}
                        onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Child Age</label>
                      <input
                        type="number"
                        value={child.age}
                        onChange={(e) => handleChildChange(index, 'age', e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                ))}
                
                {children.length < numChildren && (
                  <button
                    type="button"
                    onClick={addChild}
                    className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
                  >
                    Add Child
                  </button>
                )}
              </div>

              {/* Pets Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
                  Pets Information
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Pets</label>
                  <input
                    type="number"
                    min="0"
                    value={numPets}
                    onChange={(e) => handleNumPetsChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                {pets.map((pet, index) => (
                  <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
                    <button
                      type="button"
                      onClick={() => removePet(index)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pet Name</label>
                      <input
                        type="text"
                        value={pet.name}
                        onChange={(e) => handlePetChange(index, 'name', e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pet Type</label>
                      <input
                        type="text"
                        value={pet.type}
                        onChange={(e) => handlePetChange(index, 'type', e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                ))}
                
                {pets.length < numPets && (
                  <button
                    type="button"
                    onClick={addPet}
                    className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
                  >
                    Add Pet
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 text-lg font-semibold"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;