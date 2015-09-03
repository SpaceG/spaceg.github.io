---
layout:     post
title:      "bcrypt Issue on your Local Machine"
subtitle:   "Changes"
date:       2015-09-04 14:00:44
author:     "Lucas Gatsas"
header-img: "img/scanda.jpg"
---
<h2 class="section-heading"> bcrypt Issue on your Local Machine - node.bcrypt.js</h2>


To Fix Bug Issue can be very hard, even do you have Time for it. It's like to Waste Time. get my App back to machine thanks with a Commandline. 


<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Space-Odysseys-Mac-Pro:www cyberspace$ sails lift

info: Starting app...

/Users/cyberspace/Desktop/www/node_modules/bcrypt/node_modules/bindings/bindings.js:83
throw e
^
Error: dlopen(/Users/cyberspace/Desktop/www/node_modules/bcrypt/build/Release/bcrypt_lib.node, 1): no suitable image found. Did find:
/Users/cyberspace/Desktop/www/node_modules/bcrypt/build/Release/bcrypt_lib.node: unknown file type, first eight bytes: 0x7F 0x45 0x4C 0x46 0x02 0x01 0x01 0x03
at Error (native)
at Module.load (module.js:355:32)
at Function.Module._load (module.js:310:12)
at Module.require (module.js:365:17)
at require (module.js:384:17)
at bindings (/Users/cyberspace/Desktop/www/node_modules/bcrypt/node_modules/bindings/bindings.js:76:44)
at Object. (/Users/cyberspace/Desktop/www/node_modules/bcrypt/bcrypt.js:3:35)
at Module._compile (module.js:460:26)
at Object.Module._extensions..js (module.js:478:10)
at Module.load (module.js:355:32)
at Function.Module._load (module.js:310:12)
at Module.require (module.js:365:17)
at require (module.js:384:17)
at Object. (/Users/cyberspace/Desktop/www/config/passport.js:5:10)
at Module._compile (module.js:460:26)
at Object.Module._extensions..js (module.js:478:10)
Space-Odysseys-Mac-Pro:www cyberspace$

</pre></pre></div>

I was Stuck at this Point. My machine has a Total Crash with the Modules and bcrypts. There are Bindings which give me a Bug back after re-install <code>$ npm -v </code> !
After 4 Hours i have sloved the Bug. ! Thanks this commandline <code> $ npm install bcrypt </code> 


See the Issue Detail here on Github <a href="https://github.com/ncb000gt/node.bcrypt.js/issues/332"> issue332</a> 
Link: <a href="https://instagram.com/p/7KANPazgqD/?taken-by=lucasgatsas"> Instagram Vid</a> 

<blockquote>
"bcrypt Packages "
</blockquote>

