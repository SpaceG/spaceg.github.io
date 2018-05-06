---
title:  "SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1"
date:   2018-05-06 10:18:00
description: Salt + Hash Password authentication SailsJS V. 1.0.1
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">This Partial shows, you how get Implement Passport.js authentication with Sails.js 1.0.1</h2>



<h1>Step 1: Dependencies</h1>
Before we start, we need to ensure we have all the relevant dependencies installed into our Sails.js project

{% highlight ruby %}
npm i --save bcrypt
npm i --save bcrypt-nodejs
npm i --save passport
npm i --save passport-local
npm i --save jsonwebtoken
npm i --save mongodb
npm i --save sails-mongo

{% endhighlight %}


<h1>The Package.json File</h1>
Lets Create it via Commandline

{% highlight ruby %}
{
  "name": "oauthy",
  "private": true,
  "version": "0.0.0",
  "description": "a Sails application",
  "keywords": [],
  "dependencies": {
    "@sailshq/connect-redis": "^3.2.1",
    "@sailshq/lodash": "^3.10.3",
    "@sailshq/socket.io-redis": "^5.2.0",
    "async": "2.0.1",
    "bcrypt": "^2.0.1",
    "bcrypt-nodejs": "0.0.3",
    "grunt": "1.0.1",
    "jsonwebtoken": "^8.2.1",
    "mongodb": "^3.0.7",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "sails": "^1.0.1",
    "sails-hook-grunt": "^3.0.2",
    "sails-hook-orm": "^2.0.0-16",
    "sails-hook-sockets": "^1.4.0",
    "sails-mongo": "^1.0.0"
  },
  "devDependencies": {
    "@sailshq/eslint": "^4.19.3"
  },
  "scripts": {
    "start": "NODE_ENV=production node app.js",
    "test": "npm run lint && npm run custom-tests && echo 'Done.'",
    "lint": "eslint . --max-warnings=0 --report-unused-disable-directives && echo '✔  Your .js files look good.'",
    "custom-tests": "echo \"(No other custom tests yet.)\" && echo"
  },
  "main": "app.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/jh/oauthy.git"
  },
  "author": "jh",
  "license": "",
  "engines": {
    "node": ">=8.10"
  }
}
{% endhighlight %}

<h1>Step 2: Generate User Model</h1>
Now we need to generate the User Model. This will automatically create User.js within api/models.

{% highlight ruby %}
sails generate model user
{% endhighlight %}


Within the User.js file, we can now configure this like so:



{% highlight ruby %}

const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
      email: {
        type: 'string',
        isEmail: true,
      },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    uid: {
      type: 'string'
    },
    // One-to-Many -> Add a reference to Posts 
 
    },
  customToJSON: function() {
     return _.omit(this, ['password'])
  },
  beforeCreate: function(user, cb){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }
};
{% endhighlight %}

For the moment, we will only user email, username and password as the user attributes. To ensure we don’t pass the password back when searching the User model, the <code>customToJSON </code> function removes it.

In addition, we use bcrypt to hash the users password before storing it in our database

<h1>Step 3: Generate Auth Controller</h1>
Now we have our User model configured, we need to add a controller to handle authorisations. Run the following to generate an Auth Controller

{% highlight ruby %}

sails generate controller auth
{% endhighlight %}


This will create a file called AuthController.js within api/controllers. Open this file and configure it as so:





{% highlight ruby %}

const passport = require('passport');

module.exports = {



    login: function(req, res) {


       
    if (req.param('fakeinput') !== '') {
        return res.send({
            message: 'Are you sure you are a human?',
            user: false
        });
    }

    passport.authenticate('local', function(err, user, info){

      if((err) || (!user)) {
        return res.send({
          message: info.message,
          user
        });
      }
req.logIn(user, function(err) {
        if(err) res.send(err);
        return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  },
logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },


{% endhighlight %}



<h1>Step 4: Create the Views</h1>
We need somewhere for the user to login and register, so for this we’re going to create a couple of views

Create 2 files within the views folder called register.ejs and login.ejs. Set them up with a simple form like so:

<h1>register.ejs or signup.ejs</h1>

{% highlight ruby %}

<h1>Register</h1>
<form method="POST" action="/user">
  <input type="text" name="username" placeholder="Username">
  <input type="email" name="email" placeholder="Email Address">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="submit">
</form>

{% endhighlight %}



<h1>login.ejs</h1>



{% highlight ruby %}
<h1>Login</h1>
  <form method="POST" action="/login">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="submit">
</form>

{% endhighlight %}




<h1>Step 5: Configuring Routes</h1>
To make sure our users can register and login, we need to configure the Sails routing.
Open the config/routes.js file and add in the following lines:


{% highlight ruby %}

'GET /login': { 
  view: 'login' 
  },



'POST /login': 'AuthController.login',
'/logout': 'AuthController.logout',


'GET /register': {
   view: 'register' 
   
  }


{% endhighlight %}




<h1>Step 6: Configuring Middleware</h1>
To ensure Passport.js functions, we need to configure the Middleware in Sails to accept it. Open up the config/http.js file, and within the middleware section add the following lines:



{% highlight ruby %}

passportInit    : require('passport').initialize(),
passportSession : require('passport').session(),
    
    order: [
           'cookieParser',
           'session',
           'passportInit',
           'passportSession',
           'bodyParser',
           'compress',
           'poweredBy',
           'router',
           'www',
           'favicon',
         ],

{% endhighlight %}




<h1>Step 7: Define the Passport Strategy</h1>
This is where we define the different Passport Strategies. For now, we’re only interested in the Passport-Local strategy, however this file can be configured to accept any of the various Passport Strategies available.

Within your config folder, create a new file called passport.js and configure it like so:

{% highlight ruby %}

const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt = require('bcrypt');



passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb){
  User.findOne({id}, function(err, user) {
    cb(err, users);
  });
});


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
     
      bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            username: user.username,
            createdAt: user.createdAt,
            id: user.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));

{% endhighlight %}



<h1>Step 8: Results</h1>
Now when a user registers, you should see an entry in your database that looks like:

{% highlight ruby %}
{
    "_id": {
        "$oid": "59a004e57da8856b947d6d46"
    },
    "username": "JohnDoe",
    "email": "john.doe@egmail.com",
    "password": "$2a$10$wi5lfT5dBh.dH9X4DhU0u.cMzOEr2R8b2mMsY.wuwSh2FOH1..WKW",
    "createdAt": 1503659237714,
    "updatedAt": 1503659237714
}
{% endhighlight %}


In addition, the user model will be returned in JSON format with the password removed
{% highlight ruby %}

{
    createdAt: 1503659237714,
    updatedAt: 1503659237714,
    id: "59a004e57da8856b947d6d46",
    email: "john.doe@example.com",
    username: "JohnDoe"
}
{% endhighlight %}


This it, Hope you like my SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1. Please feel free to Fork, Star and Clone it. 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/salt-hash-password">Download</a> 
Link: <a href="https://github.com/SpaceG/salt-hash-password/">SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
