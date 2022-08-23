import Image from "next/image";
import * as S from "./elements";
import { FaFlagUsa, FaBoxOpen } from "react-icons/fa";
import { ImLab } from "react-icons/im";

const AboutProducts = () => {
  return (
    <S.Container>
      <S.BoxL>
        <S.AboutCard>
          <S.LeafWrapper>
            <Image src="/images/leaf.png" alt="leaf" width={90} height={78} />
            <S.IconWrapper>
              <FaFlagUsa size={20} />
            </S.IconWrapper>
          </S.LeafWrapper>
          <S.AboutText>Made in USA</S.AboutText>
        </S.AboutCard>
        <S.AboutCard>
          <S.LeafWrapper>
            <Image src="/images/leaf.png" alt="leaf" width={90} height={78} />
            <S.IconWrapper>
              <FaBoxOpen size={20} />
            </S.IconWrapper>
          </S.LeafWrapper>
          <S.AboutText>Satisfaction Guranteed</S.AboutText>
        </S.AboutCard>
        <S.AboutCard>
          <S.LeafWrapper>
            <Image src="/images/leaf.png" alt="leaf" width={90} height={78} />
            <S.IconWrapper>
              <ImLab size={20} />
            </S.IconWrapper>
          </S.LeafWrapper>
          <S.AboutText>Clinically Effective Doses</S.AboutText>
        </S.AboutCard>
      </S.BoxL>
      <S.BoxR></S.BoxR>
    </S.Container>
  );
};

export default AboutProducts;
