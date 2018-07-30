var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const SRC_DIR = path.resolve(__dirname, 'public');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(SRC_DIR + '/index.html'));
});

const guid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

app.post('/reservation', function(req, res) {
    const data = {
        id: guid(),
        name: req.body.name,
        hotel: req.body.hotel,
        arrival: req.body.arrival,
        departure: req.body.departure
    }
   
    res.json(data);
});

app.listen(3002);