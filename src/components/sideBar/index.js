import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  const navigation = useNavigate();

  return (
    <div className="sidebar">
      <button
        onClick={() => {
          navigation("/");
        }}
        className="btn sidebar-btn"
      >
        <img
          alt="Your Image"
          className="sidebar-btn-img"
          src="https://www.linkpicture.com/q/Vector_13.png"
        />
        <img
          alt="Your Image"
          className="sidebar-btn-img1"
          src="https://www.linkpicture.com/q/siddeBar.png"
        />
        Profile
      </button>
      <button
        onClick={() => {
          navigation("/CreateProfile");
        }}
        className="btn sidebar-btn"
      >
        <img
          alt="Your Image"
          className="sidebar-btn-img"
          src="https://www.linkpicture.com/q/Vector_13.png"
        />
        <img
          alt="Your Image"
          className="sidebar-btn-img1"
          src="https://www.linkpicture.com/q/siddeBar.png"
        />
        Settings
      </button>
      <button className="btn sidebar-btn">
        <img
          alt=""
          className="sidebar-btn-img"
          src="https://www.linkpicture.com/q/Vector_13.png"
          type="image"
        />
        <img
          alt="Your Image"
          className="sidebar-btn-img1"
          src="https://www.linkpicture.com/q/siddeBar.png"
        />
        Friends
      </button>
    </div>
  );
};

export default Sidebar;
