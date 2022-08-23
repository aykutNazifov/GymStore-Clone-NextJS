import styled from "styled-components";

export const Container = styled.div`
  width: 33%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ItemImage = styled.div`
  margin-top: -90px;
`;

export const BotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Button = styled.button<{ buttonColor: string }>`
  border-radius: 4px;
  background: ${({ buttonColor }) => buttonColor};
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
    color: ${({ buttonColor }) => buttonColor};
    z-index: 10;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #000;
  margin-top: 5px;
  width: 300px;
  text-align: center;
`;
