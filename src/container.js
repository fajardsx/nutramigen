import React from "react";
import { Col, Row } from "react-bootstrap";
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
    <Row>
      <Col>{props.children}</Col>
    </Row>
  );
};
export default ContainerSwipe;
{
  /* <Swipe style={{width:'100%'}} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      {props.children}
    </Swipe> */
}
