import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect, useHistory, Link } from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Profile from "./components/Profile/profile";
import Home from "./components/Home/home";
import FileUploader from "./components/Upload/upload";

function App() {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(
      (localStorage.getItem("token") !== null)
    );
    //  if (localStorage.getItem("token") !== null) {
    //    isLoggedIn = true;
    //  }
    //  useEffect(() => {
       
    //  }, [isLoggedIn]);
  return (
    
      <div className="App">
        
      </div>
  
  );
}

export default App;
