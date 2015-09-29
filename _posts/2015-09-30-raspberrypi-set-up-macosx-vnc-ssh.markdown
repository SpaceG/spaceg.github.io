---
layout:     post
title:      "Run Raspberry Pi over Mac Os X"
subtitle:   "Set Up"
date:       2015-09-30 14:00:44
author:     "Lucas Gatsas"
header-img: "img/lab1.jpg"
---
<h2 class="section-heading">Run Raspberry Pi over Mac Os X with ssh and vpn connect to Router Firewall</h2>

I Tried to connect the Raspberry Pi to one of my Routers. After some Trying it have worked already. 
I have done this Documentation after someone asked me about it on Instagram. 



First of all, do you need a <a href="https://www.raspberrypi.org/ " target="_blank">Raspberry Pi</a>  Pi to get this Tutorial and set up your <strong> Raspberry PI </strong> to your Mac.

Then you have to Set Up your Raspberry Pi on a Second Display with a Mouse and Keyboard. So i have this done this Way. Put all Cables to your Raspberry Pi and Connect it to your Display. Then Set Up and Install it Step by Step from the Raspberry Pi Interactive Descriptions (SD CARD etc.). Do your will get it. Don't worry, Very Easy. So now you have all Set Ups and Running your Raspberry Pi. 




<strong> Now we go Connect the Raspberry Pi to your Mac Os </strong> 

All of first do you have to Download the VNC Viewer <a href="https://www.realvnc.com/download/viewer/" target="_blank">here</a> Download the newest Version of <strong> VNC Viewer for Mac OS X
DMG Universal 5.2.3 </strong> The Install it on your Machine (Mac Os). 



First Open your Terminal in Mac Osx. Then Type 


1. <code> ping raspberrypi.local </code> 

After Ping your Network, do you will get your current <strong> IP </strong> from the Mac. Not the IP from your Provider. Then go forward in the same Terminal Window, type your <strong> ssh pi@raspberrypi.local </strong> the Promp with your Enter Taste. 

2. <code> ssh pi@raspberrypi.local </code> 


Now do you will get to the ssh RSA Key, if you have one 


<!--
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

</pre></pre></div> --> 






See the Issue Detail here on Github <a href="https://github.com/ncb000gt/node.bcrypt.js/issues/332"> issue332</a> 
Link: <a href="https://instagram.com/p/7KANPazgqD/?taken-by=lucasgatsas"> Instagram Vid</a> 

<blockquote>
"bcrypt Packages "
</blockquote>

