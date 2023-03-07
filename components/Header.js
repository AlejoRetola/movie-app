import placeholder from "../public/placeholder.png";
import Image from "next/image";
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { searchByName } from "./../services/fetching";
import { useState } from "react";

export default function Headers() {
  const [searchValue, setSearchValue] = useState("blabal");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex gap-3 p-4">
      <Link href="/" className="w-0 xs:w-1/12 flex items-center">
        <Image src={placeholder} alt="logo" className="bg-white object-scale-down px-1 " />
      </Link>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/movies">Peliculas</Link>
        </li>
        <li>
          <Link href="/series">Series</Link>
        </li>
        <li className="rounded  flex flex-row gap-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-0 focus:ring-blue-600 focus:w-36 focus:ring-1 w-28 pl-1 text-sm duration-200 ease-out"
            onChange={() => handleChange(event)}
          ></input>
          <Link
            href={{
              pathname: "/search",
              query: { name: searchValue },
            }}
          >
            <HiMagnifyingGlass className="text-blue-600 text-xl cursor-pointer" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
