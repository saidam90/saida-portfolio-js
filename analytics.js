import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-2940GH5W9Y");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
