import React from "react";
import style from "./Modal.module.css";

function Modal({ setShow }) {
  return (
    <div className={style.modal}>
      <section className={style.btnCont}>
        <button>Save to Device</button>
        <button>Print</button>
        <button onClick={() => setShow(false)}>Close</button>
      </section>
    </div>
  );
}

export default Modal;
