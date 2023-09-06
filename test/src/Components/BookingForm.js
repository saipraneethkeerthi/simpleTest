import React, { useState, useEffect } from "react";

export default function BookingForm() {
  const [serviceName, setServiceName] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = () => {
    if(serviceName && details ){

    
    let obj = {
      serviceName,
      details,
    };
    fetch("http://localhost:1109/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((data) => data.json())
      .then((data, err) => {
        alert(data.message)
        window.location.href='/'
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
        alert('please fill all details')
    }
  };
  return (
    <>
      <h1>BookingForm</h1>
      <div>
        <input
          name="serviceName"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <input
          name="details"
          placeholder="Service Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
