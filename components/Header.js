import placeholder from "../public/placeholder.png";
import Image from "next/image";
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { searchByName } from "./../services/fetching";
import { useState } from "react";
import { HeaderDesktop, HeaderMobile } from "./HeaderAdaptor";

export default function Headers() {
  const [searchValue, setSearchValue] = useState("blabal");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full mx-auto flex items-center py-4 md:py-2 ">
      <Link href="/" className="hidden w-2/12 md:p-2 xs:visible xs:flex items-center">
        <Image src={placeholder} alt="logo" className="bg-white object-scale-down px-1 " />
      </Link>
      <ul className="flex w-full px-2 h-6 md:h-full justify-between">
        <HeaderMobile />
        <HeaderDesktop />
        <li className="rounded md:w-2/12 flex flex-row md:justify-end gap-2 ">
          <input
            type="text"
            placeholder="Search"
            className="outline-0  focus:ring-blue-600 focus:w-36 focus:ring-1 w-28 pl-1 text-sm duration-200 ease-out 2xl:text-3xl 2xl:w-52 2xl:focus:w-60"
            onChange={() => handleChange(event)}
          ></input>
          <Link
            href={{
              pathname: "/search",
              query: { name: searchValue },
            }}
          >
            <HiMagnifyingGlass className="text-blue-600 text-xl cursor-pointer 2xl:text-3xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
