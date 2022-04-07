import React from "react";
import style from "./Paper.module.css";

function Paper() {
  //! 138 lines @ font-size 18px
  //! 75 characters

  const screen = screen.width;

  return (
    <div className={style.Paper}>
      <form action="">
        <div className={style.wrapper}>
          <textarea
            name="paper"
            id="paper"
            placeholder="Enter Text Here"
            cols="105"
            rows="102"
            className={style.textarea}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Paper;
