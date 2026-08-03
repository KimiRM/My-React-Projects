import React, { useState } from "react";
import Button from "../buttons/button";
import "./reviewMessage.css";

const ReviewMessage = ({ subject = "", email = "", description = "" }) => {
  const [isViewMessage, setIsViewMessage] = useState(false);

  const handleMorebutton = () => {
    setIsViewMessage(!isViewMessage);
  };

  return (
    <div className="ReviewMessage-container">
      <div className="ReviewMessage-header">

        <span>View Message</span>
        <Button
          onClick={handleMorebutton}
          className="ReviewMessage-icon"
          children={<i className={`fa-solid fa-chevron-${isViewMessage ? "up" : "down"}`}></i>}/>
      </div>
      <div
        className={`ReviewMessage-Message ${isViewMessage ? "visible" : ""}`}
      >
        <div>
          <label>Subject: </label>
          <span>{subject}</span>
        </div>
        <div>
          <label>Email: </label>
          <span>{email}</span>
        </div>
        <div>
          <label>Description: </label>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewMessage;
