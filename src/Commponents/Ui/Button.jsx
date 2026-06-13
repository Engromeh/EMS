import {  LogIn } from "lucide-react";

const Button = ({Text}) => {
  return (
    <>
      <button
          type="submit"
          className="btn w-full bg-[#1B2B4B] text-white rounded-md hover:bg-[#152338] flex items-center justify-center gap-2"
        >
          {Text}
          <LogIn size={18} />
        </button>
    </>
  )
}

export default Button
