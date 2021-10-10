import mongoose from 'mongoose';
import { airlineSchema } from '../airlines'
const passengerSchema = new mongoose.Schema({

    
    name : {type : String, required : true },
    trips : { type : Number},
    airline : [airlineSchema , {sparse: true}]
}, {
    timestamps: true
})

export const PassengerModel = mongoose.model("passengers" , passengerSchema)