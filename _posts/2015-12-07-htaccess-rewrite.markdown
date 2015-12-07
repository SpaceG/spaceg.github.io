---
layout:     post
title:      ".htaccess Rewrite Engine for C-Panel"
subtitle:   "Run .htaccess Code on Ubuntu Linux Server"
date:       2015-12-07 14:00:44
author:     "Lucas Gatsas"
header-img: "img/3d-abstract_widewallpaper_misty-clouds-over-mountains_57245.jpg"
---

<h2 class="section-heading">Broken Pipe - Write failed: Broken pipe
</h2>



<br><br><br> 
Linux System



<br> 
<br>
<strong>Redirect from HTTP to HTTPS</strong>

for a certain domain, example.com:

{% highlight ruby %}




         RewriteEngine On      
         RewriteCond %{SERVER_PORT} 80 
         RewriteRule ^(.*)$ https://www.yourspace.com/$1 [R,L] 



{% endhighlight %}

<br> 

<strong>for any domain .htaccess takes effect on:</strong>



{% highlight ruby %}

         RewriteEngine On
         RewriteCond %{HTTPS} off 
         RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} 



{% endhighlight %}





<strong>for any domain .htaccess takes effect on:</strong>

<br> 


<strong>Redirect from non-WWW to WWW</strong>
<br> 


<strong>for any domain .htaccess takes effect on:</strong>



{% highlight ruby %}

         RewriteEngine On 
         RewriteCond %{HTTP_HOST} !^www\. 
         RewriteRule ^(.*)$ http://www.%{HTTP_HOST}/$1 [R=301,L] 

{% endhighlight %}

<br> 


<strong>for a certain domain, example.com:</strong>



{% highlight ruby %}

         RewriteEngine On     
         RewriteCond %{HTTP_HOST} ^example\.com$ [NC] 
         RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L] 


{% endhighlight %}



<br> 



Link: <a href="http://askubuntu.com/questions/127369/how-to-prevent-write-failed-broken-pipe-on-ssh-connection" target="_blank"> Linux Ubuntu Broken Pipe </a> 

<!-- 
Link: <a href="https://github.com/balderdashy/sails/issues/3292" target="_blank"> Github Issues 3292</a>  --> 



<blockquote>
"Port Running on Linux Ubuntu Servers"
</blockquote>

