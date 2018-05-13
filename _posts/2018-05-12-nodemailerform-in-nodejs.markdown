---
title:  "NodeMailerForm in Node.js"
date:   2018-05-12 10:18:00
description: Create a NodeMailerForm in Node.js
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">NodeMailerForm in Node.js</h2>

<h1>Step 1: First create a App.js File</h1>

{% highlight ruby %}
{
  "name": "speednodemailers",
  "version": "0.0.1",
  "description": "NodeJs email form to send email using nodejs",
  "dependencies": {
    "nodemailer": "~0.7.0",
    "express": "~3.4.0",
    "body-parser": "~1.13.1"
  }
}

{% endhighlight %}


<h1>Step 2: Create a package.json File</h1>


{% highlight ruby %}
/*
Date: So. 5. March 2017 Author: SysAdminCat | L.G
*/
var http=require('http');
var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
var app=express();
var port = Number(process.env.PORT || 5000);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
 
// Home page
app.get('/',function(req,res){
    res.sendfile('index.html');
        //console.log 
        console.log('NodeMailer reading console log...' + req.url);

});
 
// sending mail function
app.post('/send', function(req, res){
if(req.body.email == "" || req.body.subject == "") {
  res.send("Error: Email & Subject should not blank");
  return false;
}

   // Sending Emails with SMTP, Configuring SMTP settings

    var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
            auth: {
                 user: 'yourgmail@gmail.com',
                 pass: 'yourpassword'
            }
        });
        var mailOptions = {
            from: "Node Emailer ✔ <yourgmail@gmail.com>", // sender address
            to: req.body.email, // list of receivers
            subject: req.body.subject+" ✔", // Subject line
            //text: "Hello world ✔", // plaintext body
            html: "<b>"+req.body.description+"</b>" // html body
        }
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});
 
// Starting server
var server = http.createServer(app).listen(port, function() {
console.log("Server is Running on 127.0.0.1:" + port);

});



{% endhighlight %}




<h1>Step 3: Create a index.html File</h1>


{% highlight ruby %}
<!DOCTYPE html>
< html lang="en">
< head>
< meta charset="utf-8">
< meta http-equiv="X-UA-Compatible" content="IE=edge">
< meta name="viewport" content="width=device-width, initial-scale=1">
< title>Send email in nodejs< /title>
< link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
< style type="text/css">img#logo-tp{margin:0 auto;display:-webkit-box;margin-top:50px}.panel-primary>.panel-heading{color:#fff;background-color:#25292d;border-color:#040404}.btn-primary{    float: right;color:#fff;background-color:#2f2f2f;border-color:#353535}.panel-primary{border-color:#e8e8e8}.btn-primary.active,.btn-primary.focus,.btn-primary:active,.btn-primary:focus,.btn-primary:hover,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#212121;border-color:#333}
< /style>
< /head>
< body>
< header>
  < img src="https://lh3.googleusercontent.com/V1cdpBcNDAXQb7H0WnzlkgMMLwhgg8jbCNfEJ-RKGy4Pfgxlze5G3lYeBDuDLcRc4Kwt7UumFEy4jfGTq95MjqZ9Ukv9tREvtFJfI5gA2uq-cFfqOHoyFuSxKd8zodzUIwtg1RrnHMH3BZK3aYyXDudLxIJ1S5310-1wqXC95f-kQMUw_4jd2NHU4HmFPMMYF6l_pFZyKe2YrIHUk7dMlhTJ52BgtkTcRAJT_1ZOuDwrlstvCffjooZJqyS8wgXL3C5Sdtq0d9DTZN-HMRmdst7c3Fa-Iwj5aHu3vH9O3wgMGW8oX19jteGmZBTUIEn22xXtSrns9JZaECJgYXj534k6Y7KmMlOAY1_UGJZRGdhkisRgSWhZGtt16W0ol28jRIiixYM-akR7yvOLaSLALJolxIlKzouZuSNy6pffclBABioJLDrQeOjv_S351xjdtyZDzZ7oq1dEdsbMR8dem4yQcw3TjPrkFMQIyM5YE5qVheJgrpv2LSw_fVIFr6gvCnUlgd5jmhTFE5LGdypv9Q41GwnM9QKFeRSUWnrvuc5g2qA9KYOzosrN4k-KxX1A_-JfpgnJgvCGIaNNhg_TCdr4mM7AfNJwwqsDtkFt0tVRKK8idM_0_g=w200-h136-no" id="logo-tp">
< /header>
< div class="panel panel-primary" style="width:50%;margin:0 auto; margin-top:10%">
  < div class="panel-heading">
    < 3>Email Form In Node.Js< /h3>
  < /div>
< div class="panel-body" style="height:40%; text-align:center;" >
< p class="bg-info" id="msg">< /p>
 < form class="form-horizontal" role="form" id="emailForm" method="post">
  < div class="form-group">
    < label class="control-label col-sm-2" for="email">Email:< /label>
    < div class="col-sm-10">
      < input type="email" class="form-control" name="email" placeholder="Enter email" required="required">
    < /div>
  </ div>
  < div class="form-group">
    < label class="control-label col-sm-2" for="subject">Subject:< /label>
    < div class="col-sm-10">
      < input type="text" class="form-control" name="subject" placeholder="Enter subject" required="required">
    < /div>
  < /div>
  < div class="form-group">
    < label class="control-label col-sm-2" for="description">Description:< /label>
    < div class="col-sm-10">
      < textarea class="form-control" name="description" placeholder="Enter Description">< /textarea>
    < /div>
  < /div>
  < div class="form-group">
    < div class="col-sm-offset-2 col-sm-10">
      < button id="send" class="btn btn-primary btn-lg" type="button">
         < span class="glyphicon glyphicon-send" >< /span> Send
      < /button>
    < /div>
  < /div>
< /form>
< /div>
< /div>
 < script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">< /script>
 < script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js">< /script>
< script>
$(function(){
  var fullUrl =  location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    $("#send").click(function(){      
      var formData = $("#emailForm").serialize();
      $("#msg").text("Email sending Please wait..");
                $.ajax({
                  url: fullUrl+'/send',
                    type: 'POST',
                      data: formData,
                            success: function(result) {
                                 $("#msg").empty().text(result);
                                  },
                            error: function(e) {
                                 $("#msg").empty().text("There is some error to send email, Error code:"+e.status +", Error message:"+e.statusText);
                       },
                dataType: "html",
                timeout: 60000
            });
    });
});
< /script>

< /body>
< /html>
{% endhighlight %}


Reade More @ our Files: 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/NodeMailerForm">Go Read</a> 
Link: <a href="https://github.com/SpaceG/NodeMailerForm">Clone the Repository @ Github </a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
