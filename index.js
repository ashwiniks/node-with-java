//var exec=require('./jar')
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
app.use((req,res)=>{
    const exec = require('child_process').exec;
    const childPorcess1 = exec('javac  simple.java', function(err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        exec('java  Simple', function(err, stdout, stderr) {
            if (err) {
                console.log(err)
            }
            console.log("output test",stdout);
            res.json({"outputwithjava":stdout});
        })
    });
});
app.listen(port,()=>{
    console.log("server is listenting to port",port);
});