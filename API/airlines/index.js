import express from 'express';

import { AirlineModel } from "../../database/allmodels";

const Router = express.Router();


Router.get( "/airlines" , async(req,res) => {

    try{
    const getAirlines = await AirlineModel.find();
     
    return res.json({"Total Airlines" : getAirlines.length , getAirlines})

    
}
catch(error){
    return res.status(500).json({error : error.message})
}
})

Router.get( "/airlines/:id" , async(req,res) => {

    try{

        const { id } = req.params;

    const getAirline = await AirlineModel.findOne( {id});

    if(!getAirline){
         return res.status(404).json({message: 'Airline not found! Please Enter The Correct Airline ID'})
    } 

    return res.status(200).json(getAirline)

  
}
catch(error){
    return res.status(500).json({error : error.message})
}
})

Router.post("/airlines/new", async(req,res)=> {
    try {
      const { airlineData } = req.body;
  
      await AirlineModel.create(airlineData);
  
      return res.status(200).json({Airline : "Successfully Created Airline"});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  });


export default Router;