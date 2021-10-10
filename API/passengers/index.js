import express from 'express';

import { PassengerModel } from '../../database/allmodels'

const Router = express.Router()

Router.get("/passengers" , async(req,res) =>{

    try{
        const {page=1 , limit=5 } = req.query;
        const getPassengers = await PassengerModel.find().limit(limit * 1).skip((page-1)*limit);
        
    return res.status(200).json({"Total Passengers" : getPassengers.length , "total Pages": page , getPassengers})

    }
    catch(error){
        return res.status(500).json({error : error.message})
    }

})

Router.post("/passengers/new" , async(req,res) =>{

    try{
        const { passengerdata } = req.body; 

       await PassengerModel.create(passengerdata);
     
    return res.status(200).json({Status : "Passenger Successfully Created"})

    }
    catch(error){
        return res.status(500).json({error : error.message})
    }

})

Router.get("/passengers/:_id" , async(req,res) =>{

    try{
        const { _id } = req.params
        const getPassenger = await PassengerModel.findById(_id);
        
    return res.status(200).json(getPassenger)

    }
    catch(error){
        return res.status(500).json({error : error.message})
    }

})


Router.delete("/passengers/delete/:_id" , async(req,res) =>{

    try{
        const { _id } = req.params
        await PassengerModel.findByIdAndDelete(_id);
        
    return res.status(200).json({message : "Passenger Deleted Successfully"})

    }
    catch(error){
        return res.status(500).json({error : error.message})
    }

})


Router.patch("/passengers/update/:userId", async(req,res)=> {
    try {
        const {userId} = req.params;
        const userData = req.body;
        const updateUserData = await PassengerModel.findByIdAndUpdate(
          userId,
          
            userData,
        
          {new: true}
        );

        return res.status(200).json({message :"Passenger Detail Updated Successfully"})
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  });

  Router.put("/passengers/update/:userId" , async(req,res) => {
    try {
        const {userId} = req.params;
        const {userData} = req.body;
        const updateUserData = await PassengerModel.findByIdAndUpdate(
          userId,
          {
            $set: userData
          },
          {new: true}
        );
        return res.json({user: updateUserData});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
})
  
export default Router;