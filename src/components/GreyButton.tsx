import React from 'react'
type ButtonProps = {
  text: React.ReactNode
  className?: string
  onClick?: () => void
}

function GreyButton({ text, className = '', onClick }: ButtonProps) {

  return (
    <button onClick={onClick}
    className={` hover:bg-red hover:text-white hover:cursor-pointer px-2 py-2 rounded-[15px]  ${className}`}>{text}</button>
  )
}

export default GreyButton
