---
layout:     post
title:      "Nmap Security Scanner for Linux-MAC-UNIX"
subtitle:   "Install Nmap for Mac Os X - For Sys/Network Admins"
date:       2015-05-02 14:00:44
author:     "Lucas Gatsas"
header-img: "img/mountains.jpg"
---
<h2 class="section-heading">Nmap for Mac Os X - Linux</h2>
<h2 class="section-heading">Nmap Security Scanner for Linux-MAC-UNIX </h2>



<strong> Was ist Nmap ? </strong> 


       Nmap ("Network Mapper") ist ein Open-Source-Werkzeug fA1/4r die
       Netzwerkanalyse und SicherheitsA1/4berprA1/4fung. Es wurde entworfen, um
       groAe Netzwerke schnell zu scannen, auch wenn es bei einzelnen Hosts auch
       gut funktioniert. Nmap benutzt rohe IP-Pakete auf neuartige Weise, um
       festzustellen, welche Hosts im Netzwerk verfA1/4gbar sind, welche Dienste
       (Anwendungsname und -version) diese Hosts bieten, welche Betriebssysteme
       (und Versionen davon) darauf laufen, welche Art von
       Paketfiltern/-Firewalls benutzt werden sowie Dutzende anderer
       Eigenschaften. Auch wenn Nmap A1/4blicherweise fA1/4r
       SicherheitsA1/4berprA1/4fungen verwendet wird, wird es von vielen Systemen
       und Netzwerkadministratoren fA1/4r Routineaufgaben benutzt, z.B.
       Netzwerkinventarisierung, Verwaltung von AblaufplAxnen fA1/4r
       Dienstaktualisierungen und die Aberwachung von Betriebszeiten von Hosts
       oder Diensten.



<strong> Install and Set Up </strong> 


Download it here <a href="https://nmap.org/download.html#macosx">nmap-6.47.dmg</a> or Run it with Terminal: First installl <a href="http://www.bzip.org/">bzip.org</a>! Promt
in your Temrinal follow the Commanlines: 

To install using <a href="https://www.macports.org/">MacPorts</a>, run <code> sudo port install nmap </code>. Nmap will be installed as <code> /opt/local/bin/nmap </code>. To uninstall, run sudo port uninstall nmap.


<!--
<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

var IE = null;

if (window.navigator.appName == "Microsoft Internet Explorer") {
  
  if (document.documentMode) {

    // Internet Explorer 8

    IE = document.documentMode; // documentMode = 8

    } else {


      // Internet Explorer 5-11

        IE = 5; //setzt the Quirks-Modus

          if (document.compatMode) {
  
      if (document.compatMode == "CSS1Compat")


      IE = 11; // IE11 Modus

      }
    }
  }

</pre></pre></div> -->

<code> nmap hostname </code> 



1.What computers did you find running on the local network?

2.What IP addresses did you find running on the local network?

3.What is the operating system of your target machine?

4.Find out what ports are open on the machine that you just scanned?

5.Find out if the system is infected with malware or virus.

6.Search for unauthorized servers or network service on your network.

7.Find and remove computers which don't meet the organization's minimum level of security.



Exmaple Diagram: 



                              +---------+
        +---------+           | Network |         +--------+
        | server1 |-----------+ swtich  +---------|server2 |
        +---------+           | (sw0)   |         +--------+
                              +----+----+
                                   |
                                   |
                         +---------+----------+
                         | wks01 Linux/OSX    |
                         +--------------------+


<blockquote id="strict-alert-red">
Port scanning may be illegal in some jurisdictions and Countrys. So be Aware! Scan Only <strong>your Network </strong> and <strong> Computers, Websites </strong> etc.  as follows:
</blockquote>


At last i have to lol. because i found this crazy thing here : 
<a href="http://nmap.org/movies/#elysium">Nmap in Movies!</a> 

Link: 
<a href="http://nmap.org/download.html#macosx">nmap.org</a> 







<blockquote>
This is a SwissWatch! :)
</blockquote>

