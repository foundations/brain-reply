import React from "react";

const Button = (props: any) => {
  const { children, className, ...rest } = props
  return (
    <button
      {...rest}
      className={`bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all ${className}`}
    >
      <>
        {children}
      </>
    </button>
  )
}
export default Button