---
title:  "SSH Key on Mac Os"
date:   2015-01-29 06:18:00
description: Secure Shell - SSH - Key on Mac Os 
---


<h2 class="section-heading"><strong> Secure Shell - SSH - Key on Mac Os X </strong> </h2>
<h2 class="section-heading">The Key Set Up.</h2>

<a href="{{ site.baseurl }}/img/bash-ssh-1.png">
    <img src="{{ site.baseurl }}/img/bash-ssh-1.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


This is also my Commandline: 

{% highlight ruby %}
$ ssh-keygen -t rsa

{% endhighlight %}

after enter your path again :

{% highlight ruby %}
$ /Users/cyberspace/.ssh/id_rsa
{% endhighlight %}
{% highlight ruby %}
Overwrite (y/n)?   press yes
{% endhighlight %}

Enter: if you don't want a passphrase

press Enter to get your Key - Gen !

<a href="{{ site.baseurl }}/img/bash-ssh-2.png">
    <img src="{{ site.baseurl }}/img/bash-ssh-2.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas" style="width:100%">
</a>


Type {% highlight ruby %} $ ssh-add{% endhighlight %} and press Enter!

add {% highlight ruby %} $ ssh-add -l {% endhighlight %} to see your {% highlight ruby %} .ssh/id_rsa {% endhighlight %}

<a href="{{ site.baseurl }}/img/bash-ssh-3.png">
    <img src="{{ site.baseurl }}/img/bash-ssh-3.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


follow steps :

{% highlight ruby %} $ ls {% endhighlight %} show list :

enter your rsa id like here {% highlight ruby %} $ cat id_rsa{% endhighlight %} 

This is The Private Key !
{% highlight ruby %} 
-----BEGIN RSA PRIVATE KEY-----
{% endhighlight %} 


<a href="{{ site.baseurl }}/img/bash-ssh-4.png">
    <img src="{{ site.baseurl }}/img/bash-ssh-4.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>
Now : Check out the Public Key :

Type following Commandline : {% highlight ruby %} $ cat id_rsa.pub {% endhighlight %} 


<a href="{{ site.baseurl }}/img/bash-ssh5.png">
    <img src="{{ site.baseurl }}/img/bash-ssh5.png" alt="Lucas Gatsas lucas gatsas" title="lucas gatsas Lucas Gatsas"  style="width:100%">
</a>


Next Step ! Login In your Root Server!



Diagramm of my SSH Sketches!






<a href="{{ site.baseurl }}/img/lucasgatsas_grafic.png">
    <img src="{{ site.baseurl }}/img/lucasgatsas_grafic.png" alt="Lucas Gatsas"  style="width:100%">
</a>




<a href="{{ site.baseurl }}/img/dia_01_ssh_tube_bylucas-gatsas.png">
    <img src="{{ site.baseurl }}/img/dia_01_ssh_tube_bylucas-gatsas.png" alt="Lucas Gatsas"  style="width:100%">
</a>




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
