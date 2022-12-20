import "./styles.css";
import React, { useState } from "react";

const carDb = {
  Petrol: [
    { name: "TATA Nexon", millage: "18kmpl", price: "10-15 lakh" },
    { name: "Hyundai Veneu", millage: "10kmpl", price: "9-14 lakh" }
  ],
  Diseal: [
    { name: "Mahindra Thar", millage: "15kmpl", price: "15-17 lakh" },
    { name: "TATA Safari", millage: "12kmpl", price: "19-25 lakh" }
  ],

  Electric: [
    { name: "Nexon Ev", millage: "200kmp", price: "12-17 lakh" },
    { name: "Tata Tiago EV", millage: "250kmp", price: "10-13 lakh" }
  ]
};

export default function App() {
  const [selectedCars, setCars] = useState("Petrol");
  function onClickHandler(cars) {
    setCars(cars);
    // console.log(cars);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Best Cars 🚗</h1>
        <p>Some of the best car list from the year 2022</p>

        <div>
          {Object.keys(carDb).map((cars) => (
            <button
              onClick={() => onClickHandler(cars)}
              style={{
                cursor: "pointer",
                // background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {cars}
            </button>
          ))}
        </div>
        <hr />

        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0px" }}>
            {carDb[selectedCars].map((carType) => (
              <li
                key={carType.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {carType.name} </div>
                <div style={{ fontSize: "smaller", padding: "0.5rem 0rem" }}>
                  {" "}
                  {carType.millage}{" "}
                </div>
                <div style={{ fontSize: "medium" }}> {carType.price} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
