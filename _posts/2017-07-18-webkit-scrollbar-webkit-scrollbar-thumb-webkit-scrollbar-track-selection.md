---
layout: post

#event information
title:  "Webkits Scrollbar in Browsers"
cover: "img/sc.png"
date:   2017-08-07

#event organiser details
organiser: "Lucas Gatsas"


---

<h2 class="section-heading">Get Another | ::-webkit-scrollbar, 

::-webkit-scrollbar-thumb, 

::-webkit-scrollbar-track and 

::selection  </h2>


This Post is about the right Scrollbars in the Browsers, to change the width, like <code> width: 3px;</code>. To get your own.
You can also designing your own, change the background colors and so on. It's look nicer and more eleganter. This is how you can change also the 
scrollbar, Hope you like it. - 

<a href="{{ site.baseurl }}/img/sc.png">
    <img src="{{ site.baseurl }}/img/sc.png" style="width:100%" alt="Lucas Gatsas">
</a>

This is the CSS for the Scrollbar.

 <code> ::-webkit-scrollbar </code>

 <code> ::-webkit-scrollbar-thumb </code>

 <code> ::-webkit-scrollbar-track </code>

 <code> ::selection </code>

<div style="overflow:auto; height=200; width=100%;">
<pre style="background:white;">



 /**
Scrollbar 
 **/

::-webkit-scrollbar {
    width: 3px;
    position: relative;
    z-index: 1000;
}
::-webkit-scrollbar-thumb {
    border-width: 1px 1px 1px 2px;
    border-color: #777;
    background-color: #aaa;
}
::-webkit-scrollbar-track {
    border-width: 0;
}
::selection {
    text-shadow: none;
    background: #c0e6ff;
}


</pre></div>





<br>

