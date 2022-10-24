import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import CloseSVG from "./../../assets/CloseSVG";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <header className={classes.header}>
        <button onClick={props.onClose}>
          <CloseSVG />
        </button>
      </header>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose}>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
