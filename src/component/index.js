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
    <div style={{ opacity: 1 }}>
      <div className={"contentRefstyleContainer"}>
        <div className="contentRefstyleLast ">{"Hanya untuk kalangan medis"}</div>
        <div className="contentRefstyleLast ">{"ASI adalah makanan yang terbaik bagi bayi"}</div>
      </div>
    </div>
  );
};
