import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
      <input
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />
      {showPassword ? (
        <FaRegEye
          size={22}
          className="text-blue-600 cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-grey cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  )
}

export default PasswordInput
