import * as React from "react";
import ContentHeader from "../components/ContentHeader";
import ContentSection from "../components/ContentSection";
import ContentWrapper from "../components/ContentWrapper";
import MemberSwiper from "../components/MemberSwiper";
import NavBar from "../components/NavBar";
import Images from "../consts/Images";
import { Members } from "../consts/Members";

const IndexPage = () => {
  return (
    <>
      <NavBar logo={Images.Logo} />
      <ContentWrapper id="welcome">
        <ContentHeader>Kim jesteśmy?</ContentHeader>
        <ContentSection>
          <img
            className="border-2 border-solid border-transparent rounded-3xl mb-4 bg-white"
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
          Aktualnie nasze koło posiada {Members.length} aktywnych członków.
          <MemberSwiper members={Members} />
        </ContentSection>
      </ContentWrapper>
      <ContentWrapper id="contact">
        <ContentHeader>Kontakt</ContentHeader>
        <ContentSection>aaa</ContentSection>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
