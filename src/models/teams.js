const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        trim: true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
    },
    event:{
        type:String,
        default:"testMatch"
    }
})

const TeamsRanking = new mongoose.model("TeamsRanking", teamSchema);

module.exports = TeamsRanking
