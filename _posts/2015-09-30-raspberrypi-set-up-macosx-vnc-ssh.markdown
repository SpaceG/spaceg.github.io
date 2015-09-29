---
layout:     post
title:      "Run Raspberry Pi over Mac Os X"
subtitle:   "Set Up"
date:       2015-09-30 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Pi2ModB1GB_-comp-1.jpeg"
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



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Space-O-Mac-Pro:~ cybo$ ping raspberrypi.local
PING raspberrypi.local (10.0.0.3): 56 data bytes
64 bytes from 10.0.0.3: icmp_seq=0 ttl=64 time=1.202 ms
64 bytes from 10.0.0.3: icmp_seq=1 ttl=64 time=0.554 ms
64 bytes from 10.0.0.3: icmp_seq=2 ttl=64 time=0.597 ms
64 bytes from 10.0.0.3: icmp_seq=3 ttl=64 time=0.544 ms
64 bytes from 10.0.0.3: icmp_seq=4 ttl=64 time=0.597 ms
64 bytes from 10.0.0.3: icmp_seq=5 ttl=64 time=0.553 ms
64 bytes from 10.0.0.3: icmp_seq=6 ttl=64 time=0.645 ms
64 bytes from 10.0.0.3: icmp_seq=7 ttl=64 time=0.674 ms
64 bytes from 10.0.0.3: icmp_seq=8 ttl=64 time=0.578 ms
64 bytes from 10.0.0.3: icmp_seq=9 ttl=64 time=0.581 ms
64 bytes from 10.0.0.3: icmp_seq=10 ttl=64 time=0.566 ms
64 bytes from 10.0.0.3: icmp_seq=11 ttl=64 time=0.614 ms
64 bytes from 10.0.0.3: icmp_seq=12 ttl=64 time=0.581 ms
64 bytes from 10.0.0.3: icmp_seq=13 ttl=64 time=0.577 ms
64 bytes from 10.0.0.3: icmp_seq=14 ttl=64 time=0.554 ms
64 bytes from 10.0.0.3: icmp_seq=15 ttl=64 time=0.590 ms
64 bytes from 10.0.0.3: icmp_seq=16 ttl=64 time=0.646 ms
64 bytes from 10.0.0.3: icmp_seq=17 ttl=64 time=0.641 ms
64 bytes from 10.0.0.3: icmp_seq=18 ttl=64 time=0.575 ms
64 bytes from 10.0.0.3: icmp_seq=19 ttl=64 time=0.602 ms
64 bytes from 10.0.0.3: icmp_seq=20 ttl=64 time=0.645 ms
^C
--- raspberrypi.local ping statistics ---
21 packets transmitted, 21 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.544/0.625/1.202/0.134 ms

</pre></pre></div> 


After Ping your Network, do you will get your current <strong> IP </strong> from the Mac. Not the IP from your Provider. Then go forward in the same Terminal Window, type your <strong> ssh pi@raspberrypi.local </strong> the Promp with your Enter Taste. 

2. <code> ssh pi@raspberrypi.local </code> 


Now do you will get to the ssh RSA Key, if you have one.  



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Space-O-Mac-Pro:~ cybo$ ssh pi@raspberrypi.local
The authenticity of host 'raspberrypi.local (10.0.0.3)' can't be established.
RSA key fingerprint is 7d:b7:30:bb:bc:78:97:da:3e:d8:e7:e7:7f:e4:a6:04.
Are you sure you want to continue connecting (yes/no)?

</pre></pre></div> 

Then Say <code>Yes/No </code> i typed Yes then i will be forward to the Passwort of my Raspberry. (The Pasword you can set up, by installing your Raspberry PI First Time.



See the Issue Detail here on Github <a href="https://github.com/ncb000gt/node.bcrypt.js/issues/332"> issue332</a> 
Link: <a href="https://instagram.com/p/7KANPazgqD/?taken-by=lucasgatsas"> Instagram Vid</a> 

<blockquote>
"bcrypt Packages "
</blockquote>

