import "./Input.scss";

function Input({
  label,
  name,
  type,
  onChange,
  value,
  accept,
  alt,
  placeholder,
  toggleDarkMode,
  autoComplete,
}) {
  return (
    <div className="field">
      <label htmlFor={name} className={`field__label field__label--${alt}`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={
          toggleDarkMode
            ? `field__input field__input--${alt} field__input--dark`
            : `field__input field__input--${alt}`
        }
        value={value}
        onChange={onChange}
        accept={accept}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default Input;
