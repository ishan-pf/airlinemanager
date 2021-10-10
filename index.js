require("dotenv").config()

import express from 'express';
import cors from 'cors'
import MongoConnection from './database/connection'
// import { AirlineModel } from './database/allmodels'
import airlines from './API/airlines';
import passengers from './API/passengers'
const airline = express();

airline.use(express.json());
airline.use(cors());
airline.use(express.urlencoded({extended : false}));

airline.use('/', airlines);
airlines.use('/', passengers)

airline.get( "/" , async(req , res) => {

    console.log("Welcome to Exampil Airline ! We Will Help you boost your NEET Preparations");

    return res.json({Message : "Please Right This Way"});
})

// airline.get( "/airlines" , async(req,res) => {

//     try{
//     const getAirlines = await AirlineModel.find();

//     return res.json(getAirlines)

//     // return res.json({airlines : " 123..."})
// }
// catch(error){
//     return res.status(500).json({error : error.message})
// }
// })

airline.listen(4005 , (req,res) => {
    MongoConnection().then(() => console.log("DataBase is Connected")) 
    .catch(() => console.log("Database is Not Connected"))
    console.log("Airline is Ready to Takeoff");
})
