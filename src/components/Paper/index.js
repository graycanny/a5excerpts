import React from "react";
import style from "./Paper.module.css";

function Paper({ textArea, setText }) {
  function onChange(e) {
    setText(e.target.value);
  }

  return (
    <div className={style.Paper}>
      <form action="">
        <div className={style.wrapper}>
          <textarea
            name="paper"
            id="paper"
            placeholder="Enter Text Here"
            cols={textArea.cols}
            rows={textArea.rows}
            className={style.textarea}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default Paper;
