import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1109/api/services")
      .then((data) => data.json())
      .then((data, err) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err);
        setServices([]);
      });
  }, []);
  console.log(services);
  return (
    <>
      <h1>Services</h1>
      <div style={{ textAlign: "left", margin: "20px" }}>
        <a href="/booking">Create Booking Service</a>
      </div>

      <div style={{display:"flex"}}>
        {services?.map((item) => (
          <Card
            sx={{
              width: "20rem",
              marginLeft: "10px",
              backgroundColor: "lightgray",
            }}
          >
            <div>
              <h2>{item.serviceName}</h2>
            </div>
            <div>
              <p>{item.details}</p>
            </div>
            <a href={`/serviceDetails/${item.id}`}>Show More Details</a>
          </Card>
        ))}
      </div>
    </>
  );
}
