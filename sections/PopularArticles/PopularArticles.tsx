import Image from "next/image";
import Link from "next/link";
import * as S from "./elements";

const PopularArticles = () => {
  return (
    <S.Container>
      <S.Title>Popular Articles</S.Title>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.LeftWrapperTop>
            <Image
              src="/images/articles1.png"
              alt="articles"
              width={755}
              height={452}
              objectFit="cover"
            />
            <S.WrapperText>
              <S.Date>22 May 2022</S.Date>
              <S.WrapperTitle fontSize="39px">
                Best Summer Outfit <br /> Style in this Country
              </S.WrapperTitle>
              <Link href="/id1">
                <S.ReadMoreLink>Read More</S.ReadMoreLink>
              </Link>
            </S.WrapperText>
            <S.NewWrapper>New</S.NewWrapper>
          </S.LeftWrapperTop>
          <S.LeftWrapperBot>
            <S.BotBox>
              <Image
                src="/images/articles2.png"
                alt="articles"
                width={357}
                height={240}
                objectFit="cover"
              />
              <S.WrapperText>
                <Link href="/id2">
                  <S.ReadMoreLink>Read More</S.ReadMoreLink>
                </Link>
              </S.WrapperText>
            </S.BotBox>
            <S.BotBox>
              <Image
                src="/images/articles3.png"
                alt="articles"
                width={357}
                height={240}
                objectFit="cover"
              />
              <S.WrapperText>
                <Link href="/id3">
                  <S.ReadMoreLink>Read More</S.ReadMoreLink>
                </Link>
              </S.WrapperText>
            </S.BotBox>
          </S.LeftWrapperBot>
        </S.LeftWrapper>
        <S.RightWrapper>
          <Image
            src="/images/articles4.png"
            alt="articles"
            width={347}
            height={713}
            objectFit="cover"
          />
          <S.WrapperText>
            <S.Date>22 May 2022</S.Date>
            <S.WrapperTitle fontSize="25px">
              Best Summer Outfit <br /> Style in this Country
            </S.WrapperTitle>
            <Link href="/id4">
              <S.ReadMoreLink>Read More</S.ReadMoreLink>
            </Link>
          </S.WrapperText>
          <S.NewWrapper>New</S.NewWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default PopularArticles;
