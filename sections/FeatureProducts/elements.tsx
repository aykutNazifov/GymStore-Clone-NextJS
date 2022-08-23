import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

export const Title = styled.h1`
  font-size: 55px;
  line-height: 82px;
  color: #111c4e;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
