import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1100);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#102A43';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextTune - Dark Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextTune';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextTune" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* /about --> Component About */}
          {/* <Route path="/about" element={<About mode={mode} />} /> */}

          {/* / --> Component TextForm */}
          {/* <Route */}
            {/* path="/"
            element= */}
            {<TextForm showAlert={showAlert} heading="Try TextTune" mode={mode} />}
          {/* /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </> 
  );
}

export default App;