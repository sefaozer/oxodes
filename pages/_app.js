import OxodesHead from "@/src/layout/OxodesHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <OxodesHead />
      {loading && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}
