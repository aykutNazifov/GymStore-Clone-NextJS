import Link from "next/link";
import * as S from "./elements";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.LogoWrapper>gyMStoRee</S.LogoWrapper>
        <S.LinksWrapper>
          <S.LinksCol>
            <S.LinkWrapperTitle>Menu</S.LinkWrapperTitle>

            <Link href="/home">
              <S.LinkWrapper>Home</S.LinkWrapper>
            </Link>
            <Link href="/trainers">
              <S.LinkWrapper>Trainers</S.LinkWrapper>
            </Link>
            <Link href="/services">
              <S.LinkWrapper>Services</S.LinkWrapper>
            </Link>
            <Link href="/picing">
              <S.LinkWrapper>Pricing</S.LinkWrapper>
            </Link>
          </S.LinksCol>
          <S.LinksCol>
            <S.LinkWrapperTitle>Class</S.LinkWrapperTitle>

            <Link href="/individu">
              <S.LinkWrapper>Individu</S.LinkWrapper>
            </Link>
            <Link href="/corporate">
              <S.LinkWrapper>Corporate</S.LinkWrapper>
            </Link>
            <Link href="/monhly">
              <S.LinkWrapper>Monthly</S.LinkWrapper>
            </Link>
          </S.LinksCol>
          <S.LinksCol>
            <S.LinkWrapperTitle>About As</S.LinkWrapperTitle>

            <Link href="/about">
              <S.LinkWrapper>About</S.LinkWrapper>
            </Link>
            <Link href="/contact">
              <S.LinkWrapper>Contact</S.LinkWrapper>
            </Link>
            <Link href="/QnA">
              <S.LinkWrapper>QnA</S.LinkWrapper>
            </Link>
          </S.LinksCol>
        </S.LinksWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.RightWrapperTitle>
          Stay up to date with <br /> our story
        </S.RightWrapperTitle>
        <S.RightWrapperDesc>
          Join and be the first to get the latest news about trend, promotions,
          and much more!
        </S.RightWrapperDesc>
        <S.InputWrapper>
          <S.EmailInput
            type="email"
            placeholder="Enter Your Email address"
          ></S.EmailInput>
          <S.Button>Join Now</S.Button>
        </S.InputWrapper>
        <S.SocialMedaiWrapper>
          <S.SocialMedai>
            <FaFacebookF color="#FFA400" size={20} />
          </S.SocialMedai>
          <S.SocialMedai>
            <FaInstagram color="#FFA400" size={20} />
          </S.SocialMedai>
          <S.SocialMedai>
            <FaTwitter color="#FFA400" size={20} />
          </S.SocialMedai>
        </S.SocialMedaiWrapper>
      </S.RightWrapper>
    </S.Container>
  );
};

export default Footer;
