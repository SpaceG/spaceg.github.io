---
layout:     post
title:      "Ejs - Highlighter for Sublime Text 2"
subtitle:   "Scalability CDN SERVERS, Performance via GeoDNS"
date:       2015-08-30 14:00:44
author:     "Lucas Gatsas"
header-img: "img/https://packagecontrol.io/readmes/img/b6da1854601a9ad66077bf93565562719ee30ce9.gif"
---
<h2 class="section-heading">Geo DNS - CDN Servers</h2>
<h2 class="section-heading">"CDN SERVERS, Performance via GeoDNS, Get fast Speed, Nginx Server"</h2>



<br> 



<a href="{{ site.baseurl }}/img/1789766_orig1.png">
    <img src="{{ site.baseurl }}/img/1789766_orig1.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>

<br> 



<strong> Setup 4: Setup a test domain for the CDN:</strong> 



If you lookup deployiotest.com the 4 web servers are chosen randomly

If you look up www.deployiotest.com, it will go to the closest geo server.

Set the name servers to point to:

<br> 

<code> ns1.deploy.io 192.241.224.116 </code>
<code> ns2.deploy.io 192.241.224.116 </code>


<br>   



<strong>SEE THE CDN GEO DNS WORKING</strong> 

<a href="{{ site.baseurl }}/img/dns-geo.png">
    <img src="{{ site.baseurl }}/img/dns-geo.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>

<br> 


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


<br> 

<strong> Step 5: Verify that your <strong>  <code> CDN </code> <strong>  is working using </strong> <code> JustPing.com </code> 




Just test it on <code> www.just-ping.com. </code>

<code> Todo </code> 





<br> 

Note: a comment from akerl_ on HN pointed out “the article doesn’t point out the serious risk of running a single DNS server for the records”. It’s a good point. Think before production – this is intended as an example


<br> 

Add a way to take servers in and out of rotation using a little daemon on the geodns server


<br> 


Tune the Geo map for places outside of the US/Europe and Asia.

<br>

Add more virtual servers from other providers

<br>

Add a way to spin up servers using lib-cloud

<br> 






<a href="{{ site.baseurl }}/img/dns-geo-cdn.png">
    <img src="{{ site.baseurl }}/img/dns-geo-cdn.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>



Link: <a href="https://hub.docker.com/r/coocood/geodns/" target="_blank">Geo DNS - CDN Servers</a> Link: <a href="https://www.digitalocean.com/" target="_blank"> Digital Ocean </a> Link: <a href="http://nginx.org/" target="_blank"> Nginx </a>






see <a href="https://github.com/abh/geodns" target="_blank">Geo DNS - CDN Servers</a> for more detail


<blockquote>
"HUB DOCKER coocood/geodns - Build, Ship, and Run
Any App, Anywhere"
</blockquote>

