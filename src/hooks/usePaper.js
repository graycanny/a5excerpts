import { useState, useEffect } from "react";

export default function usePaper(screen) {
  //! Sets the paper textarea cols and rows
  const [textArea, setTextArea] = useState({
    cols: undefined,
    rows: undefined,
  });
  useEffect(() => {
    const width = screen;
    if (width > 600 && width < 799) {
      console.log("TABLET");
      setTextArea({
        cols: "93",
        rows: "90",
      });
    } else if (width > 800 && width < 1599) {
      console.log("LAPTOP");
      setTextArea({
        cols: "75",
        rows: "80",
      });
    } else if (width > 1600) {
      console.log("DESKTOP");
      setTextArea({
        cols: "75",
        rows: "80",
      });
    } else {
      console.log("MOBILE");
      setTextArea({
        cols: "60",
        rows: "56",
      });
    }
  }, [screen]);
  return textArea;
}
