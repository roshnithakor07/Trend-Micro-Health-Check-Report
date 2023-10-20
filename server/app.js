const express = require('express')
require('./db/conn.js');
const cors = require('cors');
const dontenv = require("dotenv")
dontenv.config({path : './config.env'});
const bodyParser = require('body-parser');

const charts = require('./routes/charts');
const report = require('./routes/report');
const pdf = require('./routes/pdf')
const docx = require('./routes/docx')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))


app.use("/charts" ,charts);
app.use("/report" ,report);
app.use("/pdf" ,pdf);
app.use("/docx" ,docx);

app.get('/',function(req,res,next){
    console.log("this is sample data")
    res.send("<h1>this is home page</h1>");
});





// Routes


// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server is running on http://0.0.0.0:${PORT}`);
//   });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });