import React, { useId } from "react";

const Input= React.forwardRef(function Input({label, type, name, placeholder,className=""}, ref){
    const id = useId();
    return (
        <div className={`w-full ${className}`}>
        <label htmlFor="{id}">{label} </label>
        
        <input ref={ref} type={type} name={name} id={id} placeholder={placeholder} className={`${className}`} />
        </div>

        
    )
})


export default Input;
