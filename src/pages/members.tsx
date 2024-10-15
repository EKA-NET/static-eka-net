import ContentHeader from "../components/ContentHeader";
import ContentSection from "../components/ContentSection";
import ContentWrapper from "../components/ContentWrapper";
import { Layout } from "../components/Layout";
import MemberCard from "../components/MemberCard";
import MemberCardProps from "../components/MemberCard/MemberCardProps";
import MemberSwiper from "../components/MemberSwiper";
import Images from "../images/Images";

export const Members = () => {
  const chairman: MemberCardProps = {
    name: "Michał",
    surname: "Puchyr",
    role: "Prezes",
    picture: Images.Prezes,
    quote: "I use Debian btw",
  };

  const members: MemberCardProps[] = [
    //{
    //  name: "",
    //  nickname: "",
    //  surname: "",
    //  role: "",
    //  picture: "",
    //  quote: "",
    //},
    {
      name: "Wojciech",
      nickname: "Senti",
      surname: "Warwas",
      role: "Członek",
      picture: Images.Senti,
      quote: "Lets goo",
    },
    {
      name: "Filip",
      surname: "Kwiek",
      role: "Członek",
    },
    {
      name: "Michał",
      surname: "Szymczak",
      role: "Członek",
    },
    {
      name: "Jakub",
      surname: "Wieśniak",
      role: "Członek",
    },
    {
      name: "Krzysztof",
      surname: "Kostanecki",
      role: "Członek",
    },
    {
      name: "Jakub",
      surname: "Karwala",
      role: "Członek",
    },
    {
      name: "Piotr",
      surname: "Szczypior",
      role: "Członek",
      picture: Images.Piotrek,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 font-bold">Poznaj nasz skład!</h1>
        <MemberCard {...chairman} />
        <article className="mx-auto min-h-screen pt-8 px-4 md:max-w-5xl">
          <ContentHeader>Członkowie</ContentHeader>
          <MemberSwiper members={members} />
        </article>
      </div>
    </Layout>
  );
}

export default Members;