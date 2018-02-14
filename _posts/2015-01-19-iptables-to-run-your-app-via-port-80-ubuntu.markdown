---
title:  "ipTabels Port 80 Ubuntu"
date:   2015-01-19 06:18:00
description: Create IP Tables on your Machine!
---
<h2 class="section-heading">ipTables</h2>

<h2 class="section-heading">Run Your Web App via port 80 on Ubuntu Linux Machine - Sails.js</h2>

{% highlight ruby %}


--iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT
--iptables -A INPUT -i eth0 -p tcp --dport 8080 -j ACCEPT
--iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080

{% endhighlight %}




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
