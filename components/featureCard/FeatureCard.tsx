import Image, { ImageProps } from "next/image";
import * as S from "./elements";

interface IFeatureCard {
  title: string;
  description: string;
  image: ImageProps;
  itemImage: ImageProps;
  buttonCollor: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({
  title,
  description,
  image,
  itemImage,
  buttonCollor,
}) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <Image {...image} />
        <S.ItemImage>
          <Image {...itemImage} />
        </S.ItemImage>
      </S.TopWrapper>
      <S.BotWrapper>
        <S.Title>{title}</S.Title>
        <S.Button buttonColor={buttonCollor}>BUY NOW</S.Button>
        <S.Description>{description}</S.Description>
      </S.BotWrapper>
    </S.Container>
  );
};

export default FeatureCard;
