import express from 'express';
// require('dotenv').config()
const app = express();
// const path = require('path');
// const fs = require('fs');

const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("it's not working")
});

// app.get("/login", (req,res) => {
//     res.send("<h1>please login</h1>")
// });

app.listen(port, ()=> {
console.log(`serve at http://localhost:${port}`)
});
