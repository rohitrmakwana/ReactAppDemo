import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const toggleModel = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'light'

    }
  }

  return (

    <>
      {/* <Navbar title="TextUtils" aboutText="aboutTextUtils"></Navbar> */}
      < Navbar title="TextUtils1" mode={mode} toggleModel={toggleModel} />
      <div className="container my-3">
        <TextForm heading="Enter The text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
