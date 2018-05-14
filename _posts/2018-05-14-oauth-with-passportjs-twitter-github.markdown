---
title:  "oAuth with PassportJS & SailsJS"
date:   2018-05-14 10:18:00
description: Login with oAuth in Facebook, Twitter, Github...
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Create a Login script which allow users to login and signup with social media accounts.</h2>

<h1>Step 1: Sign Up into your Developer Account</h1>

First you have also create your api via your social media accounts, like Facebook, Twitter, Github and so on.. 
Create your Api : <a href="https://apps.twitter.com/">apps.twitter.com/</a>

Create your Secret Key: 

{% highlight ruby %}



{% endhighlight %}


<h1>Step 2: Install your Dep</h1>

Download : <a href="https://www.npmjs.com/package/passport-twitter">passport-twitter</a>

Commandline:
{% highlight ruby %}

$ npm install passport-twitter --save
$ npm install passport-facebook --save
$ npm install passport-github --save

{% endhighlight %}



Input this to your <code>passport.js</code> file.

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


{% endhighlight %}





Input this to your <code>AuthController.js</code> file.



{% highlight ruby %}



twitter: function(req, res){

    passport.authenticate('twitter')(req,res);

  },

  twitterCallback: function(req, res){
  	
		 passport.authenticate('twitter', { failureRedirect: '/login' }, function(err, user) {
      req.logIn(user, function(err) {
  

        res.redirect('/');
        return;
      });
    })(req, res);

  },

{% endhighlight %}


Input this to your <code>routes.js</code> file.


{% highlight ruby %}

 '/': {
    view: 'pages/homepage'
  },

  'GET /login': { 
    view: 'login' 
  },

  'POST /login': 'AuthController.login',
  
  '/logout': 'AuthController.logout',


  'get /auth/twitter' : 'AuthController.twitter',

  'get /auth/twitter/callback' : 'AuthController.twitterCallback',

  
  'get /auth/github' : 'AuthController.github',

  'get /auth/github/callback' : 'AuthController.githubCallback',

  


  'GET /register': { 
    view: 'register' 
  }

{% endhighlight %}





Reade More @ our Files: 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Go Read</a> 
Link: <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Read More about on my Gist File.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
