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




Rolling Your Own <code>CDN </code> – Build A 3 Continent CDN For $25 In 1 Hour


First create a folder <code>mkdir /dns</code>

Then run:
docker run <code> -d -p 53:53 -p 53:53/udp -v </code>
<code>/dns:/opt/geodns/dns 
	coocood/geodns /opt/geodns/geodns.</code>

Put zone files in /dns.

Zone file is <code> json </code> formatted, file name looks like "deployiotest.com.json", it's content looks like:




<strong>Step 1: Order a DNS instance from DigitalOcean.</strong> 

We chose SFO and the 2nd smallest instance.

We setup DNS info to point here (both NS1 and NS2 point here for ease of setup).  These are A records.

<br> 


<code>ns1.deploy.io    192.241.224.116 </code>
<code>ns2.deploy.io    192.241.224.116 </code>

<br>


<strong> Step 2: Install Docker and run with “coocood/geodns” image on the DNS instance</strong>

See https://index.docker.io/u/coocood/geodns for detail.


<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>


	{
	"serial":1394372421,
	"ttl":    390,
	"targeting": "country continent @ regiongroup region asn",
	"data":{
	    "":{
	        "ns": [ "ns1.deploy.io", "ns2.deploy.io" ],
	        "a":[
	            [
	               "107.170.45.174",
	               "1000"
	            ],
	            [
	               "128.199.216.96",
	               "1000"
	            ],
	            [
	               "107.170.251.75",
	               "1000"
	            ],
	            [
	               "188.226.185.173",
	               "1000"
	            ]
	        ]
	    },
	    "www":{
	        "alias": ""    
	    },
	    "www.us-west":{
	        "cname": "test-sfo-do.deploy.io."    
	    },
	    "www.europe":{
	        "cname": "test-ams-do.deploy.io."    
	    },
	    "www.asia":{
	        "cname": "test-sin-do.deploy.io."    
	    },
	    "www.us-east":{
	        "cname": "test-jfk-do.deploy.io."    
	    }
	  }
	}

</pre></pre></div>







<strong>SEE THE CDN GEO DNS WORKING</strong> 

<a href="{{ site.baseurl }}/img/dns-geo.png">
    <img src="{{ site.baseurl }}/img/dns-geo.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>



<a href="{{ site.baseurl }}/img/dns-geo-cdn.png">
    <img src="{{ site.baseurl }}/img/dns-geo-cdn.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>



Link: <a href="https://hub.docker.com/r/coocood/geodns/" target="_blank">Geo DNS - CDN Servers</a> Link: <a href="https://www.digitalocean.com/" target="_blank"> Digital Ocean </a> Link: <a href="http://nginx.org/" target="_blank"> Nginx </a>






see <a href="https://github.com/abh/geodns" target="_blank">Geo DNS - CDN Servers</a> for more detail


<blockquote>
"HUB DOCKER coocood/geodns - Build, Ship, and Run
Any App, Anywhere"
</blockquote>

