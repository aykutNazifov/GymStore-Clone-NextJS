import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff6e5;
  color: #2b2d38;
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;

export const RightRow = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 65px;
  transition: 0.3s top ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #000;
    color: #fff;
    position: absolute;
    top: ${({ open }) => (open ? "0" : "-120vh")};
    right: 0;
    z-index: 5;
    padding-top: 60px;
    text-align: center;
  }
`;

export const LinksRow = styled.div`
  display: flex;
  gap: 45px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IconsRow = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export const NavLink = styled.a<{ isActive: boolean }>`
  font-size: 20px;
  color: ${({ isActive }) => (isActive ? "#F36100" : "#2b2d38")};
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 40px;
    height: 4px;
    background-color: #f36100;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    display: ${({ isActive }) => (isActive ? "block" : "none")};
  }

  @media (max-width: 768px) {
    color: #fff;
    transform: translateX(0%);
    left: 0;
    font-size: 26px;
  }
`;

export const Icon = styled.div`
  width: 31px;
  height: 31px;
  cursor: pointer;
`;

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  font-weight: 700;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 10px;
  border: 1px solid #ffa400;
  outline: none;
  padding: 0px 10px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;
