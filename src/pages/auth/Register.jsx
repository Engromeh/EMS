import React from "react";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const [formData, setFormData] = useState({
    email: "",

    fullName: "",
    companyName: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <>
      <div className="navbar  shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl">EMS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 font-medium">
                Sign In
              </Link>
            </p>
          </ul>
        </div>
      </div>

      <form
        className="border border-gray-200 rounded-xl p-6 w-full max-w-md mx-auto bg-white"
        onSubmit={handleSubmit}
      >
        <img
          src="logo.png"
          alt="Company Logo"
          className="w-24 h-24 mx-auto mt-6"
        />
        <legend className="fieldset-legend color-[#1B2B4B]">EMS</legend>
        <div className="mb-4">
          <h3 className="font-bold text-lg text-[#1B2B4B]">Welcome to EMS</h3>
          <p className="text-gray-500 text-sm">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Username */}

        <label className="text-sm font-medium text-[#1B2B4B] mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
        />


        
        {/*Company Name */}
        <div className="flex flex-col  mb-4 space-between">
          <label className="text-sm font-medium text-[#1B2B4B]">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
          />
        </div>



        {/* Work Email */}
        <label className="text-sm font-medium text-[#1B2B4B] mb-1">
          Work Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
        />



        {/* choose role */}
        <label className="text-sm font-medium text-[#1B2B4B] mb-1 mt-4">
          Choose Role
        </label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="select select-primary  input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white "
        >
          <option disabled={true}>HR Administrator</option>
          <option>HR Administrator</option>
          <option>Department Manager</option>
          <option>Executive</option>
        </select>


        {/* Password */}
        <div className="flex flex-col gap-1 mb-2 mt-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#1B2B4B]">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none pr-10 bg-white"
            />

            {/* Password Requirements */}
            <div className="grid grid-cols-2 gap-y-2 mt-3 text-xs">
              <div
                className={`flex items-center gap-2 ${
                  passwordRules.length ? "text-green-500" : "text-gray-400"
                }`}
              >
                <span>{passwordRules.length ? "✓" : "○"}</span>
                <span>8+ characters</span>
              </div>

              <div
                className={`flex items-center gap-2 ${
                  passwordRules.uppercase ? "text-green-500" : "text-gray-400"
                }`}
              >
                <span>{passwordRules.uppercase ? "✓" : "○"}</span>
                <span>One uppercase</span>
              </div>

              <div
                className={`flex items-center gap-2 ${
                  passwordRules.number ? "text-green-500" : "text-gray-400"
                }`}
              >
                <span>{passwordRules.number ? "✓" : "○"}</span>
                <span>One number</span>
              </div>

              <div
                className={`flex items-center gap-2 ${
                  passwordRules.special ? "text-green-500" : "text-gray-400"
                }`}
              >
                <span>{passwordRules.special ? "✓" : "○"}</span>
                <span>One special char</span>
              </div>
            </div>
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>

            <div className="flex justify-between items-center mt-2"></div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="btn w-full bg-[#1B2B4B] text-white rounded-md hover:bg-[#152338] flex items-center justify-center gap-2"
        >
          Register
          <LogIn size={18} />
        </button>

        {/* Footer */}
        <div className="divider my-3" />
        <p className="text-center text-xs text-gray-400">
          Secured by EMS Advanced Auth™
        </p>
      </form>
    </>
  );
};

export default Register;
