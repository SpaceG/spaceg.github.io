---
layout:     post
title:      "Nginx Port 80 changes and run sails.js via port 80"
subtitle:   "port changes"
date:       2015-10-11 14:00:44
author:     "Lucas Gatsas"
header-img: "img/3d-abstract_widewallpaper_misty-clouds-over-mountains_57245.jpg"
---

<h2 class="section-heading">Nginx Port 80 </h2>



To change the Port from Ngnix to :81 is very easy steps. : Open your path in your Terminal root. 
go to this path <code> /etc/nginx/sites-enabled/  </code> 



{% highlight ruby %}


/etc/nginx/sites-enabled/ 

{% endhighlight %}


<!--

<a href="{{ site.baseurl }}/img/p-4.png">
    <img src="{{ site.baseurl }}/img/p-4.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


--> 


<strong> The Code inside and port changes to :81</strong>


{% highlight ruby %}


root@webapp:/etc/nginx/sites-enabled# nano default

  GNU nano 2.2.6                            File: default                                                                


        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #       deny all;
        #}
}


# another virtual host using mix of IP-, name-, and port-based configuration
#
#server {
#       listen 81;
#       listen somename:81;
#       server_name somename alias another.alias;
#       root html;
#       index index.html index.htm;
#
#       location / {
#               try_files $uri $uri/ =404;
#       }
#}


# HTTPS server
#
#server {
#       listen 443;
#       server_name localhost:81;
#
#       root html;
#       index index.html index.htm;
#
#       ssl on;
#       ssl_certificate cert.pem;
#       ssl_certificate_key cert.key;
#
#       ssl_session_timeout 5m;
#
#       ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
#       ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
#       ssl_prefer_server_ciphers on;
#
#       location / {
#               try_files $uri $uri/ =404;
#       }
#}



{% endhighlight %}




Link: <a href="https://github.com/balderdashy/sails/issues/1361" target="_blank"> Github Issues 1361</a> 
Link: <a href="https://github.com/balderdashy/sails/issues/3292" target="_blank"> Github Issues 3292</a> 



<blockquote>
"Port Running on Linux Ubuntu Servers"
</blockquote>

