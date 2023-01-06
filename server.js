let projectData = {
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const port = 8000;

app.get('/all', function (req, res) {
  res.send(projectData);
});

app.post('/add', async (req, res) => {
  const body = await req.body;
  projectData = body;
  console.log(projectData);
  res.send(projectData);
});


app.use(express.static("website"));
const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) })







