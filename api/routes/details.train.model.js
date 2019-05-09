const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TrainDetails = new Schema({
    TrainType: {
        type:String
    },
    TrainNumber: {
        type: String
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
    EndTime: {
        type: String
    },

});

module.exports = mongoose.model('TrainDetails', TrainDetails);