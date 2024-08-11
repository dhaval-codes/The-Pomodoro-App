import React, { useState, useEffect } from "react";
import { ArcedCircle, CenterCircle, Container, LoadingText } from "./style.js";

function Loader() {
  const [textState, setTextState] = useState("Loading");

  useEffect(() => {
    const intervalId = setInterval(updateText, 1000);

    function updateText() {
      setTextState((prev) => {
        if (prev === "Loading") {
          return "Loading.";
        } else if (prev === "Loading.") {
          return "Loading..";
        } else if (prev === "Loading..") {
          return "Loading...";
        } else {
          return "Loading";
        }
      });
    }
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <ArcedCircle>
        <CenterCircle />
      </ArcedCircle>
      <LoadingText>{textState}</LoadingText>
    </Container>
  );
}

export default Loader;
