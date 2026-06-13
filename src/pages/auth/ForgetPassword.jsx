import { GoArrowLeft } from "react-icons/go";
import { MdOutlineLockReset } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TitelAuth from "../../Commponents/Ui/TitelAuth";
import Inpute from "../../Commponents/Ui/Inpute";
import Button from "../../Commponents/Ui/Button";

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
            <TitelAuth  title="Forgot your password?" paragraph="Enter your email address and we'll send you a link to reset your password." />
          </div>

          {/* Username */}

          <Inpute label="Email" placeholder="Enter your email" type="email address" />

          {/* Button */}
         <Button Text="Send Reset Link" onClick={handleSubmit} />

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
