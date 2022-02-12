import { margin } from "@mui/system";
import React, { Component } from "react";

export default function Card ({assignment}){
    return (
      //   <div class="body__main">
      <div class="feed">
        <div className="post">
          <div className="post__header">
            <i className="material-icons sidebar__topAvatar">
              {" "}
              account_circle{" "}
            </i>
            <div className="post__info">
              <h2>Name Of Poster</h2>
              <div className="row">
                <p style={{ "margin-right": "10px"," margin-left":"20px" }}>College-Name</p>
                <p>Branch</p>
              </div>
              <h6>Subject</h6>
            </div>
          </div>

          <div className="post__body">
            <p>Description Of Assignment</p>
          </div>

          <div className="feed__inputOptions">
            <div className="inputOption">
              <i style={{ color: "gray" }} className="material-icons">
                {" "}
                thumb_up{" "}
              </i>
              <h4>Like</h4>
            </div>
            <div className="inputOption">
              <i style={{ color: "gray" }} className="material-icons">
                {" "}
                thumb_down{" "}
              </i>
              <h4>Dislike</h4>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    );
}