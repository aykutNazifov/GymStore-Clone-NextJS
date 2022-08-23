import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
`;

export const BrandsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 35px 0;
  box-shadow: 4px 2px 52px -23px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
