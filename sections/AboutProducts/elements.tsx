import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxL = styled.div`
  clip-path: polygon(94% 0, 100% 50%, 94% 100%, 0% 100%, 0 47%, 0% 0%);
  width: 80%;
  height: 100%;
  background-color: #fff4da;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const BoxR = styled.div`
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);
  width: 15%;
  height: 100%;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeafWrapper = styled.div`
  width: 90px;
  height: 78px;
  position: relative;

  @media (max-width: 768px) {
    width: 60px;
    height: 48px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const AboutText = styled.p`
  font-weight: 700;
  font-size: 19px;
  line-height: 22px;
  color: #111c4e;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;
