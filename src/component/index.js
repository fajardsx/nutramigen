import React from "react";
import { Button } from "react-bootstrap";

export function navi(onBack,onNext){
    return <div>
          <Button
              variant="nextscreen"
              style={{ color: "#fff", backgroundColor: "#f05a29", fontSize: 12 }}
              onClick={onNext}>
              Next
            </Button>
        <Button
              variant="backscreen"
              style={{ color: "#fff", backgroundColor: "#f05a29", fontSize: 12 }}
              onClick={onBack}>
              Back
            </Button>
    </div>
};