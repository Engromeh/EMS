import  { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "../../Commponents/Ui/Button";
import PasswordInput from "../../Commponents/Ui/PasswordInput";
import Inpute from "../../Commponents/Ui/Inpute";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <img src="logo.png" alt="Company Logo" className="w-24 h-24 mb-2" />
      <h1 className="text-4xl font-bold text-[#1B2B4B] mb-6">EMS</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-xl p-6 w-full max-w-md bg-white shadow-sm"
      >
        <div className="mb-6 text-center">
          <h3 className="font-bold text-2xl text-[#1B2B4B]">Reset Password</h3>
          <p className="text-gray-500 mt-2">
            Please create a strong password that you haven't used before.
          </p>
        </div>

        {/* New Password مع قواعد الباسورد */}
        <PasswordInput
          label="New Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter new password"
          showRules={true}
        />

        {/* Confirm Password بدون قواعد */}
        <Inpute
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          type="password"
        />

        <Button Text="Reset Password" type="submit" className="w-full" />

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