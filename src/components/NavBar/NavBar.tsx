import React from "react";

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
          <a
            className="p-3 no-underline text-2xl bg-white border-2 rounded-3xl border-white transition-all ease-in-out delay-75 hover:text-red-500 hover:border-2 hover:rounded-3xl hover:border-red-500"
            href="#welcome"
          >
            Kim jesteśmy
          </a>
        </li>
        <li className="float-left after:clear-both">
          <a
            className="p-3 no-underline text-2xl bg-white border-2 rounded-3xl border-white transition-all ease-in-out delay-75 hover:text-green-500 hover:border-2 hover:rounded-3xl hover:border-green-500"
            href="#about"
          >
            Nasza misja
          </a>
        </li>
        <li className="float-left after:clear-both">
          <a
            className="p-3 no-underline text-2xl bg-white border-2 rounded-3xl border-white transition-all ease-in-out delay-75 hover:text-blue-500 hover:border-2 hover:rounded-3xl hover:border-blue-500"
            href="#members"
          >
            Członkowie
          </a>
        </li>
        <li className="float-left after:clear-both">
          <a
            className="p-3 no-underline text-2xl bg-white border-2 rounded-3xl border-white transition-all ease-in-out delay-75 hover:text-yellow-500 hover:border-2 hover:rounded-3xl hover:border-yellow-500"
            href="#contact"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
