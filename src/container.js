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
      {props.children}
    </Swipe>
  );
};
export default ContainerSwipe;
