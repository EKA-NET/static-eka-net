import React from "react";
import MemberCardProps from "./MemberCardProps";

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  nickname,
  surname,
  role,
  picture,
  quote,
}) => {
  const fullName = `${name} ${surname}`;
  const boldNickname = nickname ? (
    <span className="font-semibold">'{nickname}'</span>
  ) : (
    ""
  );
  const quoteElement = quote ? (
    <p className="p-0 text-center mt-4 italic font-light">"{quote}"</p>
  ) : (
    ""
  );

  return (
    <div className="p-4 max-w-sm">
      <header className="mb-4 text-xl text-center">
        {name} {boldNickname} {surname}
      </header>
      <main>
        <img
          src={picture}
          alt={"Picture of " + fullName}
          className="object-cover w-64 h-64 block mx-auto text-center border-2 rounded-lg border-transparent"
        />
        <p className="p-0 text-center mt-4">{role}</p>

        {quoteElement}
      </main>
    </div>
  );
};
export default MemberCard;
