import React, { useEffect, useState } from "react";

function MainCard(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo">Logo Goes Here!</div>
      </div>
      <div className="card-body">
        <h4 className="title">Our data name</h4>
        <p>Our thermometer</p>
      </div>
    </div>
  );
  // }
}

export default MainCard;
