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








Link: <a href="https://hub.docker.com/r/coocood/geodns/">Geo DNS - CDN Servers</a>



<blockquote>
"HUB DOCKER coocood/geodns - Build, Ship, and Run
Any App, Anywhere"
</blockquote>

