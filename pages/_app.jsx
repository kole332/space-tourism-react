import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import "../styles/fonts.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const pageItems = [
    ["home", "/"],
    ["destination", "/destination"],
    ["crew", "/crew"],
    ["technology", "/technology"],
  ];

  return (
    <Layout nav={pageItems}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
