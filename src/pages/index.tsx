import * as React from "react";
import ContentHeader from "../components/ContentHeader";
import ContentSection from "../components/ContentSection";
import ContentWrapper from "../components/ContentWrapper";
import MemberCardProps from "../components/MemberCard/MemberCardProps";
import MemberSwiper from "../components/MemberSwiper";
import NavBar from "../components/NavBar";
import Images from "../images/Images";

import Contact from '../components/Contact';

const IndexPage = () => {
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
      name: "Piotr",
      surname: "Szczypior",
      role: "Członek",
      picture: Images.Piotrek,
    },
  ];

  return (
    <>
      <NavBar logo={Images.Logo} />
      <ContentWrapper id="welcome">
        <ContentHeader>Kim jesteśmy?</ContentHeader>
        <ContentSection>
          <img
            className="border-2 border-solid rounded-3xl mb-4 bg-white"
            src={Images.Team}
            alt="EKA.NET team"
          />
          EKA.NET to Koło Naukowe Wydziału Informatyki i Telekomunikacji
          Politechniki Wrocławskiej zrzeszające pasjonatów i miłośników
          technologii Microsoft'owych. Nasze działania polegają na popularyzacji
          wiedzy i umiejętności dotyczących platformy .NET, chmury Azure oraz
          sztucznej inteligencji. Wspieramy osoby rozpoczynające dopiero swoją
          przygodę, jak i bardziej doświadczonych kolegów i koleżanik poprzez
          oferowanie licznych warsztatach, projektach, czy konferencjach.
        </ContentSection>
      </ContentWrapper>
      <ContentWrapper id="about">
        <ContentHeader>Nasza misja</ContentHeader>
        <ContentSection>:D</ContentSection>
      </ContentWrapper>
      <ContentWrapper id="members">
        <ContentHeader>Członkowie</ContentHeader>
        <ContentSection>
          <MemberSwiper members={members} />
        </ContentSection>
      </ContentWrapper>
      <Contact id="contact">
        <ContentHeader>Kontakt</ContentHeader>
        <ContentSection>
          <div className="text-center text">
            Jeśli masz ochotę zostać członkiem naszego Koła lub masz
            interesującą ofertę współpracy to zapraszamy do kontaktu mailowego,
            bądź przez nasze kanały social media!
          </div>

          <ul className="flex flex-col items-center leading-[4rem] justify-center m-0 mt-8 p-0 sm:leading-3 sm:flex-row md:space-x-10">
            <li className="float-left after:clear-both">
              <a href="https://www.facebook.com/ekadotnet/">
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.FacebookIcon}
                />
              </a>
            </li>
            <li className="float-left after:clear-both">
              <a href="">
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.envelopeIcon}
                />
              </a>
            </li>
            <li className=" float-left after:clear-both">
              <a href="https://twitter.com/EkaDotNet">
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.twitterIcon}
                />
              </a>
            </li>
            <li className="float-left after:clear-both">
              <a href="https://www.linkedin.com/company/ekadotnet/mycompany/">
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.linkedinIcon}
                />
              </a>
            </li>
          </ul>
        </ContentSection>
      </Contact>
    </>
  );
};

export default IndexPage;
