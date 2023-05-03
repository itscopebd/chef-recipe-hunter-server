const express=require("express");
var cors = require('cors')

const allData=require("./allData/data.json");
const app=express();
app.use(cors());
const port=5000;

app.get("/alldata",(req,res)=>{
    res.send(allData)
})


app.get("/alldata/:id",(req,res)=>{
    const id=req.params.id;
    const selectedData=allData.find(n=>n.id===id);
    res.send(selectedData)
})



app.listen(port,()=>{
    console.log("server Runnig")
})