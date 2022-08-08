interface FullWidthContainerProps {
  className?: string;
  children?: any;
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`overflow-x-hidden m-0 p-0 w-screen ${className}`}>
      {children}
    </div>
  );
};

export default FullWidthContainer;
