---
layout:     post
title:      "oAuth - Github - Twitter Api"
subtitle:   "Sign Up and Sign In with oAuth"
date:       2015-06-17 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Lucas_Gatsas_lucas_gatsas_0260.jpg"
---
<h2 class="section-heading">oAuth - Github - Twitter Api</h2>
<h2 class="section-heading">"SignIn and SignUp - Callback"</h2>

<br>

Now do some Back End and Front End for oAuth Sign Up and Sign In with Twitter and Github. We Use the <a href="http://lucasgatsas.ch/2015/01/17/sails.js/" target="_blank">Implement Passport.js authentication with Sails.js ~0.10</a>

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>


passport.use(new TwitterStrategy({
    consumerKey: 'zhtzjtzjtrzjrzbv437bfgfg',
    consumerSecret: '0FsA6435634765wgzfcegcfzgeuwr37ezrrt77bhrtg',
    callbackURL: "http://localhost:1337/auth/twitter/callback"
  },
  oAuthCallback
));

passport.use(new GitHubStrategy({
    clientID: '654457zsthdfghsh4545654z645z6',
    clientSecret: 'dgedshernwrtz7564546dfvbfv34t4tertertretgreter',
    callbackURL: "http://localhost:1337/auth/github/callback"
  },
  oAuthCallback
));


</pre></pre></div>



Links: <a href="http://passportjs.org/" target="_blank">Passport.js</a>
Links: <a href="https://developer.github.com/v3/oauth/" target="_blank">v3 oauth - API
 - OAuth - Web Application Flow</a>
Links: <a href="https://dev.twitter.com/oauth" target="_blank">OAuth
Send secure authorized requests to the Twitter API</a>
Links: <a href="https://github.com/balderdashy/waterline" target="_blank">Waterline.js</a>
Links: <a href="http://sailsjs.org/#!/" target="_blank">sails.js</a>




<a href="http://space.lucasgatsas.ch/waves" target="_blank">space.lucasgatsas.ch/waves</a>

<br><br>






<br>
<blockquote>
“Die Wahrheit ist, es hat niemals auf der Welt viele bemerkenswerte Leute gegeben. Die meisten stützen sich ständig auf den Typ gerade neben ihnen - und fragen, was sie tun sollen.” 
</blockquote>

