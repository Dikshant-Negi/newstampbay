import { data } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";


type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ search, setSearch }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (search.trim()) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [search]);

  return (
    <div
      className="flex w-full bg-[#F5F5F5] justify-center h-[70px] items-center rounded-lg relative"
      ref={wrapperRef}
    >
      <input
        type="text"
        value={search}
        className="h-full px-4 outline-none w-[85%]"
        placeholder="Search here..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="h-[30px]" />
      {showDropdown && (
        <div className="absolute top-[120%] z-[50] bg-gray-200 px-5 w-full py-3 border-gray-200 rounded-lg overflow-y-auto h-[500px] no-scrollbar">
          {data.map(({ img, price, text }: { img: string; price: number; text: string }, index: number) => (
            <div key={index} className="flex items-center gap-2 px-3 py-4 border-b-2 border-red/50 text-sm">
              <img src={img} alt={text} className="w-8 h-8 object-cover rounded" />
              <span>{text}</span>
              <span className="ml-auto font-bold">${price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
