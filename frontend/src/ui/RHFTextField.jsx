const RHFTextField = ({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  className,
  isRequired,
  validationSchema = {},
  ...rest
}) => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 text-secondary-700 block">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={dir}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
         {...register(name,validationSchema)}
         {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 text-xs mt-5 block">
            {errors[name]?.message}
        </span>
      )}
    </div>
  );
};
export default RHFTextField;
