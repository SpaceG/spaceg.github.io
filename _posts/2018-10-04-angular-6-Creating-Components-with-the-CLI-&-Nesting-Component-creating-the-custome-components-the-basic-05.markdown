---
title:  "Angular 6 on Windows 10 - The Basics 05 - Creating Components with the CLI & Nesting Component - Part#05"
date:   2018-10-14 00:00:20
description: Get Start with Angular 6 on Windows.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 on Windows 10 - The Basics 05 - Creating Components with the CLI & Nesting Component</h2>



<iframe width="100%" height="615" src="https://www.youtube.com/embed/TvM-8VlPk6c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<small>Angular 6, Javascript, Framework, Tutorial, Install Angular 6 on Windows 10</small>

Go to your Terminal and Type these following comand Lines /Nesting  : 

This is the CLI Components, and 
{% highlight ruby %}
$ ng generate component servers
{% endhighlight %}

Angular  /Nesting Command Lines   : 

{% highlight ruby %}
$ ng g c servers 
{% endhighlight %}

include in the Servers Component <strong>servers.component.html</strong>

{% highlight ruby %}
<app-server></app-server>
<app-server></app-server>
{% endhighlight %}

and in the <strong>app.component.html</strong> file, change the following <strong><app-server></app-server>
</strong> to the following path : <strong><app-servers></app-servers>
</strong>

{% highlight ruby %}
<app-servers></app-servers>
{% endhighlight %}

Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work as Front-End Developer @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
