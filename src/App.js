import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(5);
  const [theme, setTheme] = useState('dark');

  const updateProgressBar = (progress) => {
    setProgress(progress)
  }

  const toggleTheme = () => {
      if(theme === 'dark'){
          document.body.classList.remove('dark-theme');
          document.body.classList.add('light-theme');
          setTheme('light');
      }else{
          document.body.classList.remove('light-theme');
          document.body.classList.add('dark-theme');
          setTheme('dark')
      }
  }

  return (
    <>
      <Router>
      <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<News newsCategory="general" updateProgressBar={updateProgressBar} pageSize = {6} />} />
            <Route path="/sports" element={<News newsCategory='sports' updateProgressBar={updateProgressBar} pageSize = {6} />} />
            <Route path="/health" element={<News newsCategory="health" updateProgressBar={updateProgressBar} pageSize = {6} />} />
            <Route path="/business" element={<News newsCategory='business' updateProgressBar={updateProgressBar} pageSize = {6} />} />
            <Route path="/technology" element={<News newsCategory='technology' updateProgressBar={updateProgressBar} pageSize = {6} />} />
            <Route path="/entertainment" element={<News newsCategory='entertainment' updateProgressBar={updateProgressBar} pageSize = {6} />} />
          </Routes>
        <Footer theme={theme} />
      </Router>
    </>
  );
}

export default App;
