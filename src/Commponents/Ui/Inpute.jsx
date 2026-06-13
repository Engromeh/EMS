const Inpute = ({ label, placeholder, type, name, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-sm font-medium text-[#1B2B4B]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full rounded-md border-gray-300 focus:border-[#1B2B4B] focus:outline-none bg-white"
      />
    </div>
  );
};

export default Inpute;