import React from 'react'

function Logo({width='100px'}) {
  return (
    <div style={{ width }} className="select-none text-lg font-bold tracking-tight text-[var(--color-brand)]">
      this is a logo
    </div>
  )
}

export default Logo
