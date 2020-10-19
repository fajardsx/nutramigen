import React from "react";
import { Button } from "react-bootstrap";
import Tweenful, { elastic } from "react-tweenful";
import Constant from "../config/Constant";

export function navi(onBack, onNext) {
  return (
    <div>
      {onNext && (
        <Button
          variant="nextscreen"
          style={{ color: "#fff", fontSize: 12 }}
          onClick={onNext}></Button>
      )}

      {onBack && (
        <Button
          variant="backscreen"
          style={{ color: "#fff", fontSize: 12 }}
          onClick={onBack}></Button>
      )}
    </div>
  );
}

export const refHanyakalangan = () => {
  return (
    <Tweenful.div
      render
      easing={elastic(1, 0.1)}
      loop={false}
      animate={{ opacity: [0, 1] }}
      events={{
        onAnimationStart: () => console.log("AnimationStart"),
        onAnimationEnd: () => console.log("AnimationEnd"),
      }}
      delay={Constant.NORMAL_DURATION * 3.5}
      duration={Constant.NORMAL_DURATION}
      style={{ opacity: 0 }}>
      <div className={"contentRefstyleContainer"}>
        <div className="contentRefstyleLast ">{"Hanya untuk kalangan medis"}</div>
        <div className="contentRefstyleLast ">{"ASI adalah makanan yang terbaik bagi bayi"}</div>
      </div>
    </Tweenful.div>
  );
};
