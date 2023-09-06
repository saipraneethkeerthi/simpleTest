//Importing Express and Mongoose
const express = require('express')

const serviceRoutes = require('../apiRoutes/serviceRoutes')

//Assiging Express to varaible app
const app = express();

// Created use function to get body i.e data
app.use(express.json())
// app.use(jwt()) 


//Assigning port number to port varaible
const port = process.env.PORT || 1109

const cors = require('cors')
app.use(cors())
app.use("/api", serviceRoutes)



app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
	console.log(`app listening http://localhost:${port}`)
})
