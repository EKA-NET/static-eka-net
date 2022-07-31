import React from "react";

interface ContentWrapperProps {
  id: any;
  children?: any;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <article
      id={id}
      className={`mx-auto min-h-fit pb-8 pt-8 px-4 md:max-w-5xl ${className}`}
    >
      {children}
    </article>
  );
};

export default ContentWrapper;
