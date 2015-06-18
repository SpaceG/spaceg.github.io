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



Links: <a href="http://passportjs.org/">Passport.js</a>
Links: <a href="https://developer.github.com/v3/oauth/">v3 oauth - API
 - OAuth - Web Application Flow</a>
Links: <a href="https://dev.twitter.com/oauth">OAuth
Send secure authorized requests to the Twitter API</a>



<a href="http://space.lucasgatsas.ch/waves">space.lucasgatsas.ch/waves</a>

<br><br>






<br>
<blockquote>
“” 
</blockquote>

