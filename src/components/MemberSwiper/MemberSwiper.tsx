import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MemberCard from "../MemberCard";
import MemberCardProps from "../MemberCard/MemberCardProps";
import { Autoplay } from "swiper";
import React from "react";

interface MemberSwiperProps {
  members: MemberCardProps[];
}

const MemberSwiper: React.FC<MemberSwiperProps> = ({ members }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
      }}
    >
      {members.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <MemberCard
              name={el.name}
              nickname={el.nickname}
              surname={el.surname}
              title={el.title}
              role={el.role}
              picture={el.picture}
              quote={el.quote}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MemberSwiper;
