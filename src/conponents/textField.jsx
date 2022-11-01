import React from "react";

const TextField = ({ label, name, value, type, onChange, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return ( 
        <div className="mb-4">
        <label htmlFor={name}>{label}</label>
        <div className="input-group has-validation">
        <input type={type} name={name} id={name} value={value} onChange={onChange}  className={getInputClasses()}/>
        {error && <div className="invalid-feedback">{error}</div>}
        </div>
        </div>

       
   );
}
 
export default TextField;