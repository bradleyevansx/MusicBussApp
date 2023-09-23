import React, { useState } from "react";

type inputType = "Username" | "Password";

interface Props {
  type: inputType;
  onChange: (newValue: string) => void;
}

const LoginInput = ({ type, onChange }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <div
        className={`${
          isVisible || inputValue !== "" ? "slide-up" : "slide-down"
        }`}
      >
        <label className={`text-zinc-200 z-10 mb-2`}>{type}</label>
      </div>
      <input
        type="text"
        required
        placeholder={isVisible ? "" : type}
        onFocus={toggleVisibility}
        onBlur={toggleVisibility}
        onChange={handleInputChange}
        value={inputValue}
        className="z-10 relative mt-1 mb-3 bg-zinc-700 appearance-none rounded block w-full px-3 py-2 border border-zinc-500 placeholder-zinc-300 text-zinc-50 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 focus:z-10 text-xl"
      />
    </>
  );
};

export default LoginInput;
