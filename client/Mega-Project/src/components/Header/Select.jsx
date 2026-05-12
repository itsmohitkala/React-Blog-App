import React from "react";
import { useId } from "react";

function Select({ options = [], value, className, ...props,label },ref) {
  const id =useId();
  return (
    <div>
      {label && <label htmlFor={id}>
        {label}
        </label>}

        <select 
        className={`w-full ${className}`}
        id={id}
        value={value}
        {...props}
        >
            {options?.map((option)=>(
                <option value={option.value} key={option.value}> {option.label} </option>
            ))} 
        </select>
    </div>
  );
}

export default React.forwardRef(Select);
