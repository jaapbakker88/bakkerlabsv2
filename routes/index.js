var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport')

router.get('/', function(req, res) {
  res.render('index')
})

var auth = {
  auth: {
    api_key: 'key-5728d19846ec0b4b7e540a6739a06b0a',
    domain: 'mg.bakkerlabs.nl'
  }
}

router.post('/submit', function (req, res) {
    var nodemailerMailgun = nodemailer.createTransport(mg(auth))

    var mailOptions = {
        from: req.body.email, // sender address
        to: "hello@bakkerlabs.nl", // list of receivers
        subject: "inquiry regarding " + req.body.projectType, // Subject line
        text: "Hi, my name is " + req.body.name + ". \n\nI am looking for someone to help me with the following: \n\n" + req.body.description + "\n\n My budget is: " + req.body.budget, // plaintext body
    }

    nodemailerMailgun.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.send(false);
        }else{
            console.log("Message sent: " + response.message);
            res.send(true);
        }
    });

})

module.exports = router;
