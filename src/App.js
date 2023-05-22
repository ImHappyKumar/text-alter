import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

// To handle the scroll restoration. It uses the useLocation hook from react-router-dom to listen to changes in the pathname of the URL. Whenever the pathname changes, the useEffect inside ScrollToTop is triggered
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const title = "Text Alter";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    
    // Auto Dismissing Alert
    setTimeout(() => {
      setAlert((null));
    }, 1500);
  }

  const toggleMode = () => {
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode Enabled", "success");
      // To change title dynamically
      // document.title = "Text Alter - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
    <Router>
      {/* By rendering the ScrollToTop component inside the Router, it ensures that the scroll restoration effect is applied for all route changes. */}
      <ScrollToTop />
      <NavBar title={title} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Routes>
          <Route exact path="/" element={<TextForm heading={title} mode={mode} alert={showAlert}/>}></Route>
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
