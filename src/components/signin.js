import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const persistLogin = (token, username, email, role, id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    localStorage.setItem("id", id);
    
  };
  const login = async (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
    };
    const url = "https://study-help.herokuapp.com/api/auth/signin";
    try{
      const response = await axios
      .post(url, data);
       persistLogin(
         response.data.token,
         response.data.user.uname,
         response.data.user.email,
         response.data.user.role,
         response.data.user._id
       );

       console.log(response);
       const msg = "Logged in successfully";
       toast.success(msg, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
       console.log(localStorage.getItem("token"));
       history.push("/home");
    }catch(error){
       if (error.response) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(
            "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }

    }
    
      // .then((response) => {
       
      // })
      // .catch((error) => {
      //   if (error.response) {
      //     toast.error(error.response.data.message, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //   } else {
      //     toast.error(
      //       "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
      //       {
      //         position: "top-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //       }
      //     );
      //   }
      //});
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => login(formData)}
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
