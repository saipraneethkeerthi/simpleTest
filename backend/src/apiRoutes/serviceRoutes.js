//Importing express and router
const express = require("express");
const config = require("../config.json");
const fs = require("fs");

// import template from "../email/email.template"

const router = new express.Router();

router.get("/services", (req, res) => {
  res.status(200).send(config);
});

router.get("/services/:id", (req, res) => {
  const id = req.params.id;
  let filter = config.filter((val) => val.id == id);
  res.status(200).send(filter[0]);
});

router.post("/booking", (req, res) => {
  const body = req.body;
  body.id = config.length + 1;
  // Read the contents of the JSON file
  const data = fs.readFileSync("../backend/src/config.json");
  // Parse the JSON data into a JavaScript object
  const jsonData = JSON.parse(data);

  // Modify the JavaScript object by adding new data
  jsonData.push(body);
  fs.writeFileSync(
    "../backend/src/config.json",
    JSON.stringify(jsonData)
  );
  res.status(200).send({ message: "Data Updated Successfully" });
});

module.exports = router;
