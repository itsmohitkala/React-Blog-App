import React, { useId } from "react";

const Input= React.forwardRef(function Input({label, type, name, placeholder,className="", ...props}, ref){
    const id = useId();
    return (
        <div className={`w-full ${className}`}>
        <label htmlFor="{id}">{label} </label>
        
        <input ref={ref} type={type} name={name} id={id} placeholder={placeholder} className={` w-full${className}`  } {...props} />
        </div>

         // monica mam is the just 
         // so proud of you molo

        
    )
})


export default Input;
