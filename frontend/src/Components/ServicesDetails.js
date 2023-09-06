import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

export default function ServicesDetails() {
  let id = window.location.pathname.split("/")[2];
  const [serviceDetails, setServiceDetails] = useState({});
  useEffect(() => {
    fetch("http://localhost:1109/api/services/" + id)
      .then((data) => data.json())
      .then((data, err) => {
        setServiceDetails(data);
      })
      .catch((err) => {
        console.log(err);
        setServiceDetails({});
      });
  }, []);
  return (
    <>
      <h1>ServicesDetails</h1>
      <div style={{ textAlign: "left", margin: "20px" }}>
        <a href="/booking">Create Booking Service</a>
      </div>

      <Card
        sx={{
          width: "30rem",
          marginLeft: "10px",
          backgroundColor: "lightgray",
        }}
      >
        <div>
          <h2>Service Name : {serviceDetails?.serviceName}</h2>
        </div>
        <div>
          <p>Service Details : {serviceDetails?.details}</p>
        </div>
      </Card>
    </>
  );
}
