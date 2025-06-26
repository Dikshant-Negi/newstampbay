import React from 'react'

type ButtonProps = {
  text: React.ReactNode
  className?: string
  onClick?: () => void
}

function Button({ text, className = '', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-red flex  items-center rounded-[12px] text-white py-3 hover:cursor-pointer ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
