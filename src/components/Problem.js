import React from "react";
import carpart from "../icons/carpart.png";
import symptom from "../icons/breakdown.jpg";
import Button from '@mui/material/Button'

function Problem() {
  return (
    <div>
      <h2>Problem</h2>
      <div className="problem">
        <div className="card" style={{ width: "40%" }}>
          <img src={symptom} alt="Alps" style={{ width: "100%" }} />
          <div className="card-body">
            <Button sx={{width: '100%', backgroundColor: "yellow"}}>Smells like</Button>
          </div>
        </div>
        <div className="card" style={{ width: "40%" }}>
          <img src={symptom} alt="Alps" style={{ width: "100%" }} />
          <div className="card-body">
            <Button sx={{width: '100%', backgroundColor: "yellow"}}>Smells like</Button>
          </div>
        </div>
        <div className="card" style={{ width: "40%" }}>
          <img src={symptom} alt="Alps" style={{ width: "100%" }} />
          <div className="card-body">
            <Button sx={{width: '100%', backgroundColor: "yellow"}}>Smells like</Button>
          </div>
        </div>

        <div className="card" style={{ width: "40%" }}>
          <img
            // className="card-img-top"
            src={symptom}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            {/* <h4 className="card-title"></h4> */}
            <Button sx={{width: '100%', backgroundColor: "yellow"}}>Smellls Like</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
