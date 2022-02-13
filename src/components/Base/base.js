import React, { Children, useEffect, useState } from "react";
import {
  useHistory,
  Link,

} from "react-router-dom";

export default function Base({children}) {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem("token") !== null
    );
    return (
      <div>
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
                        style={{ marginTop: "5px", padding: "2px" }}
                        onClick={() => {
                          localStorage.clear();
                          setIsLoggedIn(false);
                          window.location.reload();
                         history.replace("/");
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
        {children}
      </div>
    );
}
