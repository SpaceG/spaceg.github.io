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
"Quote of the Operation : Gefahr entsteht, wenn der Mensch sich in seiner Position sicher fühlt. Verderben bedroht dem, der versucht, einen Zustand zu erhalten. Durcheinander entsteht, wenn wir alles ordnen. Daher vergißt der überlegene Mensch nicht die Gefahr, wenn er in Sicherheit ist. Der Weise vergißt nicht das Gespenst des Verderbens, wenn er sich in vollständigem Wohlstand befindet. Der Intelligente vergißt nicht das Durcheinander, wenn seine Geschäfte geordnet sind. 
"
</blockquote>

