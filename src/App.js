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

  const updateProgressBar = (progress) => {
    setProgress(progress)
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
        <Navbar />
          <Routes>
            <Route path="/" element={<News newsCategory="general" updateProgressBar={updateProgressBar} />} />
            <Route path="/sports" element={<News newsCategory='sports' updateProgressBar={updateProgressBar} />} />
            <Route path="/health" element={<News newsCategory="health" updateProgressBar={updateProgressBar} />} />
            <Route path="/business" element={<News newsCategory='business' updateProgressBar={updateProgressBar} />} />
            <Route path="/technology" element={<News newsCategory='technology' updateProgressBar={updateProgressBar} />} />
            <Route path="/entertainment" element={<News newsCategory='entertainment' updateProgressBar={updateProgressBar} />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
