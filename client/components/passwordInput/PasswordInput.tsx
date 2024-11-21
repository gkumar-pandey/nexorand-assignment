import React, { useState } from "react";
import { Input } from "../ui/input";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ field }: { field: any }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(pre => !pre);
  };
  return (
    <div className="flex flex-row border justify-between rounded-md items-center pr-2 overflow-hidden">
      <input
        className="w-full px-3 h-8 focus:outline-none"
        placeholder="Password"
        required={true}
        type={showPassword ? "text" : "password"}
        {...field}
      />
      <span className="text-xl cursor-pointer " onClick={handleShowPassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
};

export default PasswordInput;
