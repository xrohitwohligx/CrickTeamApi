const express = require("express");
const router = new express.Router();

const TeamsRanking = require("../models/teams")


router.post("/teams", async(req, res)=>{
    try{
        console.log(req.body)
        const addTeams = new TeamsRanking(req.body)
        const mydata =  await addTeams.save();
        res.send("data has been saved");
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/getTeams", async (req,res)=>{
    try{
        const findTeams = await TeamsRanking.find({}).sort({"ranking":1})
        res.status(201).send(findTeams)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/getTeams/:id", async (req,res)=>{
    try{
        const _id = req.params.id
        const findTeam = await TeamsRanking.findById(_id);
        res.send(findTeam)
    }catch(e){
        res.status(400).send(e)
    }
})


router.patch("/getTeams/:id", async (req,res)=>{
    try{
        const _id = req.params.id
        const getPlayer = await TeamsRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(getPlayer)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete("/getTeams/:id", async (req, res)=>{
    try{
        const _id = req.params.id
        const delPlayer = await TeamsRanking.findByIdAndDelete(_id);
        res.send(delPlayer);
    }catch(e){
        res.status(400).send(e) 
    }
})

module.exports = router;

