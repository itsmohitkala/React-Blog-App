import React, { useId } from "react";

const Input= React.forwardRef(function Input({label, type, name, placeholder,className="", ...props}, ref){
    const id = useId();
    return (
        <div className={`w-full ${className}`}>
        <label htmlFor="{id}" className="mb-1 block text-sm font-medium text-[var(--color-ink)]">{label} </label>

        <input ref={ref} type={type} name={name} id={id} placeholder={placeholder} className={`w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] ${className}`  } {...props} />
        </div>

         // monica mam is the just 
         // so proud of you molo

        
    )
})


export default Input;
