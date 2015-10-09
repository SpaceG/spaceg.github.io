---
layout:     post
title:      "ipTables - Run Port on 80 on Ubuntu Linux"
subtitle:   "Set Up ipTables"
date:       2015-10-10 14:00:44
author:     "Lucas Gatsas"
header-img: "img/3d-abstract_widewallpaper_misty-clouds-over-mountains_57245.jpg"
---
<h2 class="section-heading">ipTables</h2>

<h2 class="section-heading">Run Your Web App via port 80 on Ubuntu Linux Machine - Sails.js</h2>



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

--iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT
--iptables -A INPUT -i eth0 -p tcp --dport 8080 -j ACCEPT
--iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080

</pre></pre></div> 



<!--

<a href="{{ site.baseurl }}/img/p-4.png">
    <img src="{{ site.baseurl }}/img/p-4.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


--> 




Link: <a href="https://github.com/balderdashy/sails/issues/1361" target="_blank"> Github Issues 1361</a> 
Link: <a href="https://github.com/balderdashy/sails/issues/3292" target="_blank"> Github Issues 3292</a> 



<blockquote>
"Port Running on Linux Ubuntu Servers"
</blockquote>

