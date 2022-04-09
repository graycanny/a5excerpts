import React, { useState } from "react";
import Paper from "../Paper";
import Share from "../Share";
import useWindowSize from "../../hooks/useWindowSize";
import usePaper from "../../hooks/usePaper.js";
// import style from "./App.module.css";

function App() {
  const [text, setText] = useState(undefined);
  const screen = useWindowSize();
  const textArea = usePaper(screen.width);

  return (
    <div className="style.App">
      <Paper textArea={textArea} setText={setText} />
      <Share text={text} />
    </div>
  );
}

export default App;
