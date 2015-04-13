---
layout:     post
title:      "Installing nginx on OS X Yosemite"
subtitle:   "Use nginx for Bigger Websites and Start Ups."
date:       2015-04-12 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Alufolie-4955-Bearbeitet_1920.jpg"
---

<h2 class="section-heading"><strong>Installing nginx on OS X Yosemite</strong> </h2>
<h2 class="section-heading">Localhost - Server </h2>


<strong> Install Brew</strong> : First you have also Install [brew.sh](http://git-scm.com/)  on your Machine! Go Install Brew and all Packages:

<code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/
  Homebrew/install/master/install)"</code> 

More About: [ruby.org](https://www.ruby-lang.org/de/documentation/installation/#building-from-source) 


After Install Brew: Follow these Steps : 

<h2 class="section-heading">Installing nginx on OS X
</h2>


To install nginx, simply open up the Terminal and enter the following command.

<code> brew install nginx</code>

That’s it! Assuming that no errors occurred, then nginx is ready to start. But let’s first change the default port.



<strong>Notice: if you get an error : </strong>

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

Space-Odysseys-Mac-Pro:~ cyberspace$ brew install nginx
/usr/local/bin/brew: /usr/local/Library/brew.rb: /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby: bad interpreter: No such file or directory
/usr/local/bin/brew: line 21: /usr/local/Library/brew.rb: Undefined error: 0 

</pre></pre></div>


<a href="#">
    <img src="{{ site.baseurl }}/img/done-ruby-.png" alt="Lucas Gatsas"  style="width:100%">
</a>




Try this out: very simple: 

Open Terminal and Type : 

<code> cd /usr/local/Library </code>

<code>git pull origin master  </code>

Or if you you go with sudo, then type :

<code> sudo git pull origin master </code> 






In case you have changes in the directory (/usr/local/Library), the git pull will throw an error. In that case, you'll have to fetch the master branch and set it forcibly as master:



<code> git fetch --all </code> 

<code> git reset --hard origin/master </code> 



  This will upgrade your homebrew and you can use brew again.


<a href="#">
    <img src="{{ site.baseurl }}/img/ruby-done-1.png" alt="Lucas Gatsas"  style="width:100%">
</a>


If you installed Homebrew as a non-root user, you'll need to cd to <code> /Users/yourusername/homebrew/Library</code> instead of <code>/usr/local/Library.</code>





<a href="#">
    <img src="{{ site.baseurl }}/img/nginx-install-4-700.png" alt="Lucas Gatsas"  style="width:100%">
</a>




<a href="#">
    <img src="{{ site.baseurl }}/img/concurrency.png" alt="Lucas Gatsas"  style="width:100%">
</a>



<blockquote>

</blockquote>

