---
layout: post

#event information
title:  "Open SSL on a Nginx Linux Server"
cover: "http://rack.2.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2JiLzl0aGluZ3NidXNpLmNZbi5qcGcKcAl0aHVtYgkxMjAweDYyNyMKZQlqcGc/5d927a64/abc/9-things-businesses-need-to-know-about-web-security-e5e7ae36a9.jpg"
date:   2015-05-18
start_time: "10:00"
end_time: "17:00"

#event organiser details
organiser: "Lucas Gatsas"


---



<h2 class="section-heading">OpenSSL</h2>
<h2 class="section-heading">Install Transport Layer Security - Secure Sockets Layer (SSL)</h2>

<strong>Steps ( For Linux ) </strong>


<code>  wget http://www.openssl.org/source/openssl-1.0.2a.tar.gz  </code>

<code> tar -xvzf openssl-1.0.2a.tar.gz  </code>

<code>  cd openssl-1.0.2a </code>

<code>  ./config --prefix=/usr/ </code>

<code> make </code>

<code>  sudo make install  </code>





<!--
<a href="{{ site.baseurl }}/img/gli.png">
    <img src="{{ site.baseurl }}/img/gli.png" alt="Lucas Gatsas"  style="width:100%">
</a> -->


<br>
<br>

<strong>Steps ( For Mac Os X ) </strong>


<code> wget http://www.openssl.org/source/openssl-1.0.2a.tar.gz  </code>

<code> tar -xvzf openssl-1.0.2a.tar.gz</code>

<code> cd openssl-1.0.2a</code>

<code> ./Configure darwin64-x86_64-cc --prefix=/usr</code>

<code> make</code>

<code> sudo make install </code>


<strong>Verify the Installation</strong>

Verify that you have successfully installed OpenSSL.


<code>openssl version -a</code>


Link: <a href="https://github.com/openssl/openssl">OpenSSL</a> Link: <a href="http://www.openssl.org/source/">OpenSSL Website</a>

<br>
<blockquote>
“Zeit für etwas zu haben ist das Talent Dinge nach ihrer Wichtigkeit ordnen zu können” 
</blockquote>

