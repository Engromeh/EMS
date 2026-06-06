import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      password,
      confirmPassword,
    });

    // API Call Here
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <img
        src="logo.png"
        alt="Company Logo"
        className="w-24 h-24 mb-2"
      />

      <h1 className="text-4xl font-bold text-[#1B2B4B] mb-6">EMS</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-xl p-6 w-full max-w-md bg-white shadow-sm"
      >
        <div className="mb-6 text-center">
          <h3 className="font-bold text-2xl text-[#1B2B4B]">
            Reset Password
          </h3>

          <p className="text-gray-500 mt-2">
            Please create a strong password that you haven't used before.
          </p>
        </div>

        {/* New Password */}
        <label className="text-sm font-medium text-[#1B2B4B] mb-2 block">
          New Password
        </label>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full pr-10  bg-white"
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Password Rules */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-5">
          <p className={passwordRules.length ? "text-green-500" : "text-gray-400"}>
            {passwordRules.length ? "✓" : "○"} 8+ characters
          </p>

          <p className={passwordRules.uppercase ? "text-green-500" : "text-gray-400"}>
            {passwordRules.uppercase ? "✓" : "○"} One uppercase
          </p>

          <p className={passwordRules.number ? "text-green-500" : "text-gray-400"}>
            {passwordRules.number ? "✓" : "○"} One number
          </p>

          <p className={passwordRules.special ? "text-green-500" : "text-gray-400"}>
            {passwordRules.special ? "✓" : "○"} One special char
          </p>
        </div>

        {/* Confirm Password */}
        <label className="text-sm font-medium text-[#1B2B4B] mb-2 block">
          Confirm Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input input-bordered w-full mb-5  bg-white"
        />

        <button
          type="submit"
          className="btn w-full bg-[#1B2B4B] text-white hover:bg-[#152338]"
        >
        save a new password
         
        </button>

        <div className="divider my-4"></div>

        <Link
          to="/"
          className="text-center text-sm text-gray-500 hover:underline flex justify-center items-center gap-1"
        >
          <GoArrowLeft />
          Back To Login
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;