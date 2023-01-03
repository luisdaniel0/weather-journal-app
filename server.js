const projectData = {
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 8000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})







