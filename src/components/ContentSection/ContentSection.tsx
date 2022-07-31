import React from "react";

interface ContentSectionProps {
  children: any;
}

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <section className="relative top-0 bottom-0 text-justify pt-8 text-lg">
      {children}
    </section>
  );
};

export default ContentSection;
