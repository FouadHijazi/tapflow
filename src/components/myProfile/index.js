import React, { useRef, useState } from "react";
import "./style.css";

const MyProfile = () => {
  const [fileName, setFileName] = useState("Click or drag and drop files here");
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Profile_Div">
      <p className="welcome">Welcome to the Profile</p>

      <p className="section1">Section 1</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        venenatis libero, mattis accumsan diam. Aliquam erat volutpat. Phasellus
        sed arcu ac ex ullamcorper interdum a tristique diam. Pellentesque mi
        leo, varius in iaculis ut, viverra eget nunc. Proin laoreet, diam eget
        egestas porttitor, sapien eros dignissim purus, ac mattis lorem sem
        vitae nunc. Donec pretium metus eget lacus varius laoreet.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        venenatis libero, mattis accumsan diam. Aliquam erat volutpat. Phasellus
        sed arcu ac ex ullamcorper interdum a tristique diam. Pellentesque mi
        leo, varius in iaculis ut, viverra eget nunc. Proin laoreet, diam eget
        egestas porttitor, sapien eros dignissim purus, ac mattis lorem sem
        vitae nunc. Donec pretium metus eget lacus varius laoreet.{" "}
      </p>

      <p className="Information">Information</p>
      <div className="boxesContiner">
        <div className="box">
          <h3>Country</h3>
          <h6 className="sa">Saudi Arabia</h6>
        </div>
        <div className="box">
          <h3>Country</h3>
          <h6 className="sa">Saudi Arabia</h6>
        </div>
        <div className="box">
          <h3>Country</h3>
          <h6 className="sa">Saudi Arabia</h6>
        </div>
      </div>

      <p className="Hobbies">Hobbies</p>
      <div className="Hobbies_div">
        <div className="btn_hobbies">
          <h6 className="hob_h6">Swimmig</h6>
        </div>
        <div className="btn_hobbies">
          <h6 className="hob_h6">Horse Back To</h6>
        </div>
        <div className="btn_hobbies">
          <h6 className="hob_h6">Camping</h6>
        </div>
      </div>

      <div className="Edt_div">
        <h6 className="h6_edit">Edit</h6>
      </div>

      <div className="section2_social">
        <div className="section2_div">
          <h6 className="section2">Section 2</h6>
          <p className="p_section2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet venenatis libero, mattis accumsan diam. Aliquam erat volutpat.
            Phasellus sed arcu ac ex ullamcorper interdum a tristique diam.
            Pellentesque mi leo, varius in iaculis ut, viverra eget nunc. Proin
            laoreet, diam eget egestas porttitor, sapien eros dignissim purus,
            ac mattis lorem sem vitae nunc. Donec pretium metus eget lacus
            varius laoreet.
          </p>
        </div>

        <div className="social_div">
          <div className="soial_img">
            <img
              className="soial_I"
              src="https://www.linkpicture.com/q/ins_1.png"
              type="image"
            />
          </div>
          <div className="soial_img">
            <img
              className="soial_I"
              src="https://www.linkpicture.com/q/Facebook.png"
              type="image"
            />
          </div>
          <div className="soial_img">
            <img
              className="soial_I"
              src="https://www.linkpicture.com/q/YouTube_3.png"
              type="image"
            />
          </div>
          <div className="soial_img">
            <img
              className="soial_I"
              src="https://www.linkpicture.com/q/TickTock.png"
              type="image"
            />
          </div>

          <div className="soial_img">
            <img
              className="soial_I"
              src="https://www.linkpicture.com/q/Twitter_6.png"
              type="image"
            />
          </div>
        </div>
      </div>

      <div className="Uplaoad_div">
        <p className="Upload_file">Upload file</p>
        <div
          className="file-upload-button"
          onClick={handleClick}
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              console.log(event.target.files);
              if (event.target.files.length > 0) {
                setFileName(event.target.files[0].name);
              }
              // Do something with the files (e.g. upload to server)
            }}
          />
          <p className="drop_drag_btn">{fileName}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
