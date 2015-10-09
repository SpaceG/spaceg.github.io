---
layout:     post
title:      "ipTables - Run Port on 80 on Ubuntu Linux"
subtitle:   "Set Up ipTables"
date:       2015-10-10 14:00:44
author:     "Lucas Gatsas"
header-img: "img/sep.jpg"
---
<h2 class="section-heading">ipTables</h2>

<h2 class="section-heading">Run Your Web App via port 80 on Ubuntu Linux Machine - Sails.js</h2>



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

--iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT
--iptables -A INPUT -i eth0 -p tcp --dport 8080 -j ACCEPT
--iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080

</pre></pre></div> 




PerfectWork: With Carbon based Lifeforms - Interloper!

<iframe width="100%" height="515" src="https://www.youtube.com/embed/-9pgIVcB3rk" frameborder="0" allowfullscreen></iframe>





<!--

<a href="{{ site.baseurl }}/img/p-4.png">
    <img src="{{ site.baseurl }}/img/p-4.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


--> 




Link: <a href="http://sailsjs.org/documentation/anatomy/my-app/config/local-js" target="_blank"> local.js</a> 
Link: <a href="http://superuser.com/questions/363353/http-localhost8080-is-not-working-on-running-apacher-server-through-xampp" target="_blank"> superuser</a> 
Link: <a href="https://github.com/balderdashy/sails/issues/1361" target="_blank"> sails issues</a> 
Link: <a href="http://stackoverflow.com/questions/32472139/nodejs-heroku-deploying-error" target="_blank"> Stack Overflow</a> 




<blockquote>
"i want, i want, i want , i want !!!!"
</blockquote>

