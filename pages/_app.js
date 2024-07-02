import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { initGA, logPageView } from "/analytics";
import ReactGA from "react-ga4";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

ReactGA.initialize("G-2940GH5W9Y");

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view

    // Add additional tracking logic as needed
  }, []);

  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
