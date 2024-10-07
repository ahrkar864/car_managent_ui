const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm";

export default function EnployeeInformationsInput({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    isReadOnly = false,
    customClass = ""
}) {
    return (

            <div className=""> 
                <label htmlFor={labelFor} className="block text-sm font-medium text-gray-700 mb-2">
                    {labelText}
                </label>
                {type === "textarea" ? (
                    <textarea
                        onChange={handleChange}
                        value={value}
                        id={id}
                        name={name}
                        required={isRequired}
                        className={fixedInputClass + " " + customClass + " h-24"} 
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        onChange={handleChange}
                        value={value}
                        id={id}
                        name={name}
                        type={type}
                        required={isRequired}
                        className={fixedInputClass + " " + customClass}
                        placeholder={placeholder}
                        readOnly={isReadOnly}
                    />
                )}
            </div>
    

    );
}
