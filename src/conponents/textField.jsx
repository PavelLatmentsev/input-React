import React from "react";

const TextField = ({ label, name, value, type, onChange }) => {
    return ( <div>
        <label htmlFor={name}>{label}</label>
        <div>
        <input type={type} name={name} id={name} value={value} onChange={onChange}   />
        </div>
        
    </div> );
}
 
export default TextField;