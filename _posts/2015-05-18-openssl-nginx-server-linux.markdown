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


<code>sudo openssl req -new -key server.key -out server.csr</code>








		You are about to be asked to enter information that will be incorporated
		into your certificate request.
		What you are about to enter is what is called a Distinguished Name or a DN.
		There are quite a few fields but you can leave some blank
		For some fields there will be a default value,
		If you enter '.', the field will be left blank.
		-----
		Country Name (2 letter code) [AU]:CH
		State or Province Name (full name) [Some-State]:St. Gallen
		Locality Name (eg, city) []:Saint City
		Organization Name (eg, company) [Internet Widgits Pty Ltd]:lucasgatsas.ch 
		Organizational Unit Name (eg, section) []:Dept of Engineering - IT NERDS
		Common Name (e.g. server FQDN or YOUR name) []:lucasgatsas@gmail.com                  
		Email Address []:lucasgatsas@example.com






<strong> Step Three—Remove the Passphrase </strong> 


<code> sudo cp server.key server.key.org </code> 
<code> sudo openssl rsa -in server.key.org 
	-out server.key </code> 


<strong> Step Four— Sign your SSL Certificate </strong> 


<code>  sudo openssl x509 -req -days 365 -in server.csr 
	-signkey server.key -out server.crt </code>


Link: <a href="https://github.com/openssl/openssl">OpenSSL</a> Link: <a href="http://www.openssl.org/source/">OpenSSL Website</a>


<br>
<blockquote>
“Zeit für etwas zu haben ist das Talent Dinge nach ihrer Wichtigkeit ordnen zu können” 
</blockquote>

