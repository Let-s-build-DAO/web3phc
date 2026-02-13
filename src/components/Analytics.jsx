import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 with the provided Measurement ID
    // We only want to do this once, but react-ga4 handles multiple init calls gracefully usually.
    // However, best practice is to init once. We can do it outside or check if initialized.
    if (!window.GA_INITIALIZED) {
        ReactGA.initialize("G-CJRSPMHEVX");
        window.GA_INITIALIZED = true;
    }

    // Send page view on route change
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default Analytics;
