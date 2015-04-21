---
layout:     post
title:      "Installing nginx on a Virtual Server"
subtitle:   "Set Up it to Digital Ocean"
date:       2015-04-21 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Alufolie-4955-Bearbeitet_1920.jpg"
---

<h2 class="section-heading"><strong>nginx on a Virtual server</strong> </h2>
<h2 class="section-heading">Localhost - Server </h2>







In case you have changes in the directory (/usr/local/Library), the git pull will throw an error. In that case, you'll have to fetch the master branch and set it forcibly as master:



<code> git fetch --all </code> 

<code> git reset --hard origin/master </code> 



  This will upgrade your homebrew and you can use brew again.


<a href="#">
    <img src="{{ site.baseurl }}/img/ruby-done-1.png" alt="Lucas Gatsas"  style="width:100%">
</a>


If you installed Homebrew as a non-root user, you'll need to cd to <code> /Users/yourusername/homebrew/Library</code> instead of <code>/usr/local/Library.</code>



<h2 class="section-heading"><strong>Changing nginx’ Default Port to 80</strong> </h2>
<h2 class="section-heading">8080 - default port</h2>


By default, nginx listens to <code> port 8080 </code>, but let us change that to the default HTTP port, which is 80. To do that, we need to make a simple change to the configuration file <code>  /usr/local/etc/nginx/nginx.conf. </code> You can do this with any text editor such as <code>vi</code> or <code>nano</code>


<code>sudo vi /usr/local/etc/nginx/nginx.conf</code>


Scroll a bit down and you should see the following.


<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }
        
        ...       
}

</pre></pre></div>

What you want to do is to simple change the number 8080 to 80 next to the listen keyword.



<h2 class="section-heading">Testing</h2>


To start up nginx, simply enter the following command in the Terminal.


<code>sudo nginx</code>

nginx should now start up, and you can test that everything works by navigating to <code>http://localhost</code> in your browser.

<a href="#">
    <img src="{{ site.baseurl }}/img/concurrency.png" alt="Lucas Gatsas"  style="width:100%">
</a>

If you have problems starting up nginx, a common problem is that the port that nginx is configured to listen to is already in use. If you changed the port to <code>80</code>, then this could be an Apache web server or Skype, for instance.

Should you need to stop nginx, then you can do so with the below command.

<code>sudo nginx -s stop</code>

As you have seen, nginx is very simple to install and set up on OS X Yosemite!


<a href="#">
    <img src="{{ site.baseurl }}/img/realtime4.jpg" alt="Lucas Gatsas"  style="width:100%">
</a>

<blockquote>
“Best startups generally come from somebody needing to scratch an itch.” -Michael Arrington, TechCrunch 
</blockquote>

