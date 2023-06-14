const express = require("express");

require("../src/database/connection")
const TeamsRanking = require("../src/models/teams")
const router = require("../src/routers/myTeam")

const app = express();
const port = process.env.PORT || 8050;

app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`connection successfull at ${port}`);
})
