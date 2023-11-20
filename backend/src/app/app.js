//Importing Express and Mongoose
const express = require('express')

const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const serviceRoutes = require('../apiRoutes/serviceRoutes')
const socketRoutes = require('../apiRoutes/socketRouter')

//Assiging Express to varaible app
const app = express();

// Created use function to get body i.e data
app.use(express.json())
// app.use(jwt()) 


//Assigning port number to port varaible
const port = process.env.PORT || 1109
const server = createServer(app);
const io = new Server(server);
const httpServer = createServer();


const cors = require('cors')
app.use(cors())



io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
	  console.log('message: ' + msg);
	});
  });

  app.use("/api", serviceRoutes)
app.use("/socket", socketRoutes)

app.use(express.urlencoded({ extended: true }))


httpServer.listen(port, () => {
	console.log(`app listening http://localhost:${port}`)
})
