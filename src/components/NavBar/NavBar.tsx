import React from "react";

interface NavBarProps {
  logo: string;
}

const NavBar: React.FC<NavBarProps> = ({ logo }) => {
  const sections = [
    { id: "welcome", name: "Kim jesteśmy" },
    { id: "about", name: "Nasza misja" },
    { id: "members", name: "Członkowie" },
    { id: "contact", name: "Kontakt" },
  ]

  return (
    <nav className="flex flex-row justify-between py-8 px-4 select-none">
      <a href='/'>
        <img
          src={logo}
          alt="EKA.NET logo"
          className="ml-4 max-w-xs max-h-8 md:max-w-md md:max-h-8"
        />
      </a>
      <ul className="flex flex-row float-right mr-4 leading-[4rem] sm:leading-3 sm:flex-row md:space-x-8">
        {sections.map((section) => (
          <li className="float-left after:clear-both">
            <a
              className="p-3 no-underline font-bold text-2xl"
              href={section.id}
            >
              {section.name}
            </a>
          </li>
        ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
