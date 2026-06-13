import { useState } from "react";
import NavbarAuth from "../../layout/NavbarAuth";
import TitelAuth from "../../Commponents/Ui/TitelAuth";
import Inpute from "../../Commponents/Ui/Inpute";
import SelectRole from "../../Commponents/Ui/SelectRole";
import PasswordInput from "../../Commponents/Ui/PasswordInput";
import Button from "../../Commponents/Ui/Button";
const Register = () => {
  // ✅ المفروض كده
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    companyName: "",
    role: "",
    password: "",
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
      <NavbarAuth
        title="EMS"
        paragraph1="Already have an account?"
        paragraph2="Sign In"
        link="/"
      />

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
        <TitelAuth
          title="Welcome to EMS"
          paragraph="Enter your credentials to access your account."
        />

        {/* Username */}

        <Inpute
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />

        {/*Company Name */}
        <Inpute
          label="Company Name"
          placeholder="Enter your company name"
          type="text"
        />

        {/* Work Email */}
        <Inpute
          label="Work Email"
          placeholder="Enter your work email"
          type="email"
        />

        {/* choose role */}
        <SelectRole
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="select select-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white mt-4 mb-4"
          option1="Select your role"
          option2="Admin"
          option3="Manager"
          option4="Employee"
        />
        {/* Password */}
        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Button */}
        <Button Text="Register" />
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
