import React from "react";
import { useId } from "react";

function Select({label,options=[],className=""},ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} className={`w-full ${className}`} ref={ref}>
{options?.map((option)=>(
  <option key={option} value={option}>
    {option}
  </option>
))}
      </select>
    </div>      
  )
}

export default React.forwardRef(Select)