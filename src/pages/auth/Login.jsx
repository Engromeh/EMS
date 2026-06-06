import React, { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  return (
    <>
      <div className="navbar  shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">EMS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 font-medium">
                Sign Up
              </Link>
            </p>
          </ul>
        </div>
      </div>
      <img
        src="logo.png"
        alt="Company Logo"
        className="w-24 h-24 mx-auto mt-6"
      />
      <legend className="fieldset-legend color-[#1B2B4B]">EMS</legend>

      <form className="border border-gray-200 rounded-xl p-6 w-full max-w-md mx-auto bg-white">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-[#1B2B4B]">Welcome to EMS</h3>
          <p className="text-gray-500 text-sm">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-border w-full mb-4">
          <button
            type="button"
            className={`tab flex-1 font-medium ${
              activeTab === "email"
                ? "text-[#1B2B4B] border-b-2 border-[#1B2B4B]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("email")}
          >
            Email
          </button>
          <button
            type="button"
            className={`tab flex-1 font-medium ${
              activeTab === "username"
                ? "text-[#1B2B4B] border-b-2 border-[#1B2B4B]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("username")}
          >
            Username
          </button>
        </div>

        {/* Email or Username */}
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-sm font-medium text-[#1B2B4B]">
            {activeTab === "email" ? "Email Address" : "Username"}
          </label>
          <input
            type={activeTab === "email" ? "email" : "text"}
            placeholder={
              activeTab === "email" ? "name@company.com" : "Enter your username"
            }
            className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#1B2B4B]">
              Password
            </label>
            <span className="text-sm text-blue-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none pr-10 bg-white"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
        </div>

        {/* Remember Me */}
        <label className="flex items-center gap-2 cursor-pointer mb-4">
          <input type="checkbox" />{" "}
          <span className="text-sm text-gray-500">Remember me for 30 days</span>
        </label>

        {/* Button */}
        <button
          type="submit"
          className="btn w-full bg-[#1B2B4B] text-white rounded-md hover:bg-[#152338] flex items-center justify-center gap-2"
        >
          Login to Account
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

export default Login;
