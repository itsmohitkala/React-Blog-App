import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <div className={` bg-red-200 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Button