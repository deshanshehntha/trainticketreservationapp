const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const userAppRoutes = express.Router();
const trainAppRoutes = express.Router();


let RegUser = require('./routes/registed.user.model');
let TrainDetails = require('./routes/details.train.model');
let TrainBooking = require('./routes/bookings.train.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/railwayDB1', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});



userAppRoutes.route('/login').post(function(req,res){

    RegUser.find(req.body,function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});
app.use('/users', userAppRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


userAppRoutes.route('/add').post(function(req, res) {
    let user = new RegUser(req.body);
    user.Type = "Domestic";
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

trainAppRoutes.route('/add').post(function(req, res) {
    let trainDetails = new TrainDetails(req.body);

    trainDetails.save()
        .then(trainDetails => {
            res.status(200).json({'trainDetails': 'trainDetails added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new trainDetails failed');
        });
});

trainAppRoutes.route('/all').get(function (req, res) {

    TrainDetails.find(function(err, user){
        if(err){
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
});



app.use('/newtrainrecord',trainAppRoutes);