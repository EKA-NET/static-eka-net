import * as React from "react";
import ContentHeader from "../components/ContentHeader";
import ContentSection from "../components/ContentSection";
import ContentWrapper from "../components/ContentWrapper";
import MemberSwiper from "../components/MemberSwiper";
import NavBar from "../components/NavBar";
import Images from "../consts/Images";
import Links from "../consts/Links";
import { Members } from "../consts/Members";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Link } from "gatsby";

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
        <ContentSection>
          <div className="">
            Nasza społeczność zajmuje się organizacją różnego typu event'ów
            związanych z IT. Jedną z naszych kluczowych inicjatyw jest coroczna
            konferencja studencka IT Academic Day, czyli całodniowy blok
            prelekcji technicznych i rozwojowych, firmy partnerskie, zaproszeni
            goście specjalni (np. przedstawiciele Microsoft), ponad 200
            uczestników, świetna zabawa, wymiana doświadczeń i nawiązywanie
            nowych kontaktów. Ponadto orgaznizujemy akademie programowania dla
            studentów, maratony programowania, spotkania z doświadczonymi
            specjalistami z branży. W wolnych chwilach zdarza nam się również
            uczestniczyć w konferencjach programistycznych (jesteśmy partnerami
            m. in. WROC# oraz 4Developers).
          </div>
        </ContentSection>
      </ContentWrapper>
      <ContentWrapper id="members">
        <ContentHeader>Członkowie</ContentHeader>
        <ContentSection>
          Aktualnie nasze koło posiada {Members.length} aktywnych członków.
          <MemberSwiper members={Members} />
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

          <ul className="flex flex-row space-x-5 items-center pt-8 leading-[4rem] justify-center m-0 mt-8 p-0 sm:leading-3 md:space-x-10">
            <li className="float-left after:clear-both">
              <a href={Links.Facebook}>
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.FacebookIcon}
                />
              </a>
            </li>
            <li className="float-left after:clear-both">
              <a href={Links.Mail}>
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.EnvelopeIcon}
                />
              </a>
            </li>
            <li className=" float-left after:clear-both">
              <a href={Links.Twitter}>
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.TwitterIcon}
                />
              </a>
            </li>
            <li className="float-left after:clear-both">
              <a href={Links.LinkedIn}>
                <img
                  className="w-8 inline-block text-black fill-black hover:opacity-50"
                  src={Images.LinkedinIcon}
                />
              </a>
            </li>
          </ul>
        </ContentSection>
      </Contact>
      <Footer>
        <span className="text-center block text-s">Designed with ☕ by:</span>
        <div className="text-center block text-s">
          <u>
            <a href="https://senti.dev/">Wojciech Warwas</a>
          </u>{" "}
          & Piotr Szczypior
        </div>
        <span className="text-center block text-s">© Copyright 2022</span>
      </Footer>
    </>
  );
};

export default IndexPage;
