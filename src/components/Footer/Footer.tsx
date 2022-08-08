import React from "react";

interface FooterProps {
  children?: any;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <article className="mx-auto pb-8 md:max-w-5xl">{children}</article>;
};

export default Footer;
