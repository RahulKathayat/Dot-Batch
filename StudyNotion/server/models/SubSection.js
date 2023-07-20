const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    Duration:{
        type:String,
    },
    videoUrl:{
        type:String,
    },
    description:{
        type:String,
    },
    
});

module.exports = mongoose.model("SubSection",subSectionSchema);