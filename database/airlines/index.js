import mongoose from 'mongoose';

export const airlineSchema = new mongoose.Schema({

    id: { type : Number , required : true},
    name : {type : String },
    country : { type : String},
    logo : { type : String},
    slogan : { type : String },
    head_quaters : { type : String},
    website : {type : String },
    established : {type : String }
}, {
    timestamps: true
})

export const AirlineModel = mongoose.model("airlines" , airlineSchema)

