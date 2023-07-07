import React from "react";
import "./ErrorModal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="card modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>

      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button className="button" onClick={props.onCloseConfirm}>
          Close
        </button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseConfirm={props.onCloseConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseConfirm={props.onCloseConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
