---
title:  "Jekyll on Windows - Install Jekyll W -10"
date:   2018-09-19 00:00:01
description: Start Blogging like a Hacker.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Install Jekyll on Windows 10 with the RubyInstaller </h2>



<small>Jekyll Serve, Blogging like Hacker.</small>

What is Jekyll ? Jekyll is a static Page Builder in Ruby and Rails, based on Gem. 
Introduction to Ruby and Rails
<a href="https://rubyonrails.org/">https://rubyonrails.org/</a>


<h1>Set up on Windowss</h1>

Go to the Page from RubyInstaller for Windows and Download the Current Package!
<a href="https://rubyinstaller.org/">https://rubyinstaller.org/</a>

{% highlight ruby %}
https://rubyinstaller.org/
{% endhighlight %}

Downlaod the Ruby+Devkit 2.4.4-2 (x64)  for Windows. 

{% highlight ruby %}
Ruby+Devkit 2.4.4-2 (x64) 
{% endhighlight %}

Dopple Click Open your Install Settings, following the Steps from the Application from the MSYS2. 
Finish it. Then Open an New Terminal (Bash) Window and but in the following commandline : 


{% highlight ruby %}
gem install jekyll bundler
{% endhighlight %}

it gonna install all Bundlers for Gem. etc. 

then chaout your Jekyll version with: 

{% highlight ruby %}
jekyll -v 
{% endhighlight %}

Then Update the Gems. with the Commandline: 
{% highlight ruby %}
gem update bundler
{% endhighlight %}

Right now, we gonna install all Bundler we need to launch Jekyll finally 
{% highlight ruby %}
bundler install 
{% endhighlight %}


then launch your Project on your Localhost with 
{% highlight ruby %}
bundle exec jekyll serve --open
{% endhighlight %}


Thats it. 

{% highlight ruby %}

lucas.gatsas@NB59 MINGW64 ~/desktop/spaceg.github.io (master)
$ bundle exec jekyll serve --open
Configuration file: C:/Users/Lucas.Gatsas/desktop/spaceg.github.io/_config.yml
            Source: C:/Users/Lucas.Gatsas/desktop/spaceg.github.io
       Destination: C:/Users/Lucas.Gatsas/desktop/spaceg.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 9.706 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'C:/Users/Lucas.Gatsas/desktop/spaceg.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
Batchvorgang abbrechen (J/N)? n
n

lucas.gatsas@NB59 MINGW64 ~/desktop/spaceg.github.io (master)
$

{% endhighlight %}




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
