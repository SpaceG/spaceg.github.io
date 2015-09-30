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
I have done this Documentation after <a href="https://instagram.com/p/8FvYS6zgnO/?taken-by=lucasgatsas" target="_blank">zwogden</a> asked me about it on Instagram. 




First of all, do you need a <a href="https://www.raspberrypi.org/ " target="_blank">Raspberry Pi</a>  Pi to get this Tutorial and set up your <strong> Raspberry PI </strong> to your Mac.

Then you have to Set Up your Raspberry Pi on a Second Display with a Mouse and Keyboard. So i have this done this Way. Put all Cables to your Raspberry Pi and Connect it to your Display. Then Set Up and Install it Step by Step from the Raspberry Pi Interactive Descriptions (SD CARD etc.). Do your will get it. Don't worry, Very Easy. So now you have all Set Ups and Running your Raspberry Pi. 




<strong> Now we go Connect the Raspberry Pi to your Mac Os </strong> 

All of first do you have to Download the VNC Viewer <a href="https://www.realvnc.com/download/viewer/" target="_blank">here</a> Download the newest Version of <strong> VNC Viewer for Mac OS X
DMG Universal 5.2.3 </strong> The Install it on your Machine (Mac Os). 



First Open your Terminal in Mac Osx. Then Type 


(1.) <code> ping raspberrypi.local </code> 



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

(2.) <code> ssh pi@raspberrypi.local </code> 


Now do you will get to the ssh RSA Key, if you have one.  



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Space-O-Mac-Pro:~ cybo$ ssh pi@raspberrypi.local
The authenticity of host 'raspberrypi.local (10.0.0.3)' can't be established.
RSA key fingerprint is 7d:b7:30:bb:bc:78:97:da:3e:d8:e7:e7:7f:e4:a6:04.
Are you sure you want to continue connecting (yes/no)?

</pre></pre></div> 

Then Say <code>Yes/No </code> i typed Yes then i will be forward to the Passwort of my Raspberry. (The Pasword you can set up, by installing your Raspberry PI First Time. 



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Linux raspberrypi 3.18.11+ #781 PREEMPT Tue Apr 21 18:02:18 BST 2015 armv6l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Sep 28 00:04:24 2015
pi@raspberrypi ~ $ 


</pre></pre></div> 


Now :) , you entery and connect your Raspberry PI via Terminal on your Machine. 
Right After you entry your RaspberryPi via Termina, you have now to type the Commanline <code> ls </code> to see what is on your Raspberry Pi. As, we can see everything is fit to start the VNC Viewer (Server) promp this Commandline.

(3.) <code>sudo apt-get install tightvncserver </code> 

Don't be worry this need a while, after that process type Commandline 


(4.) <code> tightvncserver </code> 

you will get this Information out : Type your Password from your PI. After he ask you about a view-only password. Press (also for me )  <code> No </code> you will get forward to the desktop of your RaspberryPi. This Number after <code> pi:1 </code> is very important for our Viewer <code> :1 </code> This we need it for our VNC Viewer. 



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

You will require a password to access your desktops.

Password: 
Verify:   
Would you like to enter a view-only password (y/n)? no

New 'X' desktop is raspberrypi:1

Creating default startup script /home/pi/.vnc/xstartup
Starting applications specified in /home/pi/.vnc/xstartup
Log file is /home/pi/.vnc/raspberrypi:1.log



</pre></pre></div> 



At last we have to set up the VNC Viewer. Start it by Dopple Click then a Window will show up: 
In this Window type the scanned and pinged <code>IP</code> Adress also mine is here <strong> 10.0.0.3:</strong> 

Type in that Window The Number <strong> 10.0.0.3:1 </strong> Then Press Connect in the Interface. Pingo Here is it, you run now Linux RaspberryPi over Mac Os X Machine. 


Cheers!




ps: Install Video will come up soon. Stay Tuned!

<a href="{{ site.baseurl }}/img/pi1.png">
    <img src="{{ site.baseurl }}/img/pi1.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>



