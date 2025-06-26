import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {
  options: string[];
  heading: string;
  onChange: (stateName:string,data: string) => void; 
  stateName:string
  value:string
};

function Select({ options, heading, onChange ,stateName,value}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "" );
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(stateName,value);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="relative w-full input-box text-black">
      <div
        className="flex items-center justify-between   rounded-md cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          type="text"
          readOnly
          placeholder={heading}
          value={selected}
          className="flex-1 outline-none cursor-pointer bg-transparent"
        />
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className=" absolute top-full left-0 right-0 mt-1 bg-white border-1 rounded-md shadow-lg z-50">
          {options.map((item, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-red/80 hover:text-white cursor-pointer rounded-md "
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
