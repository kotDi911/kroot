const Input = ({name, type, placeholder, value, onChange, onBlur, touched, errors, ref, label}) => {
    return (
        <label htmlFor={name} className="input__label">
            {label}
            <input
                id={name}
                className="input__input"
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                ref={ref}
            />
            {touched && errors ? (<span className="input__err">{errors}</span>) : null}
        </label>
    )
}
export default Input