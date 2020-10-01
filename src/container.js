import React from "react";
import Swipe from "react-easy-swipe";
import "./App.css";

const ContainerSwipe = (props) => {
  const onSwipeLeft = (e) => {
    console.log("onSwipeLeft swiping...");
    props.callNext();
  };
  const onSwipeRight = (e) => {
    console.log("onSwipeRight swiping...", e);
    props.callPrev();
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className="App-Container">{props.children}</div>
    </Swipe>
  );
};
export default ContainerSwipe;
