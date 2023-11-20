//Importing express and router
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

// import template from "../email/email.template"

const router = new express.Router();

router.get('/', (req, res) => {
	res.sendFile(join(__dirname, 'index.html'));
  });




module.exports = router;
