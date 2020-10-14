import React from "react";
import { Button } from "react-bootstrap";

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
