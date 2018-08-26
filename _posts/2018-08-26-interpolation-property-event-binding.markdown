---
title:  "Angular 6 Interpolation, Property & Event Binding"
date:   2018-08-26 11:18:33
description: get start with Angular Template & Styling
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - Interpolation, Property & Event Binding</h2>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI </small>


<h1>Interpolation, Property & Event Binding</h1>

in the home.components.ts change the 
{% highlight ruby %}
@Component ({
    selector: 'app-home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.scss']
})
{% endhighlight %}
to




{% highlight ruby %}
@Component ({
    selector: 'app-home',
    template:'<p>This is my Home Template</p>',
    styleUrls: ['./home.component.scss']
})
{% endhighlight %}

or another example: 

in the home.component.html you can include your html in your on way, like you want..

{% highlight ruby %}
<div class="container color-blue"><h1>Hello World</h1></div>
{% endhighlight %}

or you can go with the styles





{% highlight ruby %}

@Component ({
    selector: 'app-home',
     templateUrl:'./home.component.html',
    styleUrls: ['./home.component.scss']
})
{% endhighlight %}





change it to the styles
{% highlight ruby %}

@Component ({
    selector: 'app-home',
     templateUrl:'./home.component.html',
    styles: ['h1 {color: red; font-size: 34px;}']
})
{% endhighlight %}







Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
