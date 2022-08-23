import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 160px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 55px;
  line-height: 82px;
  color: #111c4e;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const LeftWrapperTop = styled.div`
  max-width: 755px;
  width: 100%;

  position: relative;
`;

export const WrapperText = styled.div`
  position: absolute;
  left: 22px;
  bottom: 16px;
  color: #fff;
`;

export const Date = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const WrapperTitle = styled.h3<{ fontSize: string }>`
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 46px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

export const NewWrapper = styled.div`
  width: 66px;
  height: 23px;
  position: absolute;
  bottom: 16px;
  right: 22px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #000;
  background-color: #ffa12d;
  border-radius: 15px;
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const LeftWrapperBot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BotBox = styled.div`
  max-width: 357px;
  width: 100%;

  position: relative;
`;

export const RightWrapper = styled.div`
  max-width: 350px;
  width: 100%;

  position: relative;
`;
