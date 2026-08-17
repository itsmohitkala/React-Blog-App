import React from "react";
import { useId } from "react";

function Select({label,options=[],className=""},ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id} className="mb-1 block text-sm font-medium text-[var(--color-ink)]">{label}</label>}
      <select id={id} className={`w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] ${className}`} ref={ref}>
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