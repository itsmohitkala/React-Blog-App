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
    <button type={type} className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
