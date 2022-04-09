import React, { useState } from "react";
import Modal from "../Modal";
import style from "./Share.module.css";

function Share({ text }) {
  const [show, setShow] = useState(false);

  return (
    <div className={style.Share}>
      {show ? <Modal setShow={setShow} /> : <></>}
      <button onClick={() => setShow(true)} className={style.btn}>
        share
      </button>
    </div>
  );
}

export default Share;
