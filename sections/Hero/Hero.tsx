import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import * as S from "./elements";
import data from "../../data/content/HeroContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <S.Container image={item.image}>
            <S.Title>{item.title}</S.Title>
            <S.BrandRow>
              <S.Line /> <S.BrandTitle>{item.brand}</S.BrandTitle>
              <S.Line />
            </S.BrandRow>
            <S.Button>Buy Now &gt;</S.Button>
          </S.Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
