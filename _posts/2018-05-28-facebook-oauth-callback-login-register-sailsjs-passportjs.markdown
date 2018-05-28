---
title:  "Facebook - oAuth Login / Register with SailsJS"
date:   2018-05-28 10:18:00
description: Get authentication for Facebook
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Get Facebook oAuth with passportjs for the SailsJs Framework</h2>




<iframe width="100%" height="515" src="https://www.youtube.com/embed/c2sL2eXOyC4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h1>This is the passportJS file for the oAuth</h1>




{% highlight ruby %}



passport.use(new TwitterStrategy({
    consumerKey: 'YQKoiGgFsFcQRIKXrLqMW1RG0',
    consumerSecret: 'CjaYASh5raoV9RuGQmhh0VFp3o80YMyJn6OutB9HNZtasfm0FV',
    callbackURL: "http://localhost:1337/auth/twitter/callback"
  },

function(token, tokenSecret, profile, done) {
  User.findOrCreate(data, function(err, user) {
    if (err) { return done(err); }
    done(null, user);
  });
}
));




passport.use(new GitHubStrategy({
  clientID: '89d03b1f560e93d911be',
  clientSecret: 'b4ea5e9aad5e36d6bbb9f1e3a851575bb0fc2eaf',
  callbackURL: "http://localhost:1337/auth/github/callback"
},

function(token, tokenSecret, profile, done) {
User.findOrCreate(data, function(err, user) {
  if (err) { return done(err); }
  done(null, user);
});
}
));



passport.use(new FacebookStrategy({
  clientID: '169553873736123',
  clientSecret: '3dfef9e57f803b5879700a27d9ff81c3',
  callbackURL: "http://localhost:1337/auth/facebook/callback"
},

function(token, tokenSecret, profile, done) {
User.findOrCreate(data, function(err, user) {
  if (err) { return done(err); }
  done(null, user);
});
}
));

));
{% endhighlight %}

like the other oauth login  with the passportjs, this mean, you can also go a head wtih some of your socialmedia accounts for the configuration in passport.js file in your sails.js app. 

like this example below. : 


{% highlight ruby %}
passport.use(new FacebookStrategy({
  clientID: '169553873736123',
  clientSecret: '3dfef9e57f803b5879700a27d9ff81c3',
  callbackURL: "http://localhost:1337/auth/facebook/callback"
},

function(token, tokenSecret, profile, done) {
User.findOrCreate(data, function(err, user) {
  if (err) { return done(err); }
  done(null, user);
});
}
));

{% endhighlight %}


This Tutorial Shows you, how to login with oAuth ( Callback ) Funtion with Facebook Api,  clientID and clientSecret ! 

Get Sails JS: <a href="https://sailsjs.com">Download Sails.JS</a>


Get PassportJS: <a href="http://www.passportjs.org/docs/facebook/">http://www.passportjs.org/docs/facebook/</a>

Get Facebook Api Facebook Developers Docs: 
 <a href="https://developers.facebook.com/docs/facebook-login/access-tokens#">https://developers.facebook.com/docs/facebook-login/access-tokens#
</a>

Access Token Keys : 
<a href="https://developers.facebook.com/tools/accesstoken/">https://developers.facebook.com/tools/accesstoken/
</a>

in the AuthController.js file you can also configure your details for the connection and the callback from Facebook!

like below in the Code!


{% highlight ruby %}

facebook: function(req, res){

  passport.authenticate('facebook')(req,res);

},

facebookCallback: function(req, res){
  
   passport.authenticate('facebook', { failureRedirect: '/login' }, function(err, user) {
    req.logIn(user, function(err) {


      res.redirect('/');
      return;
    });
  })(req, res);

},
{% endhighlight %}




Hope you Like IT :)



Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
