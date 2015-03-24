---
layout:     post
title:      "sudoers file"
subtitle:   "Add Premission to any User on your Machine"
date:       2015-03-24 14:00:44
author:     "Lucas Gatsas"
header-img: "img/133972-050-9F4E1129-1.jpg"
---
<h2 class="section-heading"><strong>Sudoers</strong> </h2>

<h2 class="section-heading">Add a User to Sudoers in Mac OS X</h2>

(1.) Launch Terminal : type : 

<code>sudo visudo</code>


(2.) Change your User Privilege specification

<code>
# User privilege specification

root	ALL=(ALL) ALL

%admin	ALL=(ALL) ALL
</code>


(3.) Add Below the User Privile specification 

<code>
youradminusername ALL=(ALL) ALL
</code>



<a href="#">
    <img src="{{ site.baseurl }}/img/sudoerspic.png" alt="Post Sample Image" style="width:100%">
</a>




(4.)  Now press “ESC” (escape) key to stop editing the file



<blockquote>
	"Open Terminal and learn to Fly with your Machine!"
</blockquote>