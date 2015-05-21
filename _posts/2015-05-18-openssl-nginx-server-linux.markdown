---
layout:     post
title:      "OpenSSL - Os X - Linux on nginx Server Linux"
subtitle:   "Run it over https"
date:       2015-05-18 14:00:44
author:     "Lucas Gatsas"
header-img: "img/mirror.jpg"
---
<h2 class="section-heading">How To Create a SSL Certificate on nginx for Ubuntu 12.04</h2>
<h2 class="section-heading">Install Transport Layer Security - Secure Sockets Layer (SSL)</h2>

<strong> Set Up </strong> 


<code> $ sudo apt-get install nginx </code>


<strong> Step One—Create a Directory for the Certificate </strong> 


<code>sudo mkdir /etc/nginx/ssl</code>


We will perform the next few steps within the directory:


<code>  cd /etc/nginx/ssl </code> 


<strong>Step Two—Create the Server Key and Certificate Signing Request</strong> 


<code> sudo openssl genrsa -des3 -out server.key 2048 </code>


Follow up by creating a certificate signing request:





Link: <a href="https://github.com/openssl/openssl">OpenSSL</a> Link: <a href="http://www.openssl.org/source/">OpenSSL Website</a>


<br>
<blockquote>
“Zeit für etwas zu haben ist das Talent Dinge nach ihrer Wichtigkeit ordnen zu können” 
</blockquote>

