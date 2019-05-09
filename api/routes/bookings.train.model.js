const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrainBooking = new Schema({

    Date: {
        type:String
    },
    TrainNumber: {
        type: String
    },
    NumberOfSeats: {
        type: String
    },
    TrainType: {
        type:String
    },
    StartStation: {
        type: String
    },
    OutStation: {
        type: String
    },
    StartTime: {
        type: String
    },
    PaymentMethod: {
        type: String
    },

});

module.exports = mongoose.model('TrainBooking', TrainBooking);