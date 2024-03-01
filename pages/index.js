import Head from "next/head";
import { Home } from "@/components/home/Home";
import ReactGA from "react-ga";

export default function home() {
  ReactGA.initialize("G-2940GH5W9Y");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <Head>
        <title>Saida Murtazali | Full-Stack Developer | Marketer</title>
        <meta name="description" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