My Full Terminal Work: 

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Last login: Mon Sep 28 03:04:26 on ttys000
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
Space-O-Mac-Pro:~ cyberspace$ ssh pi@raspberrypi.local
The authenticity of host 'raspberrypi.local (10.0.0.4)' can't be established.
RSA key fingerprint is 7d:b7:30:bb:bc:78:97:da:3e:d8:e7:e7:7f:e4:a6:04.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'raspberrypi.local,10.0.0.4' (RSA) to the list of known hosts.
pi@raspberrypi.local's password: 
Linux raspberrypi 3.18.11+ #781 PREEMPT Tue Apr 21 18:02:18 BST 2015 armv6l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Sep 28 00:04:24 2015
pi@raspberrypi ~ $ ls
Desktop  python_games
pi@raspberrypi ~ $ sudo apt-get install tightvncserver
Paketlisten werden gelesen... Fertig
Abhängigkeitsbaum wird aufgebaut.       
Statusinformationen werden eingelesen.... Fertig
Die folgenden zusätzlichen Pakete werden installiert:
  xfonts-base
Vorgeschlagene Pakete:
  tightvnc-java
Die folgenden NEUEN Pakete werden installiert:
  tightvncserver xfonts-base
0 aktualisiert, 2 neu installiert, 0 zu entfernen und 0 nicht aktualisiert.
Es müssen 6.967 kB an Archiven heruntergeladen werden.
Nach dieser Operation werden 9.988 kB Plattenplatz zusätzlich benutzt.
Möchten Sie fortfahren [J/n]? ja
Holen: 1 http://mirrordirector.raspbian.org/raspbian/ wheezy/main tightvncserver armhf 1.3.9-6.4 [786 kB]
Holen: 2 http://mirrordirector.raspbian.org/raspbian/ wheezy/main xfonts-base all 1:1.0.3 [6.181 kB]
Es wurden 6.967 kB in 4 s geholt (1.570 kB/s).
Vormals nicht ausgewähltes Paket tightvncserver wird gewählt.
(Lese Datenbank ... 77851 Dateien und Verzeichnisse sind derzeit installiert.)
Entpacken von tightvncserver (aus .../tightvncserver_1.3.9-6.4_armhf.deb) ...
Vormals nicht ausgewähltes Paket xfonts-base wird gewählt.
Entpacken von xfonts-base (aus .../xfonts-base_1%3a1.0.3_all.deb) ...
Trigger für man-db werden verarbeitet ...
Trigger für fontconfig werden verarbeitet ...
tightvncserver (1.3.9-6.4) wird eingerichtet ...
update-alternatives: /usr/bin/tightvncserver wird verwendet, um /usr/bin/vncserver (vncserver) im Auto-Modus bereitzustellen
update-alternatives: /usr/bin/Xtightvnc wird verwendet, um /usr/bin/Xvnc (Xvnc) im Auto-Modus bereitzustellen
update-alternatives: /usr/bin/tightvncpasswd wird verwendet, um /usr/bin/vncpasswd (vncpasswd) im Auto-Modus bereitzustellen
xfonts-base (1:1.0.3) wird eingerichtet ...
pi@raspberrypi ~ $ tightvncserver

You will require a password to access your desktops.

Password: 
Verify:   
Would you like to enter a view-only password (y/n)? no

New 'X' desktop is raspberrypi:1

Creating default startup script /home/pi/.vnc/xstartup
Starting applications specified in /home/pi/.vnc/xstartup
Log file is /home/pi/.vnc/raspberrypi:1.log

pi@raspberrypi ~ $ 

</pre></pre></div> 




Link: <a href="https://instagram.com/p/8FvYS6zgnO/?taken-by=lucasgatsas"> Instagram Vid</a> 

<blockquote>
"Run Raspberry Pi over Mac Os X with ssh and vpn connect to Router Firewall by Lucas Gatsas"
</blockquote>

