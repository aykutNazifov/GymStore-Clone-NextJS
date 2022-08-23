import styled from "styled-components";

interface ContainerProps {
  image: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: calc(100vh - 114px);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("images/hero-img.png");

  background: ${({ image }) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 58px;
  color: #ffa400;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.div`
  width: 110px;
  height: 4px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandTitle = styled.h2`
  font-style: italic;
  font-weight: 400;
  font-size: 83px;
  line-height: 104px;
  text-transform: uppercase;

  color: white;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;

  @supports ((text-stroke: 2px white) or (-webkit-text-stroke: 2px white)) {
    & {
      color: transparent;
      -webkit-text-stroke: 2px white;
      text-shadow: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #ffa400;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
  transition: all 0.6s ease;

  &::before {
    background: white;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    z-index: -1;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover::before {
    height: 500%;
  }

  &:hover {
    color: #ffa400;
    z-index: 10;
  }
`;
