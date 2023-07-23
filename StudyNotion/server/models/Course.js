const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    tag:{
        type:[String],
        required: true,
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
    ],
    instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    
});

module.exports = mongoose.model("Course",coursesSchema);