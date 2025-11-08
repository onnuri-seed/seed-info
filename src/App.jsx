import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Home from './pages/Home';
import ICareGuide from './pages/ICareGuide';
import Events from './pages/Events';
import SoonmoimContents from './pages/SoonmoimContents';
import FirstMeeting from './pages/FirstMeeting';
import SoonmoimLocation from './pages/SoonmoimLocation';
import AboutSeed from './pages/AboutSeed';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Initialize GA4
ReactGA.initialize('G-H4QLGGKZT1');

// Track page views on route change
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.hash });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icare-guide" element={<ICareGuide />} />
        <Route path="/events" element={<Events />} />
        <Route path="/soonmoim-contents" element={<SoonmoimContents />} />
        <Route path="/first-meeting" element={<FirstMeeting />} />
        <Route path="/soonmoim-location" element={<SoonmoimLocation />} />
        <Route path="/about-seed" element={<AboutSeed />} />
      </Routes>
    </Router>
  );
}

export default App;
