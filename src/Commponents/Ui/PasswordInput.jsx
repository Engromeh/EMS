import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
  label = "Password",
  name,
  value,
  onChange,
  placeholder = "••••••••",
  showRules = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordRules = {
    length: value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    number: /\d/.test(value),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  };

  return (
    <div className="flex flex-col gap-1 mb-2 mt-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-[#1B2B4B]">{label}</label>
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none pr-10 bg-white"
        />

        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>

      {/* Password Requirements */}
      {showRules && (
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
      )}
    </div>
  );
};

export default PasswordInput;