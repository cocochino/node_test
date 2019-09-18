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

app.use(bodyParser.urlencoded({ extended: false }))
 
//Send view directory's simple2.ejs file as a response to browser
//With default value of TBD
app.get("/", (req, res) => {
    res.render("./simple2.ejs",
        {
            item: 'TBD',
            price: 'TBD'
        })
});
 
 
app.post("/", (req, res) => {
    res.render('simple2.ejs', {
        item: req.body.item,
        price: req.body.price
    })
});
 
//Start application and listen to port 2000
 app.listen(2000, () => {
    console.log('simple2.js has been started')
})
