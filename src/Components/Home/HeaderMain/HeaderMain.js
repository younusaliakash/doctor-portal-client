import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <div style={{height: '600px'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{color: '#3A4256'}}>
          Your Smaile <br />
          Start Hare
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          tempore a quia! Cum accusamus expedita veritatis, nesciunt culpa nulla
          corporis?
        </p>
        <button className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
