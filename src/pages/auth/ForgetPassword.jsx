import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineLockReset } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();
        const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    navigate("/resetpassword");
  }
  return (
    
      <>
       <img
            src="logo.png"
            alt="Company Logo"
            className="w-24 h-24 mx-auto mt-6"
          />
          <legend className="fieldset-legend text-4xl color-[#1B2B4B]">EMS</legend>
        <form className="border border-gray-200 rounded-xl p-6 w-full max-w-md mx-auto bg-white">
         
          <div className="mb-4 text-center">
         <MdOutlineLockReset  className="text-7xl text-[#1B2B4B] mx-auto"/>
            <h3 className="font-bold text-2xl text-[#1B2B4B]">Forgot Password?</h3>
            <p className="text-gray-500 text-lg">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Username */}

          <label className="text-sm font-medium text-[#1B2B4B] mb-1">
Email
          </label>
          <input
            type="email"
            name="email"
                placeholder="Enter your email"
            className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
          />

          {/* Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn w-full bg-[#1B2B4B] text-white rounded-md hover:bg-[#152338] flex items-center justify-center gap-2 mt-4"
          >
            Reset Password
                <GoArrowRight  className="inline-block"/>
          </button>

          {/* Footer */}
          <div className="divider my-3" />
          <Link to="/" className="text-center text-md text-gray-400  hover:underline flex items-center justify-center gap-1">
        BACK TO LOGIN 
        <GoArrowLeft className="inline-block" />
          </Link>
        </form>
      </>
   
  );
};

export default ForgetPassword;
