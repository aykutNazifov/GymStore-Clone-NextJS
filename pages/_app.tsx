import type { AppProps } from "next/app";
import AnoncmentBar from "../components/anouncmentBar/AnoncmentBar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AnoncmentBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
