import React from "react";
import NavBarLink from "../NavBarLink";

interface NavBarProps {
  logo: string;
}

const NavBar: React.FC<NavBarProps> = ({ logo }) => {
  return (
    <nav className="pt-8 select-none">
      <img
        src={logo}
        alt="EKA.NET logo"
        className="mx-auto flex-col max-w-xs max-h-12 md:max-w-md md:max-h-16"
      />
      <ul className="flex flex-col items-center leading-[4rem] justify-center m-0 mt-8 p-0 sm:leading-3 sm:flex-row md:space-x-10">
        <li className="float-left after:clear-both">
          <NavBarLink
            href="#welcome"
            className="hover:text-red-500 hover:border-red-500"
          >
            Kim jesteśmy
          </NavBarLink>
        </li>
        <li className="float-left after:clear-both">
          <NavBarLink
            href="#about"
            className="hover:text-green-500 hover:border-green-500"
          >
            Nasza misja
          </NavBarLink>
        </li>
        <li className="float-left after:clear-both">
          <NavBarLink
            href="#members"
            className="hover:text-blue-500 hover:border-blue-500"
          >
            Członkowie
          </NavBarLink>
        </li>
        <li className="float-left after:clear-both">
          <NavBarLink
            href="#contact"
            className="hover:text-yellow-500 hover:border-yellow-500"
          >
            Kontakt
          </NavBarLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
