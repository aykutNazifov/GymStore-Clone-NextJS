import { ImageProps } from "next/image";

interface ICardData {
  title: string;
  description: string;
  image: ImageProps;
  itemImage: ImageProps;
  buttonCollor: string;
}

interface IFeatureProducts {
  title: string;
  cardData: ICardData[];
}

export const FeatureProductsData: IFeatureProducts = {
  title: "Feature Products",
  cardData: [
    {
      title: "Carnitine MTX",
      description:
        "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
      image: {
        src: "/images/feature1.jpg",
        alt: "feature",
        width: 230,
        height: 300,
      },
      itemImage: {
        src: "/images/feature1_1.jpg",
        alt: "feature",
        width: 120,
        height: 180,
      },
      buttonCollor: "#111C4E",
    },
    {
      title: "Jaggarnaut",
      description:
        "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
      image: {
        src: "/images/feature2.png",
        alt: "feature",
        width: 330,
        height: 300,
      },
      itemImage: {
        src: "/images/feature2_2.png",
        alt: "feature",
        width: 120,
        height: 180,
      },
      buttonCollor: "#FFA400",
    },
    {
      title: "L-citrulline",
      description:
        "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
      image: {
        src: "/images/feature3.png",
        alt: "feature",
        width: 230,
        height: 300,
      },
      itemImage: {
        src: "/images/feature3_3.png",
        alt: "feature",
        width: 120,
        height: 180,
      },
      buttonCollor: "#111C4E",
    },
  ],
};
