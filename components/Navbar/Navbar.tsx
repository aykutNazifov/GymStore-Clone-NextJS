import React, { useState } from "react";
import * as S from "./elements";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<boolean>(false);
  const router = useRouter();
  const path = router.asPath;

  const handleSearchClick = () => {
    setSearchInput(!searchInput);
  };

  return (
    <S.Container>
      <S.Logo>gyMStoRee</S.Logo>
      <S.RightRow open={openMenu}>
        <S.Close color="blue" onClick={() => setOpenMenu(false)}>
          X
        </S.Close>
        <S.LinksRow>
          <Link href={"/"}>
            <S.NavLink isActive={path === "/" && true}>Home</S.NavLink>
          </Link>
          <Link href={"/shop"}>
            <S.NavLink isActive={path === "/shop" && true}>Shop</S.NavLink>
          </Link>
          <Link href={"/catalog"}>
            <S.NavLink isActive={path === "/catalog" && true}>
              Catalog
            </S.NavLink>
          </Link>
          <Link href={"/blog"}>
            <S.NavLink isActive={path === "/blog" && true}>Blog</S.NavLink>
          </Link>
        </S.LinksRow>
        <S.IconsRow>
          {searchInput && <S.Input></S.Input>}
          <S.Icon onClick={handleSearchClick}>
            <AiOutlineSearch size={31} />
          </S.Icon>
          <S.Icon>
            <BsBag size={31} />
          </S.Icon>
        </S.IconsRow>
      </S.RightRow>
      <S.MenuIconWrapper>
        <AiOutlineMenu size={25} onClick={() => setOpenMenu(true)} />
      </S.MenuIconWrapper>
    </S.Container>
  );
};

export default Navbar;
