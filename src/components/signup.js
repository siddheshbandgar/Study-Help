import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "Siddhesh",
    last_name: "Bandgar",
    college_name: "Veermata Jijabai Technological Institute",
    branch: "Computer Engineering",
    summary: "We are team Optimizer Primes",
    email: "siddheshbandgar@gmail.com",
    password: "123456789",
  });

    //const {enqueueSnackbar} = useSnackbar();
    const history = useHistory();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async (formData) => {
    console.log(formData);
     console.log("Response function Called");
     
      const data = { uname: (formData.first_name+formData.last_name),email: formData.email, password: formData.password, college_name:formData.college_name, branch:formData.branch, summary: formData.summary };
      const url = "https://study-help.herokuapp.com/api/auth/signup";
      await axios.post(url, data)
        .then((response) => {
          console.log(response);
          const msg = "Registered successfully";
          toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          history.push("/sign-in");
        })
        .catch((error) => {
          console.log(error);
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
             toast.warning("Something went wrong. Check that the backend is running and rechable", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             });

          }
         } );
        
  };

  return (
    <div className="auth-wrapper">
      <div
        className="auth-inner"
        style={{ marginTop: "100px", padding: "50px" }}
      >
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter College Name"
              name="college_name"
              value={formData.college_name}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label>Branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Branch"
              name="branch"
              value={formData.branch}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label>Summary</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter summary"
              name="summary"
              value={formData.summary}
              onChange={handleFormChange}
            />
          </div>

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

          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => register(formData)}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
