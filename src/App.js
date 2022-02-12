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
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Study Help
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {!localStorage.getItem("token") ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>
                        Sign up
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/profile"}>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/home"}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/upload"}>
                        Upload File
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{ marginTop: "5px", padding:"2px"}}
                        onClick={() => {
                          localStorage.clear();
                          setIsLoggedIn(false);
                          window.location.reload();
                          <Redirect to="/" />;
                          
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/upload" component={FileUploader} />
        </Switch>
      </div>
  
  );
}

export default App;
