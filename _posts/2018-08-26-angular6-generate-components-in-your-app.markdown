---
title:  "Generate Angular 6 Components - CLI"
date:   2018-08-26 10:18:04
description: get start with components
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular/CLI - Generate Components with CLI Interface</h2>


<h1>find the hidden  ~/.ssh/ folder in your Machine!</h1>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI </small>

Create New Angular 6 Project, with the following scss ( Sass - Stylesheet File) to but in your styles there in that easy file. And create sameTime with routing commandline CLI form Angular to your App ( Project). 


{% highlight ruby %}
$ ng new ng5 --style=scss --routing 
{% endhighlight %}

check out the following commandlines for the command-line interface of angular 

Open your Project!
{% highlight ruby %}
$ cd ng5 
{% endhighlight %}

Then we can generate finally our Components with the command.

{% highlight ruby %}
$ ng generate component home
{% endhighlight %}

or we can doing the with the following command. 

{% highlight ruby %}
$ ng g c ( your page name ) home
// its gonna be looks like this
$ ng g c home
{% endhighlight %}


or you want create a specific page

{% highlight ruby %}
$ ng g c about
{% endhighlight %}




<h1>Template & Design Styling in Angular 6</h1>

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


or your can include your style global in your style.scss for example. - or you can input your style in to your extrenal component which we have created the home.component.css - the css will only rendering that css from that .css file not in the global stylesheet. - thats makes angular fast and nice. 









Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
