/*
Simple Application 2
Use Body-Parser to parse content.
Use EJS Template Engine to create view.
*/

//Load Express web framework 
const express = require("express");
//Create Express applicaton called app
const app = express();

//Load Body-Parser framework
const bodyParser = require("body-parser")

//Load EJS template engine
const ejs = require('ejs')

app.set('ejs', ejs.renderFile)

console.log("Phrito")

app.use(bodyParser.urlencoded({ extended: false }))
 
//Send current directory's simple2.ejs file as a response to browser
//View files must be in views folder
app.get("/", (req, res) => {
    res.render("./simple2.ejs",
        {
            name: 'TBD',
            message: 'TBD'
        })
});
 
 
app.post("/", (req, res) => {
    res.render('simple2.ejs', {
        name: req.body.name,
        message: req.body.message
    })
});
 
//Start application and listen to port 2000
 app.listen(2000, () => {
    console.log('start')
})
