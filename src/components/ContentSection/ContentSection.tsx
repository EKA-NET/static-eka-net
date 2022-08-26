import React from "react";

interface ContentSectionProps {
  children: any;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
}) => {
  return (
    <section
      className={`relative top-0 bottom-0 text-justify pt-8 text-lg ${className}`}
    >
      {children}
    </section>
  );
};

export default ContentSection;
