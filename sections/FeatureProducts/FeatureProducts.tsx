import FeatureCard from "../../components/featureCard/FeatureCard";
import * as S from "./elements";
import { FeatureProductsData } from "../../data/content/FeatureProductsContent";

const data = FeatureProductsData;

const FeatureProducts = () => {
  return (
    <S.Container>
      <S.Title>{data.title}</S.Title>
      <S.CardsWrapper>
        {data.cardData.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            itemImage={item.itemImage}
            buttonCollor={item.buttonCollor}
          />
        ))}
      </S.CardsWrapper>
    </S.Container>
  );
};

export default FeatureProducts;
