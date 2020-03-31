const exec = require('child_process').exec;
const childPorcess1 = exec('javac  simple.java', function(err, stdout, stderr) {
    if (err) {
        console.log(err)
    }
    exec('java  Simple', function(err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        console.log("output",stdout)
    })
})




