
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MultiStepCareForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    careType: '',
    zipCode: '',
    timing: '',
    specificCare: '',
    travelDistance: 2,
    children: [{
      birthDate: ''
    }],
    isExpecting: false,
    additionalCare: {
      seniorCare: false,
      petCare: false,
      housekeeping: false,
      tutoring: false
    },
    startDate: '',
    endDate: '',
    isFlexible: false,
    schedule: {
      days: [],
      times: [],
      isVariable: false
    }
  });
  const navigate = useNavigate()
  // const handleNext = () => {
  //   if (step === 8) {
  //     // Validate required fields
  //     if (!formData.careType || !formData.zipCode || !formData.timing) {
  //       alert('Please fill in all required fields.');
  //       return;
  //     }
  
  //     // Save data to local storage
  //     localStorage.setItem('careFormData', JSON.stringify(formData));
  
  //     // Reset form
  //     setFormData({
  //       careType: '',
  //       zipCode: '',
  //       timing: '',
  //       specificCare: '',
  //       travelDistance: 2,
  //       children: [{ birthDate: '' }],
  //       isExpecting: false,
  //       additionalCare: {
  //         seniorCare: false,
  //         petCare: false,
  //         housekeeping: false,
  //         tutoring: false
  //       },
  //       startDate: '',
  //       endDate: '',
  //       isFlexible: false,
  //       schedule: {
  //         days: [],
  //         times: [],
  //         isVariable: false
  //       }
  //     });
  
  //     // Optionally, reset step to 1
  //     setStep(1);
  
  //     alert('Form submitted successfully!');
  //   } else {
  //     setStep(step + 1);
  //   }
  // };
  const handleNext = () => {
    // Validation for each step
    switch (step) {
      case 1:
        if (!formData.careType) {
          alert('Please select a type of care.');
          return;
        }
        break;
      case 2:
        if (!formData.zipCode) {
          alert('Please enter a ZIP code.');
          return;
        }
        break;
      case 3:
        if (!formData.timing) {
          alert('Please select when you need care.');
          return;
        }
        break;
      case 4:
        if (!formData.specificCare) {
          alert('Please select a kind of care.');
          return;
        }
        break;
      case 5:
        if (formData.children.some(child => !child.birthDate)) {
          alert('Please enter birth dates for all children.');
          return;
        }
        break;
      case 7:
        if (!formData.startDate) {
          alert('Please enter an estimated start date.');
          return;
        }
        break;
      // Add more cases if needed for other steps
    }
  
    if (step === 8) {
      // Validate required fields for the final step
      if (!formData.careType || !formData.zipCode || !formData.timing) {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Save data to local storage
      localStorage.setItem('careFormData', JSON.stringify(formData));
  
      // Reset form
      setFormData({
        careType: '',
        zipCode: '',
        timing: '',
        specificCare: '',
        travelDistance: 2,
        children: [{ birthDate: '' }],
        isExpecting: false,
        additionalCare: {
          seniorCare: false,
          petCare: false,
          housekeeping: false,
          tutoring: false
        },
        startDate: '',
        endDate: '',
        isFlexible: false,
        schedule: {
          days: [],
          times: [],
          isVariable: false
        }
      });
  
      // Optionally, reset step to 1
      setStep(1);
  
      alert('Form submitted successfully!');
      navigate('/employers-list-v2')
    } else {
      setStep(step + 1);
    }
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Previous steps remain the same...
  // (Steps 1-4 from the previous implementation)
  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">What type of care do you need?</h2>
      <p className="text-gray-600 mb-4">Joining Care gives you access to caregivers for the whole household.</p>
      
      {[
        { id: 'child', label: 'Child care', icon: '👶' },
        { id: 'senior', label: 'Senior care', icon: '🤍' },
        { id: 'housekeeping', label: 'Housekeeping', icon: '🏠' },
        { id: 'pet', label: 'Pet care', icon: '🐾' },
        { id: 'tutoring', label: 'Tutoring', icon: '📚' }
      ].map((option) => (
        <button
          key={option.id}
          onClick={() => handleInputChange('careType', option.id)}
          className={`w-full p-4 rounded-lg border-2 flex items-center space-x-3 hover:bg-teal-50 transition-colors
            ${formData.careType === option.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}
        >
          <span className="text-2xl">{option.icon}</span>
          <span className="text-lg text-gray-700">{option.label}</span>
        </button>
      ))}
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">Where do you need care?</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter ZIP code"
          className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-lg"
          value={formData.zipCode}
          onChange={(e) => handleInputChange('zipCode', e.target.value)}
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">When do you need care?</h2>
      {[
        { id: 'now', label: 'Right now' },
        { id: 'week', label: 'Within a week' },
        { id: 'month', label: 'In 1-2 months' },
        { id: 'browsing', label: 'Just browsing' }
      ].map((option) => (
        <button
          key={option.id}
          onClick={() => handleInputChange('timing', option.id)}
          className={`w-full p-4 rounded-lg border-2 text-left hover:bg-teal-50 transition-colors
            ${formData.timing === option.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}
        >
          <span className="text-lg text-gray-700">{option.label}</span>
        </button>
      ))}
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">What kind of care?</h2>
      {[
        {
          id: 'nanny',
          label: 'Nannies / recurring sitters',
          description: 'Hire for regular hours, ongoing care, full or part-time'
        },
        {
          id: 'oneTime',
          label: 'One-time sitters',
          description: 'Instantly book for events, occasional plans or backup care'
        },
        {
          id: 'daycare',
          label: 'Daycare centers',
          description: 'Find daycares, learning centers, or pre-schools near you'
        }
      ].map((option) => (
        <button
          key={option.id}
          onClick={() => handleInputChange('specificCare', option.id)}
          className={`w-full p-4 rounded-lg border-2 text-left hover:bg-teal-50 transition-colors
            ${formData.specificCare === option.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}
        >
          <div className="space-y-1">
            <span className="block text-lg font-medium text-gray-700">{option.label}</span>
            <span className="block text-sm text-gray-500">{option.description}</span>
          </div>
        </button>
      ))}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">How far are you willing to travel?</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleInputChange('travelDistance', Math.max(1, formData.travelDistance - 1))}
            className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center hover:bg-teal-200"
          >
            -
          </button>
          <span className="text-xl font-medium text-gray-700">{formData.travelDistance} miles</span>
          <button
            onClick={() => handleInputChange('travelDistance', Math.min(50, formData.travelDistance + 1))}
            className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center hover:bg-teal-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">Who needs care?</h2>
      
      {formData.children.map((child, index) => (
        <div key={index} className="space-y-2">
          <label className="block text-gray-700 mb-2">Child {index + 1}</label>
          <input
            type="text"
            placeholder="Birth Month and Year (MM/YYYY)"
            className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            value={child.birthDate}
            required
            onChange={(e) => {
              const newChildren = [...formData.children];
              newChildren[index].birthDate = e.target.value;
              handleInputChange('children', newChildren);
            }}
          />
        </div>
      ))}

      <button
        onClick={() => handleInputChange('children', [...formData.children, { birthDate: '' }])}
        className="flex items-center text-teal-600 hover:text-teal-700 font-medium space-x-2"
      >
        <span className="text-xl">+</span>
        <span>Add another child</span>
      </button>

      <label className="flex items-center space-x-3 mt-4">
        <input
          type="checkbox"
          checked={formData.isExpecting}
          onChange={(e) => handleInputChange('isExpecting', e.target.checked)}
          required
          className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
        />
        <span className="text-gray-700">I'm expecting</span>
      </label>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">Do you need any other types of care?</h2>
      
      {Object.entries({
        seniorCare: 'Senior care',
        petCare: 'Pet care',
        housekeeping: 'Housekeeping',
        tutoring: 'Tutoring'
      }).map(([key, label]) => (
        <label key={key} className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200">
          <span className="text-lg text-gray-700">{label}</span>
          <input
            type="checkbox"
            checked={formData.additionalCare[key]}
            onChange={(e) => handleInputChange('additionalCare', {
              ...formData.additionalCare,
              [key]: e.target.checked
            })}
            className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            required
          />
        </label>
      ))}

      <button
        onClick={handleNext}
        className="w-full text-center text-gray-500 hover:text-gray-700 mt-4"
      >
        Skip for now
      </button>
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-2 text-blue-700">
          <span className="text-xl">ℹ️</span>
          <p>We have over 150 caregivers, let's find the best fit for you</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-teal-700 mb-6">When do you need care?</h2>
      
      <div className="space-y-4">
        <div>
          <input
            type="date"
            placeholder="Estimated start date"
            className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-teal-500"
            value={formData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="date"
            placeholder="Estimated end date (optional)"
            className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-teal-500"
            value={formData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
        </div>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.isFlexible}
            onChange={(e) => handleInputChange('isFlexible', e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-teal-600"
          />
          <span className="text-gray-700">My start date is flexible</span>
        </label>
      </div>
    </div>
  );

  const renderStep8 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-teal-700 mb-6">Which days?</h2>
      
      <div className="grid grid-cols-7 gap-2 mb-6">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <button
            key={day}
            onClick={() => {
              const days = formData.schedule.days.includes(day)
                ? formData.schedule.days.filter(d => d !== day)
                : [...formData.schedule.days, day];
              handleInputChange('schedule', { ...formData.schedule, days });
            }}
            className={`p-3 rounded-lg text-center ${
              formData.schedule.days.includes(day)
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {['Mornings', 'Afternoons', 'Evenings'].map((time) => (
          <button
            key={time}
            onClick={() => {
              const times = formData.schedule.times.includes(time)
                ? formData.schedule.times.filter(t => t !== time)
                : [...formData.schedule.times, time];
              handleInputChange('schedule', { ...formData.schedule, times });
            }}
            className={`p-3 rounded-lg text-center ${
              formData.schedule.times.includes(time)
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          const times = formData.schedule.times.includes('Overnight')
            ? formData.schedule.times.filter(t => t !== 'Overnight')
            : [...formData.schedule.times, 'Overnight'];
          handleInputChange('schedule', { ...formData.schedule, times });
        }}
        className={`p-3 rounded-lg text-center w-full ${
          formData.schedule.times.includes('Overnight')
            ? 'bg-teal-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Overnight
      </button>

      <button className="text-teal-600 hover:text-teal-700 font-medium mt-4">
        Add specific times instead
      </button>

      <label className="flex items-center space-x-3 mt-4">
        <input
          type="checkbox"
          checked={formData.schedule.isVariable}
          onChange={(e) => handleInputChange('schedule', {
            ...formData.schedule,
            isVariable: e.target.checked
          })}
          className="w-5 h-5 rounded border-gray-300 text-teal-600"
        />
        <span className="text-gray-700">My schedule may vary</span>
      </label>
    </div>
  );

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= step ? 'bg-teal-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">Step {step} of 8</span>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}
        {step === 6 && renderStep6()}
        {step === 7 && renderStep7()}
        {step === 8 && renderStep8()}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 text-teal-600 hover:text-teal-700 font-medium"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-medium ml-auto"
          >
            {step === 8 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepCareForm;