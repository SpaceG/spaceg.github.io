---
layout:     post
title:      "SSH - Key on Mac Os X"
subtitle:   "SSH"
date:       2015-04-28 14:00:44
author:     "Lucas Gatsas"
header-img: "img/4106847286_e8c83f9b50_o.jpg"
---

<h2 class="section-heading"><strong> Secure Shell - SSH - Key on Mac Os X </strong> </h2>
<h2 class="section-heading">The Key Set Up.</h2>




<a href="#">
    <img src="{{ site.baseurl }}/img/ssh-keygen.png" alt="Lucas Gatsas"  style="width:100%">
</a>


Enter Commandlines :


<code>ssh-keygen -t rsa</code>

after enter your path again :

<code>/Users/cyberspace/.ssh/id_rsa</code>

Overwrite <code> (y/n)?  </code> press <code>yes</code>


Enter: if you don't want a passphrase

press Enter to get your Key - Gen ! 



<a href="#">
    <img src="{{ site.baseurl }}/img/ssh-keygen-1.png" alt="Lucas Gatsas"  style="width:100%">
</a>



Type <code> ssh-add </code> and press Enter!

add <code> ssh-add -l </code> to see your <code> .ssh/id_rsa  </code>



<a href="#">
    <img src="{{ site.baseurl }}/img/ssh-keygen-2.png" alt="Lucas Gatsas"  style="width:100%">
</a>


follow steps : 

<code> ls </code> show list :

enter your rsa id like here <code> cat id_rsa </code> 

This is The Private Key !

-----BEGIN RSA PRIVATE KEY-----






<a href="#">
    <img src="{{ site.baseurl }}/img/ssh-keygen-2.png" alt="Lucas Gatsas"  style="width:100%">
</a>






<br>


	


Diagramm of a SSH Tunel! 






<a href="#">
    <img src="{{ site.baseurl }}/img/ssh_tunnel.jpg" alt="Lucas Gatsas"  style="width:100%">
</a>



<a href="#">
    <img src="{{ site.baseurl }}/img/Lucas_Gatsas-Firewall_ssh.jpg" alt="Lucas Gatsas"  style="width:100%">
</a>




<!--
<strong> Diagram of the SSH private-public key pair transactions, as defined within the SSH defined architecture model </strong>

<a href="#">
    <img src="{{ site.baseurl }}/img/SSH_public_private_key.gif" alt="Lucas Gatsas"  style="width:100%">
</a>
-->





<blockquote>
“Best startups generally come from somebody needing to scratch an itch.” -Michael Arrington, TechCrunch 
</blockquote>

