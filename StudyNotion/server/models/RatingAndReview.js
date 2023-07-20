const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    
});

module.exports = mongoose.model("RatingAndReview",ratingAndReviewSchema);