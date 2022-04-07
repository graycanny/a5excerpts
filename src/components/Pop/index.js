import React from "react";
import style from "./Pop.moulde.css";

function Pop() {
  return (
    <div className={style.Pop}>
      <button className={style.saveBtn}>save to device</button>
      <button className={style.printBtn}>print</button>
    </div>
  );
}

export default Pop;
