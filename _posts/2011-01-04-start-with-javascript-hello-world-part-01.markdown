---
title:  "Javascript - Javascript - Hello World App #02"
date:   2011-01-04 10:18:00
description: Hello World in Javascript.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Start with Javascript <a href="https://www.javascript.com/" target="_blank">https://www.javascript.com/</a> in order to fully understand it. We then explored how to <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">become a Javscript Developer</a>. This time we’ll focus on compositions by standart powerfull Javascript Methods and Learning.</h2>

<h1> Create a Hello World in JS.</h1>

First create a <strong> index.html </strong> file and write down your HTML dom. 

{% highlight ruby %}
index.html
{% endhighlight %}

Second, we have also to create a <strong> javascript.js </strong> file
then create a folder named it <strong>js</strong> like <strong> js/javascript.js</strong>

{% highlight ruby %}
javascript.js
{% endhighlight %}

include it to your HTML file with 

{% highlight ruby %}
javascript.js
{% endhighlight %}

<h1>Console Log </h1>
now create a first <strong>console.log</strong> 

{% highlight ruby %}
console.log("HelloWorld!"); 
{% endhighlight %}
back to your Browser Check, and underspect it, with rightmouse. 
checkout the Console. You will find a Output like :

{% highlight ruby %}
HelloWorld!
{% endhighlight %}

That's it, for the first Part! 

<h1>Alert</h1>
Right now we will create a real HelloWorld in Alert, which give it out a Pop Up, which give a Html Output to your Browser Window. Let's Create it: 


{% highlight ruby %}
<html>
    <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="viewport" content="width=device-width, initial-scale=1">          
        </head>
    <body>

        <script src="js/javascript.js"></script>
      <!--   
        <script>
            alert( 'Hello, world!' );
        </script>
       -->
    </body>
</html>
{% endhighlight %}

you can also, set all your Javascript to the front of the index.html, but we have also external scripts and pages. 

include that alert into the js/javascript.js file. 

{% highlight ruby %}
alert( 'Hello, world!' );
{% endhighlight %}


it give output a PopUp Window. with the <strong> HelloWorld!</strong>

This is, how you can create Alerts in </strong>Javascript.</strong>



<h1>The modern markup</h1>
The <script> tag has a few attributes that are rarely used nowadays, but we can find them in old code:

<strong> The type attribute: < script type=…></strong>
The old standard HTML4 required a script to have a type. Usually it was type="text/javascript". The modern HTML standard assumes this type by default. No attribute is required.

<strong>The language attribute: < script language=…></strong>
This attribute was meant to show the language of the script. As of now, this attribute makes no sense, the language is JavaScript by default. No need to use it.

<strong>Comments before and after scripts.</strong>
In really ancient books and guides, one may find comments inside <script>, like this:

<h1>External scripts</h1>
If we have a lot of JavaScript code, we can put it into a separate file.

The script file is attached to HTML with the src attribute:

{% highlight ruby %}
< script src="/path/to/script.js"></script>
{% endhighlight %}


Here <strong>/path/to/script.js</strong> is an absolute path to the file with the script (from the site root).

It is also possible to provide a path relative to the current page. For instance, <strong>src="script.js"</strong> would mean a file <strong>"script.js"</strong> in the current folder.

We can give a full URL as well, for instance:

{% highlight ruby %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
{% endhighlight %}


To attach several scripts, use multiple tags:

{% highlight ruby %}
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
{% endhighlight %}


<blockquote>
Please note:
As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the browser will download it and then store in its cache.

After this, other pages that want the same script will take it from the cache instead of downloading it. So the file is actually downloaded only once.

That saves traffic and makes pages faster.
</blockquote>



<strong>If <strong>src</strong> is set, the script content is ignored.</strong>
A single <script> tag can’t have both the src attribute and the code inside.

This won’t work:

{% highlight ruby %}
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
{% endhighlight %}

We must choose: either it’s an external <strong><script src="…"></strong> or a regular <strong>< script></strong> with code.

The example above can be split into two scripts to work:
<strong>
<script src="file.js"></script>
<script>
  alert(1);
</script>
</strong>

<a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Javascript</a> 



 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
