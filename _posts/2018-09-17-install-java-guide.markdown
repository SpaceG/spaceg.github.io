---
title:  "Java - Install Java on your Machine (Mac Os) #03"
date:   2018-09-17 00:00:01
description: Get Start with Java - Install Java
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Java - Install Java on your Machine #03</h2>

<small>Java, Eclipse, Introduction, Computer, Bit, Password, Bank Account, Java Tutorial, Install Java, Oracle</small>

What is Java Platform? Ultimate Guide for Programmers
Introduction to JAVA
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>


<h1>Open your Terminal</h1>

And Type: 

{% highlight ruby %}
$ java -version 
{% endhighlight %}


Install the JAVA JDK, via interface of oracle, then back to Terminal, 
then type again, the following commandline: 


{% highlight ruby %}
$ java -version 
{% endhighlight %}

Now, your Machine is now up with, JAVA with the current version. 

now, type in the Terminal 

{% highlight ruby %}
$ javav -version
{% endhighlight %}

 We have also java and javac up. now we have to change the path to our Home directory, the Root of our Index. Just type  

 {% highlight ruby %}
$ JAVA_HOME
{% endhighlight %}

Now at this point, we have this error : 


{% highlight ruby %}
$ Unknow283263: 
{% endhighlight %}

we have this error, because we have to change the path right now, to our home directory, checkout the rights and the hidden files on mac os: 

{% highlight ruby %}
$ ls -al
{% endhighlight %}

you will see these files like, .oracle_jre_usage, .bash_profile, bash_sessions 
now, we have also change the, we have also open, the .bash_profile file and export & include the following commandline : 


{% highlight ruby %}
$ open -e .bash_profile 
{% endhighlight %}


{% highlight ruby %}
$ export JAVA_HOME=$(/usr/libexec/java_home)
{% endhighlight %}

Then Save it! 
it does, export the Java Library to the Home Directoy. !
Close your Terminal Application. Open it Again : 
Run the following commandline again: 


{% highlight ruby %}
$ echo $JAVA_HOME
{% endhighlight %}
or this following commandline : 

{% highlight ruby %}
$JAVA_HOME
{% endhighlight %}



<img class="card-img-top" src="https://spaceg.github.io/assets/images/java.png" alt="">

<img class="card-img-top" src="https://spaceg.github.io/assets/images/java_01.png" alt="">

<img class="card-img-top" src="https://spaceg.github.io/assets/images/java_02.png" alt="">
<img class="card-img-top" src="https://spaceg.github.io/assets/images/java_04.png" alt="">
<img class="card-img-top" src="https://spaceg.github.io/assets/images/java_05.png" alt="">






<h1>Introduction to JAVA</h1>
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
