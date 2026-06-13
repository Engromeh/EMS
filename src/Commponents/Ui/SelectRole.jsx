
const SelectRole = ({ label, name, value, onChange, className ,option1, option2, option3, option4 }) => {
  return (
    <div>
      <label className="text-sm font-medium text-[#1B2B4B] mb-1 mt-4">
          {label}
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        >
          <option disabled={true}>{option1}</option>
          <option>{option2}</option>
          <option>{option3}</option>
          <option>{option4}</option>
        </select>

    </div>
  )
}

export default SelectRole
