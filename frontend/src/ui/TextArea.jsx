import React from "react";

const TextArea = ({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired = false,
  className,
}) => {
  return (
    <div className="textField">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        dir={dir}
        className={`textField__input mt-2 min-h-[150px] leading-8 resize-none w-full ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
      ></textarea>
    </div>
  );
};

export default TextArea;
