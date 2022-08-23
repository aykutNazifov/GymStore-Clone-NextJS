import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  border-radius: 75px 75px 0px 0px;
  background-color: #000;

  color: #fff;
  padding: 120px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
    gap: 20px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const RightWrapperTitle = styled.h4`
  font-weight: 700;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const RightWrapperDesc = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid #ffa400;
  height: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  border: none;
  outline: none;
  color: #fff;

  &::placeholder {
    color: #ffa400;
    font-weight: 400px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 50px;
  background-color: #ffa400;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 300ms background-color ease-in;

  &:hover {
    background-color: #f4c161;
  }
`;

export const SocialMedaiWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  align-self: center;
`;

export const SocialMedai = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ffa400;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 60px;
`;

export const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const LinkWrapper = styled.a`
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: color 300ms ease-in;

  &:hover {
    color: #ffa400;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LinkWrapperTitle = styled.p`
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
