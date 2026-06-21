import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../layout/NavbarAuth";
import TitelAuth from "../../Commponents/Ui/TitelAuth";
import Inpute from "../../Commponents/Ui/Inpute";
import Button from "../../Commponents/Ui/Button";
import { LogIn } from "lucide-react";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <NavbarAuth
        title="EMS"
        paragraph1="Don't have an account?"
        paragraph2="Sign Up"
        link="/register"
      />

      <img
        src="logo.png"
        alt="Company Logo"
        className="w-24 h-24 mx-auto mt-6"
      />
      <legend className="fieldset-legend color-[#1B2B4B] text-4xl">EMS</legend>

      <form className="border border-gray-200 rounded-xl p-6 w-full max-w-md mx-auto bg-white">
        <TitelAuth
          title="Welcome Back!"
          paragraph="Enter your credentials to access your account."
        />

        {/* Email  */}
        <Inpute label="Email" placeholder="Enter your email" type="email" />

        {/* Password */}
        <Inpute
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
        />
        <div
          className="absolute right-3 top-[calc(50%+2px)] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <Link
            to="/forgetpassword"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Remember Me */}
        <label className="flex items-center gap-2 cursor-pointer mb-4">
          <input type="checkbox" />{" "}
          <span className="text-sm text-gray-500">Remember me for 30 days</span>

        </label>

        {/* Button */}
<Button Text="Sign In" Icon={<LogIn size={18} />}  classname="w-full"/>        {/* Footer */}
        <div className="divider my-3" />
        <p className="text-center text-xs text-gray-400">
          Secured by EMS Advanced Auth™
        </p>
      </form>
    </>
  );
};

export default Login;
