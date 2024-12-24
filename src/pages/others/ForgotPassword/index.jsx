import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import logo from '@/pages/NovaHome/assests/logo.png';
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Password reset email sent to:", email);
  //   setEmail("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://api.novahome.care/api/employer/forgotpassword",
        {
          email,
        }
      );
      if (response.status === 200) {
        setSuccessMessage("Password reset link sent! Please check your email.");
        setEmail("");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-teal-50 p-4">
      {/* Back to Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-teal-600 font-semibold py-2 px-4 bg-white/80 backdrop-blur-sm border border-teal-500 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back to Login</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left side (Company Logo and Message) */}
          <div className="md:w-1/2 bg-teal-100 p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
              <img src={logo} className="w-40 h-auto mb-6" alt="" />
              <h2 className="text-3xl font-bold text-teal-700 mt-8 mb-4">
                Reset Your Password
              </h2>
              <p className="text-gray-700 text-lg">
                Please enter your email address to receive a password reset
                link.
              </p>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Forgot Password
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition-all duration-200 text-lg"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
