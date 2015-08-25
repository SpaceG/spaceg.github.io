---
layout:     post
title:      "Create a GeoDNS"
subtitle:   "Scalability CDN SERVERS, Performance via GeoDNS"
date:       2015-08-25 14:00:44
author:     "Lucas Gatsas"
header-img: "img/deskto-1.jpg"
---
<h2 class="section-heading">Geo DNS - CDN Servers</h2>
<h2 class="section-heading">"CDN SERVERS, Performance via GeoDNS, Get fast Speed, Nginx Server"</h2>



First create a folder mkdir /dns

Then run:
docker run -d -p 53:53 -p 53:53/udp -v /dns:/opt/geodns/dns coocood/geodns /opt/geodns/geodns.

Put zone files in /dns.

Zone file is json formatted, file name looks like "deployiotest.com.json", it's content looks like:




<strong>Install MongoDB</strong>

You can install MongoDB with <strong>Homebrew</strong> or manually. This section describes both.





<code> brew install mongodb --devel</code> 


<strong> Install MongoDB Manually </strong> 
Only install MongoDB using this procedure if you cannot use homebrew.









Link: <a href="https://www.mongodb.org">Mongo DB</a>



<blockquote>
"HUB DOCKER coocood/geodns - Build, Ship, and Run
Any App, Anywhere"
</blockquote>

