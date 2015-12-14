---
layout:     post
title:      ".htaccess Rewrite Engine for C-Panel"
subtitle:   "Run .htaccess Code on Ubuntu Linux Server"
date:       2015-12-07 14:00:44
author:     "Lucas Gatsas"
header-img: "img/reed-flute-cave (4).jpg"
---

<h2 class="section-heading">.htaccess Rewrite Engine for C-Panel
</h2>

<br>
<strong>Linux System C- Panel </strong>





Permanent redirect from example.com to domain.com 

{% highlight ruby %}


         RewriteEngine On
         RewriteCond %{HTTP_HOST} ^example\.com$ [OR] 
         RewriteCond %{HTTP_HOST} ^www\.example\.com$ 
         RewriteRule ^/?$ "http\:\/\/domain\.com\/" [R=301,L]

         {% endhighlight %}


Temporary redirect from example.com to domain.com 

{% highlight ruby %}


         RewriteEngine On
         RewriteCond %{HTTP_HOST} ^example\.com$ [OR] 
         RewriteCond %{HTTP_HOST} ^www\.example\.com$ 
         RewriteRule ^/?$ "http\:\/\/domain\.com\/" [R=302,L]

         {% endhighlight %}


NOTE: below are the examples of permanent redirects. Temporary one can be defined by replacing [R=301,L] with [R=302,L] in the end of the code (where necessary). 


Redirect from example.com/subfolder to domain.com

{% highlight ruby %}


         RewriteEngine On
         RewriteCond %{HTTP_HOST} ^example\.com$ [OR] 
         RewriteCond %{HTTP_HOST} ^www\.example\.com$ 
         RewriteRule ^subfolder$ "http\:\/\/domain\.com\/" [R=301,L] 

         {% endhighlight %}


<strong>Redirect from HTTP to HTTPS</strong>


for any domain .htaccess takes effect on:

{% highlight ruby %}


         RewriteEngine On
         RewriteCond %{HTTPS} off 
         RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} 

         {% endhighlight %}


for a certain domain, example.com:

{% highlight ruby %}


         RewriteEngine On      
         RewriteCond %{SERVER_PORT} 80 
         RewriteRule ^(.*)$ https://www.example.com/$1 [R,L] 

         {% endhighlight %}


<strong>Redirect from non-WWW to WWW</strong>


for any domain .htaccess takes effect on:

{% highlight ruby %}


         RewriteEngine On 
         RewriteCond %{HTTP_HOST} !^www\. 
         RewriteRule ^(.*)$ http://www.%{HTTP_HOST}/$1 [R=301,L] 

         {% endhighlight %}


for a certain domain, example.com:

{% highlight ruby %}

         RewriteEngine On     
         RewriteCond %{HTTP_HOST} ^example\.com$ [NC] 
         RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L] 


{% endhighlight %}











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

for any domain .htaccess takes effect on:



{% highlight ruby %}

         RewriteEngine On
         RewriteCond %{HTTPS} off 
         RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} 



{% endhighlight %}


<br> 


<strong>Redirect from non-WWW to WWW</strong>
<br> 


for any domain .htaccess takes effect on:



{% highlight ruby %}

         RewriteEngine On 
         RewriteCond %{HTTP_HOST} !^www\. 
         RewriteRule ^(.*)$ http://www.%{HTTP_HOST}/$1 [R=301,L] 

{% endhighlight %}

<br> 


for a certain domain, example.com:



{% highlight ruby %}

         RewriteEngine On     
         RewriteCond %{HTTP_HOST} ^example\.com$ [NC] 
         RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L] 


{% endhighlight %}



<br> 




<strong>Redirect from WWW to non-WWW</strong>

for any domain .htaccess takes effect on:

{% highlight ruby %}


         RewriteEngine On
         RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC] 
         RewriteRule ^(.*)$ http://%1/$1 [R=301,L]


{% endhighlight %}


for a certain domain, example.com:

{% highlight ruby %}


         RewriteEngine On 
         RewriteCond %{HTTP_HOST} ^www\.example\.com [NC] 
         RewriteRule (.*) http://example.com/$1 [R=301,L]

         {% endhighlight %}



Changes the directory root for the main domain to public_html/subfolder

{% highlight ruby %}


         RewriteEngine on 
         RewriteCond %{HTTP_HOST} ^(www.)?example.com$ 
         RewriteCond %{REQUEST_URI} !^/subfolder/ 
         RewriteCond %{REQUEST_FILENAME} !-f 
         RewriteCond %{REQUEST_FILENAME} !-d 
         RewriteRule ^(.*)$ /subfolder/$1 
         RewriteCond %{HTTP_HOST} ^(www.)?example.com$ 
         RewriteRule ^(/)?$ subfolder/index.php [L] 

         {% endhighlight %}



NOTE: .htaccess file should be located in the directory root of the domain you wish to configure certain rules for. 


That's it!


Link: <a href="https://de.wikipedia.org/wiki/Rewrite-Engine" target="_blank"> Rewrite-Engine </a> 
Link: <a href="https://de.wikipedia.org/wiki/CPanel" target="_blank"> C-Panel </a> 




<blockquote>
"Update !!!
"
</blockquote>

