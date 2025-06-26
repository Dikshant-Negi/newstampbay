import React from 'react'
interface types {
    children: string,
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: "button" | "submit" | "reset"
}

function RedButton({children,className,onClick,type}:types) {
  return (
    <button className={`bg-red text-white cursor-pointer ${className}`} onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default RedButton