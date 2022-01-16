import React, { useEffect, useState } from "react";
import Thermometer from "./Thermometer";

const mockedData = {
  id: 1,
  goal: 5000,
  raised: 1200,
  logo: "https://previews.123rf.com/images/haris99/haris991807/haris99180701007/105539035-ilustraci%C3%B3n-de-vector-de-plantilla-de-dise%C3%B1o-de-logotipo-de-caridad.jpg",
  title: "Fight Global Warming",
};

function MainCard(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setDate] = useState(mockedData);

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo">
          <img src={data.logo} alt="" width="100%" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="title">{data.title}</h4>
        <Thermometer goal={data.goal} title={data.title} raised={data.raised} />
      </div>
    </div>
  );
  // }
}

export default MainCard;
