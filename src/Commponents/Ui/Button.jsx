const Button = ({
  Text,
  Icon,
  type = "button",
  className = "",
  onClick,
  style = {},
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded-md flex items-center justify-center gap-2 transition-all duration-200 ${className}`}
    >
      {Icon}
      <span>{Text}</span>
    </button>
  );
};

export default Button;