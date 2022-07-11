import React from "react";

interface ContentHeader {
  children: any;
}

const ContentHeader: React.FC<ContentHeader> = ({ children }) => {
  return <header className="text-4xl text-center">{children}</header>;
};

export default ContentHeader;
