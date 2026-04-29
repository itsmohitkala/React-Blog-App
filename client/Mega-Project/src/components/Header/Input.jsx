import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type='text',
    placeholder='',
    className='',
    ...props
},ref){
const id = useId()
return (
   <div className= {`w-full ${className}`}>
    {label && 
    <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor={id}>
        {label}
    </label>}
    <input type={type} />
   </div>
)
})

export default Input