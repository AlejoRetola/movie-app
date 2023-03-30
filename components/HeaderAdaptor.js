import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function HeaderMobile() {
  const [visibility, setVisibility] = useState(false);

  function handleClick() {
    console.log("clicked");
    setVisibility(!visibility);
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerButton = document.getElementById("hamburger-button");

    if (visibility) {
      hamburgerButton.classList.add("text-blue-300");
      hamburgerButton.classList.add("scale-110");
      mobileMenu.classList.remove("-translate-x-96");
      mobileMenu.classList.add("-translate-x-2");
    } else {
      mobileMenu.classList.remove("-translate-x-2");
      mobileMenu.classList.add("-translate-x-96");
      hamburgerButton.classList.remove("text-blue-300");
      hamburgerButton.classList.remove("scale-110");
    }
  }

  return (
    <div className="visible flex flex-col md:invisible">
      <RxHamburgerMenu className="text-2xl text-white transition delay-100 " id="hamburger-button" onClick={handleClick} />
      <div id="mobile-menu" className="absolute z-10 transition delay-100 translate-y-11 -translate-x-96  py-2 pl-2 border-blue-300 border-y-2 border-r-2 bg-gray-900 w-5/12 h-24 ">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/movies">Peliculas</Link>
        </li>
        <li>
          <Link href="/series">Series</Link>
        </li>
      </div>
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="invisible w-8/12 flex flex-row justify-center lg:text-xl 2xl:text-4xl gap-5 md:visible ">
      <li className="hover:scale-110 hover:text-blue-500  transition duration-200">
        <Link href="/">Inicio</Link>
      </li>
      <li className="hover:scale-110 hover:text-blue-500  transition duration-200">
        <Link href="/movies">Peliculas</Link>
      </li>
      <li className="hover:scale-110 hover:text-blue-500  transition duration-200">
        <Link href="/series">Series</Link>
      </li>
    </div>
  );
}

export { HeaderDesktop };

export { HeaderMobile };
