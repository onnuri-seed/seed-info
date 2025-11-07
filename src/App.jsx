import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ICareGuide from './pages/ICareGuide';
import Events from './pages/Events';
import SoonmoimContents from './pages/SoonmoimContents';
import FirstMeeting from './pages/FirstMeeting';
import SoonmoimLocation from './pages/SoonmoimLocation';
import AboutSeed from './pages/AboutSeed';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
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
