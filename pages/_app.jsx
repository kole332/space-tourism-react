import React from "react";
import Layout from "../components/Layout";

import "../styles/fonts.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const pageItems = [
    ["Home", "/"],
    ["Destination", "/destination"],
    ["Crew", "/crew"],
    ["Technology", "/technology"],
  ];

  return (
    <Layout nav={pageItems}>
      <Component {...pageProps} />;
    </Layout>
  );
}
