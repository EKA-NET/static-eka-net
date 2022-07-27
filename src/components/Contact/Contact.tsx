import React from "react";

interface ContactProps {
    id: string;
    children: any;
}

const Contact: React.FC<ContactProps> = ({id, children }) => {
    return (
    <article id={id} className="mx-auto pb-20 px-4 md:max-w-5xl">
        {children}
    </article>
    );
};

export default Contact;