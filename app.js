const { urlencoded } = require("express");
const express = require("express")
const path = require("path")
const app = express();
const port = 80;
const fs = require("fs");
//Express specific stuff
app.use('/static',express.static('static'));// For serving static files
app.use(express.urlencoded());
//pug specific stuff
app.set('view engine', 'pug');// Set template engine as pug
app.set('views',path.join(__dirname, 'views'));//Set view directory

//Endpoints

app.get('/',(req,res)=>{
    const con = "This is me";
    const params = {'title':'PubG is the best game',"content":con};
res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
   // console.log(req.body);
    nam = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let op = `Name is ${nam},${age} is year old,${gender},your address ${address},${more}.`;
     fs.writeFileSync('output.txt',op);
    const params = {'message':'Your form is submitted'};
    res.status(200).render('index.pug',params);
})
//start the server
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port} `);
});