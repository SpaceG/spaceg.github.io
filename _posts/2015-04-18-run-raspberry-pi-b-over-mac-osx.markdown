---
layout:     post
title:      "Run Raspberry PI over Mac Os X"
subtitle:   "Work with Raspberry PI"
date:       2015-04-18 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Alufolie-4955-Bearbeitet_1920.jpg"
---

<h2 class="section-heading"><strong>Installing Linux </strong> </h2>
<h2 class="section-heading">Localhost - Server </h2>








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

