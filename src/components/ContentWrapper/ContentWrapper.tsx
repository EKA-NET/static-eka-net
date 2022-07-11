import React from "react";

interface ContentWrapperProps {
  id: any;
  children?: any;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ id, children }) => {
  return (
    <article id={id} className="mx-auto min-h-screen pt-8 px-4 md:max-w-5xl">
      {children}
    </article>
  );
};

export default ContentWrapper;
