import ReactGA from "react-ga4";

const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initGA = () => {
    if (GA_ID) {
        ReactGA.initialize(GA_ID);
    }
};

export const trackPageView = (path) => {
    if (GA_ID) {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};
