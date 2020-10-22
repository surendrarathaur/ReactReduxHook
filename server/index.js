const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');
const app = express(); 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const UserRouter = require('./routes/UserRoute')


app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});