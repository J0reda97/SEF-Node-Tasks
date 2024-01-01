const express = require('express')
const app = express()

require('dotenv').config()
const mogoose = require('mongoose')
const routes = require("./routes/index.route")
const morgan = require('morgan')

// db connection 
function dbConnection() {
    const url = process.env.DB_URL
    mogoose.connect(url)
        .then(() => {
            console.log("DB Connected !!")
        })
        .catch((err) => {
            console.log(err)
            console.log("DB is Not Connected !!")
        })
}

app.use(morgan("dev"))
app.use(express.json())
app.use("/api", routes)

app.all("*", (req, res) => {
    res.status(404).send({ message: "Invalid Route !!" })
})

// console.log(process.env.DB_URL)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    dbConnection()
    console.log(`Server is running ${PORT}`)
})