interface NavBarLinkProps {
  href: string;
  className: string;
  children?: any;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      className={`p-3 no-underline text-2xl bg-white border-2 rounded-3xl border-white transition-all ease-in-out delay-75 hover:text-red-500 hover:border-2 hover:rounded-3xl hover:border-red-500 ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default NavBarLink;
