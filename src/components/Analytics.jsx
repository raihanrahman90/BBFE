import ReactGA from 'react-ga4';

const TRACKING_ID = "G-H8CE9WJ31S";

ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) =>{
    ReactGA.send({hitType:"pageview", page});
}