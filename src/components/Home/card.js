import { margin } from "@mui/system";
import React, { Component } from "react";
import { Rating } from "@mui/material";

export default function Card({ assignment }) {
  const handleLike = () => {};
  const handleDisLike = () => {};
  const getDoc = () => {};
  return (
    //   <div class="body__main">
    <div class="feed">
      <div className="post">
        <div className="post__header">
          <i className="material-icons sidebar__topAvatar"> account_circle </i>
          <div className="post__info">
            <div className="row" id="subrow1">
              <h2>{assignment.userId.uname}</h2>
              <h2>{assignment.userId.college_name}</h2>
              <h2>{assignment.branch}</h2>
              <h2>{assignment.subject}</h2>
            </div>
            <div className="row" id="subrow2">
              <p>Date Posted On: {assignment.date.slice(0,10)} </p>
              <p>
                Rating:{" "}
                <Rating name="read-only" value={assignment.rating} readOnly />
              </p>
            </div>
          </div>
        </div>

        <div className="post__body">
          <p>{assignment.description}</p>
        </div>

        <div className="feed__inputOptions">
          <div className="inputOption">
            <button
              style={{ color: "gray" }}
              className="material-icons"
              onClick={handleLike}
            >
              {" "}
              thumb_up{" "}
            </button>
            <h4>Like</h4>
          </div>
          <div className="inputOption">
            <button
              style={{ color: "gray" }}
              className="material-icons"
              onClick={handleDisLike}
            >
              {" "}
              thumb_down{" "}
            </button>
            <h4>Dislike</h4>
          </div>
          <div className="inputOption">
            <button
              style={{ color: "gray" }}
              className="material-icons"
              onClick={getDoc}
            >
              {" "}
              get_app{" "}
            </button>
            <h4>View/Download File</h4>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  );
}
