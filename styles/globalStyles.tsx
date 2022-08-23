import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /*  Swiper Styles   */
 
  .swiper-button-prev::after, 
  .swiper-button-next::after {
    color: #FFF6E580;
  }

  .swiper-pagination-bullet-active {
    background-color: #FFA400 !important; 
  }

  .swiper-pagination-bullet {
    background-color: #FFF6E5;
    opacity: 1;
  }

`;
