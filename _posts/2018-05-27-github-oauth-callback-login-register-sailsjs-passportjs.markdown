---
title:  "Github - oAuth Login / Register with SailsJS"
date:   2018-05-25 10:18:00
description: set only first name with proxy
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Get Github oAuth with passportjs for the SailsJs Framework</h2>




<iframe width="100%" height="515" src="https://www.youtube.com/embed/tkaZwl2Bd5E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



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
{% endhighlight %}






 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
