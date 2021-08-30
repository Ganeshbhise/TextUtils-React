import Navbar from './components/Navbar';
import About from './components/About';//temporariry closed
import Textform from './components/Textform';//temporarily closed
import React, { useState } from 'react'//imrs to import state from raect
import Alert from './components/Alert';
//press npm install react-router-dom to instal package
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";//import router package from reactrouter.com


function App() {
  const [mode, setMode] = useState('light');
  
  const[alert, setAlert] = useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },2000);

  }

  const [change, setChange] = useState("Enable Dark Mode")
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';//#042743
      setChange("Enable Light Mode")
      showAlert("dark Mode has Been Enabled","success");
      // document.title='TextUtils-Dark Mode';//to change the title name dynamically when condition gets applied
      // // IMP------------------->>>>>>>>>>
      // below code is used to change title repeatedly(title chamkana)
      // setInterval(() => {
      //   document.title ='TextUtils-best website';
      // }, 2000);
      // setInterval(() => {
      //   document.title ='TextUtils-must visit';
      // }, 1500);
      // //--------------------------_>>>>>>>>
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setChange("Enable Dark Mode")
      showAlert("light Mode hs Been Enabled","success")
      // document.title='TextUtils-Light Mode';
    }
  }
  const toggleMode1 = ()=>{
    if(mode === 'light'){
      setMode('success');
      document.body.style.backgroundColor='greenyellow';//#042743
      // setChange("Enable Light Mode")
      showAlert("green Mode has Been Enabled","success");
      // document.title='TextUtils-Green Mode';
    }
    else if(mode === 'success'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // setChange("Enable green Mode")
      showAlert("light Mode hs Been Enabled","success")
      // document.title='TextUtils-Light Mode';
    }
  }
   return (
   <>
   {/* we here take swith from documentation of router and then put it into the ROuter tage */}
  <Router>
  <Navbar title="TextUtils" mode={mode} change={change} toggleMode={toggleMode} toggleMode1={toggleMode1} />
    {/* temporarily closed */}
    
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route path="/">
          {/* use exact before path to exactly identify the source */}
            <Textform showAlert={showAlert} heading="Try TextUtils- Character counter,word counter ,justify content" mode={mode}/>
        </Route>
  </Switch>
  </div>
  </Router>

    {/* <div className="container my-3">
    <About/>
    </div> */}
   </>
  );
}

export default App;
