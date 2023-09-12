const express = require('express')
require('./db/conn.js');
const cors = require('cors');
const dontenv = require("dotenv")
dontenv.config({path : './config.env'});
const bodyParser = require('body-parser');

const charts = require('./routes/charts');
const report = require('./routes/report');
const pdf = require('./routes/pdf')


const app = express();
app.use(cors());

const PORT = process.env.PORT;

//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))


app.use("/charts" ,charts);
app.use("/report" ,report);
app.use("/pdf" ,pdf);


app.get('/',function(req,res,next){
    res.send("<h1>this is home page</h1>");
});



// Routes



app.listen(PORT, () => console.log(`Server running at port ${PORT}`));