import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import  ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalWindow = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
    </Fragment>
  );
};

export default Modal;
