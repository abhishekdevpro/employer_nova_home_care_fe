import FormContent2 from "../../common/form/login/FormContent2";
// import MobileMenu from "../../header/MobileMenu";
// import Header from "./Header";

// const index = () => {
//   return (
//     <>
//       <Header />
//       {/* <!--End Main Header -->  */}

//       <MobileMenu />
//       {/* End MobileMenu */}

//       <div className="login-section ">
//         <div
//           className="image-layer border-2 border-red-500"
//           style={{ backgroundImage: "url(/images/background/12.jpg)" }}
//         ></div>
//         <div className="outer-box">
//           {/* <!-- Login Form --> */}
//           <div className="login-form default-form">
// <FormContent2 />
//           </div>
//           {/* <!--End Login Form --> */}
//         </div>
//       </div>
//       {/* <!-- End Info Section --> */}
//     </>
//   );
// };

// export default index;
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import logo from "@/pages/NovaHome/assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-teal-50 p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-teal-600 font-semibold py-2 px-4 bg-white/80 backdrop-blur-sm border border-teal-500 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back to Home</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left side (Company Logo and Welcome Message) */}
          <div className="md:w-1/2 bg-teal-100 p-8 flex flex-col items-center justify-center">
            <div className="max-w-md w-full">
              <img src={logo} className="w-40 h-auto mb-6" alt="" />
              <h2 className="text-3xl font-bold text-teal-700 mt-8 mb-4">
                Welcome Back to Nova Homecare
              </h2>
              <p className="text-gray-700 text-lg">
                We are glad to see you again. Please log in to access your
                account and continue making a difference in healthcare.
              </p>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Login</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-400"
                required
              />
              <label className="text-gray-700">
                I accept the Terms and Policy
              </label>
            </div>
                <div className="pt-4">
                 <Link to={'/employers-dashboard/dashboard'}>
                 <button
                    type="submit"
                    className="w-full bg-teal-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition-all duration-200 text-lg"
                  >
                    Login
                  </button>
                 </Link>
                </div>
              </form>
              {/* Forgot Password Link */}
              <div className="mt-4 text-center">
                <a
                  href="/forgot-password"
                  className="text-teal-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Don’t have an account?{" "}
                  <Link to={'/register'} className="text-teal-600 hover:underline">
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
