import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, useMatch } from "react-router-dom";
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

// To handle the scroll restoration. It uses the useLocation hook from react-router-dom to listen to changes in the pathname of the URL. Whenever the pathname changes, the useEffect inside ScrollToTop is triggered
function ScrollToTop() {
  const { pathname, key } = useLocation();
  const navigate = useNavigate();
  const match = useMatch(pathname);

  useEffect(() => {
    if (!match) {
      // If the current route doesn't match the location pathname,
      // navigate to the current route to trigger scroll restoration.
      navigate(pathname);
    } else {
      // Quick scroll to top without smooth scrolling
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, key, match, navigate]);

  return null;
}

function App() {
  const title = "Text Alter";
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Router>
      {/* By rendering the ScrollToTop component inside the Router, it ensures that the scroll restoration effect is applied for all route changes. */}
      <ScrollToTop />
      <NavBar title={title} mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<TextForm heading={title} mode={mode}/>}></Route>
          <Route exact path="/about" element={<About title={title} mode={mode}/>}></Route>
          <Route exact path="/features" element={<Features title={title} mode={mode}/>}></Route>
          <Route exact path="/terms" element={<Terms title={title} mode={mode}/>}></Route>
          <Route exact path="/privacy" element={<Privacy title={title} mode={mode}/>}></Route>
        </Routes>
      </div>
      <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;