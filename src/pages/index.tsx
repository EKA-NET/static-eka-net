import React from "react";
import ContentHeader from "../components/ContentHeader";
import ContentSection from "../components/ContentSection";
import ContentWrapper from "../components/ContentWrapper";
import MemberSwiper from "../components/MemberSwiper";
import NavBar from "../components/NavBar";
import Images from "../consts/Images";
import Links from "../consts/Links";
import { Members } from "../consts/Members";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <NavBar logo={Images.Logo} />
      <ContentWrapper id="welcome">
        <ContentHeader>O nas</ContentHeader>
        <ContentSection>
          <img
            className="border-2 border-solid border-transparent rounded-lg mb-4 bg-white"
            src={Images.Team1}
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
          <img
            className="border-2 border-solid border-transparent rounded-lg mb-4 bg-white"
            src={Images.Team2}
            alt="EKA.NET team"
          />
          <div>
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
      <ContentWrapper id="itad">
        <ContentHeader>IT Academic Day</ContentHeader>
        <ContentSection>
          <div className="text-center text-2xl">Co?</div>
          <div className="text-center">
            IT Academic Day to ogromne wydarzenie w akademickim świecie IT
            organizowane co roku od 2016 przez koło naukowe EKA.NET. ITAD
            zapewnia kontakt studentów z przyszłymi pracodawcami, prelekcje,
            networking z innymi pasjonatami IT.
          </div>
          <div className="text-center text-2xl pt-2">Kiedy?</div>
          <div className="text-center">
            IT Academic Day odbędzie się 26.11.2022.
          </div>
          <div className="text-center text-2xl pt-2">Gdzie?</div>
          <div className="text-center">
            IT Academic Day będzie miał stacjonarnie w sali 127 w budynku C-13
            na kampusie Politechniki Wrocławskiej.
          </div>
        </ContentSection>
      </ContentWrapper>
      <ContentWrapper id="members">
        <ContentHeader>Członkowie</ContentHeader>
        <ContentSection>
          <MemberSwiper members={Members} />
        </ContentSection>
      </ContentWrapper>
      <ContentWrapper id="contact">
        <ContentHeader>Kontakt</ContentHeader>
        <ContentSection>
          <div className="text-center">
            Jeśli masz ochotę zostać członkiem naszego Koła lub masz
            interesującą ofertę współpracy to zapraszamy do kontaktu mailowego,
            bądź przez nasze kanały social media!
          </div>

          <ul className="flex flex-row space-x-14 items-center pt-8 leading-[4rem] justify-center m-0 mt-8 p-0 sm:leading-3 md:space-x-10">
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
      </ContentWrapper>
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
