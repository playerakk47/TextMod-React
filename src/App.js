import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#010c32";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "#e1d6d6";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextMod" about="About Text" mode={mode} togglemode={toggleMode} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<Textform heading="Enter text here to Analyze.." mode={mode} />} /> */}
            <Textform heading="Enter text here to Analyze.." mode={mode} />
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;


