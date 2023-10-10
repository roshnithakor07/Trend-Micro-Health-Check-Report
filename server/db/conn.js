const mongoose = require('mongoose')
const dontenv = require("dotenv")
dontenv.config({path : './config.env'});
const DB = process.env.DATABASE

mongoose.set('strictQuery', true);
//Trend-Micro-Health-Check-Report
mongoose.connect("mongodb://0.0.0.0:27017/Trend-Micro-health-check-report", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected")
    
}).catch((err) => {
    console.log(err, "no connection ")
})

