const TextField = ({
  type = "text",
  label,
  value,
  name,
  dir = "rtl",
  onChange,
  isRequired,
  className,
}) => {
  return (
    <div className="textField">
      <label className="text-secondary-600 text-sm" htmlFor={name}>
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
      />
    </div>
  );
};

export default TextField