---
title:  "NMAP MAC OS"
date:   2010-02-01 06:18:00
description: Install NMAP - NetWork Scanner
---

<h2 class="section-heading">Nmap for Mac Os X - Linux</h2>
<h2 class="section-heading">Nmap Security Scanner for Linux-MAC-UNIX </h2>


<blockquote>

<strong> Was ist Nmap ? </strong>


       Nmap ("Network Mapper") ist ein Open-Source-Werkzeug für die
       Netzwerkanalyse und Sicherheitsüberprüfung. Es wurde entworfen, um
       groAe Netzwerke schnell zu scannen, auch wenn es bei einzelnen Hosts auch
       gut funktioniert. Nmap benutzt rohe IP-Pakete auf neuartige Weise, um
       festzustellen, welche Hosts im Netzwerk verfügbar sind, welche Dienste
       (Anwendungsname und -version) diese Hosts bieten, welche Betriebssysteme
       (und Versionen davon) darauf laufen, welche Art von
       Paketfiltern/-Firewalls benutzt werden sowie Dutzende anderer
       Eigenschaften. Auch wenn Nmap üblicherweise für
       Sicherheitsüberprüfungen verwendet wird, wird es von vielen Systemen
       und Netzwerkadministratoren für Routineaufgaben benutzt, z.B.
       Netzwerkinventarisierung, Verwaltung von AblaufplAxnen für
       Dienstaktualisierungen und die Aberwachung von Betriebszeiten von Hosts
       oder Diensten.


</blockquote>
<br>


{% highlight ruby %}
$ nmap -sP 192.168.0.1-25
{% endhighlight %}

<strong> Install and Set Up </strong>



Download it here <a href="https://nmap.org/download.html#macosx">nmap-6.47.dmg</a> or Run it with Terminal: First installl <a href="http://www.bzip.org/">bzip.org</a>! Promt
in your Temrinal follow the Commanlines:

To install using <a href="https://www.macports.org/">MacPorts</a>, run <code> sudo port install nmap </code>. Nmap will be installed as <code> /opt/local/bin/nmap </code>. To uninstall, run sudo port uninstall nmap.

<strong> Example Ports Show Up after entire NetWork Scanning! </strong>

{% highlight ruby %}

PORT STATE SERVICE

22/tcp open ssh

80/tcp open http

445/tcp open microsoft-ds

548/tcp open afp

6817/tcp open unknown
{% endhighlight %}


<code> nmap hostname </code>


1.What computers did you find running on the local network?

2.What IP addresses did you find running on the local network?

3.What is the operating system of your target machine?

4.Find out what ports are open on the machine that you just scanned?

5.Find out if the system is infected with malware or virus.

6.Search for unauthorized servers or network service on your network.

7.Find and remove computers which don't meet the organization's minimum level of security.


<strong> Scan & List a Range of Local Network IP’s </strong>

You will find some Information about other Machines on your Localhost Network. Your Lan has an IP range of example  <code> 192.169.0.1</code> to <code> 192.169.0.25 </code> change numbers as appropritae:


<code>nmap -sP 192.168.0.1-25</code>

<code>nmap -sP 192.168.0.1-25</code>


If you don’t know the range, you can also use wildcards:



<code>nmap 192.168.0.*</code>


<strong>Scan & Detect Operating System</strong>


<code>
nmap -O 192.168.0.1-5</code>



<code>
nmap --osscan-guess 192.168.0.2 </code>


Exmaple Diagram:

{% highlight ruby %}


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

{% endhighlight %}


<blockquote id="strict-alert-red">
Port scanning may be illegal in some jurisdictions and Countrys. So be Aware! Scan Only <strong>your Network </strong> and <strong> Computers, Websites </strong> etc.  as follows:
</blockquote>


At last i have to lol. because i found this crazy thing here :
<a href="http://nmap.org/movies/#elysium">Nmap in Movies!</a>

Link:
<a href="http://nmap.org/download.html#macosx">nmap.org</a>




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
