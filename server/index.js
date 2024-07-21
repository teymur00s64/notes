const express = require('express');
const {port} = require('./config');
const router = require('./routers');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, (err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(`${port}`) 
    }
   
});