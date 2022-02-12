import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/system";
import { SentimentDissatisfied } from "@mui/icons-material";

export default function Home() {
  const token = localStorage.getItem("token");
  const [assignments, setAssignments] = useState([]);
  const performAPICall = async () => {
    const url = "https://study-help.herokuapp.com/api/doc/alldocs";

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      setAssignments(response.data);
      console.log(response);
    } catch (e) {
      if (e.response && e.response.status === 500) {
        toast.error(e.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return null;
      } else {
        toast.warning(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON",
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
  };
  useEffect(() => {
    performAPICall();
  }, []);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      {assignments.length ? (
        assignments.map((assignment) => (
          <Card
            assignment={assignment}
          />
        ))
      ) : (
        <Box className="loading">
          <SentimentDissatisfied color="action" />
          <h4>No assignments found</h4>
        </Box>
      )}
      <Card/>
    </div>
  );
}
