import Image from "next/image";
import * as S from "./elements";

const FeaturedIn = () => {
  return (
    <S.Container>
      <S.Title>Featured In</S.Title>
      <S.BrandsRow>
        <Image src="/images/brand1.png" alt="brand" width={186} height={57} />
        <Image src="/images/brand2.png" alt="brand" width={166} height={53} />
        <Image src="/images/brand3.png" alt="brand" width={52} height={52} />
        <Image src="/images/brand4.png" alt="brand" width={74} height={85} />
      </S.BrandsRow>
    </S.Container>
  );
};

export default FeaturedIn;
