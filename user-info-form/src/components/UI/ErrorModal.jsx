import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ title, message, onCloseConfirm }) => {
  return (
    <div>
      <div className="backdrop" onClick={onCloseConfirm}></div>
      <div className="card modal">
        <header className="header">
          <h2>{title}</h2>
        </header>

        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          <button className="button" onClick={onCloseConfirm}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
