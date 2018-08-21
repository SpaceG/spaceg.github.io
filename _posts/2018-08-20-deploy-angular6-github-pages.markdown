---
title:  "Deploy Angular 6"
date:   2018-08-20 10:18:04
description: Start with Deploying & Deployment with in Angular 6 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - short project</h2>


<h1>Create a Angular 6 Project</h1>

<small>.Net Core, .Net Core 2.1, Angular .Net, Angular .Net core, Angular .Net core 2.0, Angular 6 .Net Core, Angular Visual studio, ASP .Net Core, ASP .Net Core 2.0, Asp .Net Core 2.1, asp.netcore2.0, Core 2.0, Visual Studio 2017</small>


{% highlight ruby %}
ng new my-deploy
{% endhighlight %}

open your project with 

{% highlight ruby %}
cd my-deploy
{% endhighlight %}

Then we go ahead

{% highlight ruby %}
ng build
{% endhighlight %}


{% highlight ruby %}
ng build 'my-deploy' --prod --vendor-chunk=true
{% endhighlight %}



<img class="card-img-top" src="https://spaceg.github.io/assets/images/ng-1.jpg" alt="">

then install npm package for the github page, to push your angular 6 code to your github page. 

{% highlight ruby %}
npm i -g angular-cli-ghpages
{% endhighlight %}


or go with SUDO user, if you run more than one user on your machine. 

{% highlight ruby %}
sudo npm i -g angular-cli-ghpages
{% endhighlight %}

while we running our commandline, we create a new repository on github. sign in to your github account, create a new github repo. with the same name of your local repo. like mine <code>my-deploy</code>





{% highlight ruby %}
codes-Mac-mini:my-deploy jh$ sudo npm i -g angular-cli-ghpages
Password:
/usr/local/bin/angular-cli-ghpages -> /usr/local/lib/node_modules/angular-cli-ghpages/bin/angular-cli-ghpages
/usr/local/bin/ngh -> /usr/local/lib/node_modules/angular-cli-ghpages/bin/angular-cli-ghpages
+ angular-cli-ghpages@0.5.3
updated 1 package in 0.864s
codes-Mac-mini:my-deploy jh$ 
{% endhighlight %}

<img class="card-img-top" src="https://spaceg.github.io/assets/images/ng-2.jpg" alt="">




after creating our repo, you will forward to the following commandlines. they we need right now.



<img class="card-img-top" src="https://spaceg.github.io/assets/images/ng-3.jpg" alt="">

go back to your terminal. and prompt the commandline 

{% highlight ruby %}
git init
{% endhighlight %}

if dont have created the GIT.   i have already created one:

{% highlight ruby %}

codes-Mac-mini:my-deploy jh$ git init
Reinitialized existing Git repository in /Users/jh/Desktop/my-deploy/.git/
codes-Mac-mini:my-deploy jh$ 
{% endhighlight %}

then add the README.md file with following commandline


{% highlight ruby %}
git add README.md 
{% endhighlight %}

the we commit our GIT and Repo with the commandline 


{% highlight ruby %}
git commit -m "Update the README.md  file"
{% endhighlight %}


then we remote our local git to our online git on GitHub. 

{% highlight ruby %}
git remote add origin https://github.com/SpaceG/my-deploy.git
{% endhighlight %}

now, we push it on orgin master branch
{% highlight ruby %}
git push -u origin master
{% endhighlight %}


the we have to give our User name for 
{% highlight ruby %}

codes-Mac-mini:my-deploy jh$ git push -u origin master
Username for 'https://github.com': 
{% endhighlight %}

type down your github username and passwort like mine  below : 





{% highlight ruby %}

codes-Mac-mini:my-deploy jh$ git push -u origin master
Username for 'https://github.com': spaceg
Password for 'https://spaceg@github.com': 
Counting objects: 38, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (36/36), done.
Writing objects: 100% (38/38), 94.43 KiB | 6.29 MiB/s, done.
Total 38 (delta 0), reused 0 (delta 0)
To https://github.com/SpaceG/my-deploy.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
codes-Mac-mini:my-deploy jh$ 

{% endhighlight %}


now we are on the master  branch and pushed the code to our github page! 
preload the github repo, and you will see your code is pushed to github. 



<img class="card-img-top" src="https://spaceg.github.io/assets/images/ng-4.jpg" alt="">

you see the page is not online, becuase is not deployed, what we doing now ! watch your github page domain name like mine
{% highlight ruby %}
 
https://spaceg.github.io/my-deploy/
{% endhighlight %}


now we go back to our Terminal and and running following commandline: 



{% highlight ruby %}
 
ng build 'my-deploy' --prod --base-href https://spaceg.github.io/my-deploy/

{% endhighlight %}

or 



{% highlight ruby %}
ng build --prod --output-path 'my-deploy' --base-href "https://spaceg.github.io/my-deploy/"
{% endhighlight %}

or 


{% highlight ruby %}
ng build --prod --base-href https://spaceg.github.io/my-deploy/
{% endhighlight %}

or

{% highlight ruby %}
ng build --prod --base-href=/my-deploy/
{% endhighlight %}



then we deploy it finally to GitHub!

{% highlight ruby %}
sudo ngh --dir=dist/my-deploy/
{% endhighlight %}

my Terminal Output!

{% highlight ruby %}

codes-Mac-mini:my-deploy jh$ sudo ngh --dir=dist/my-deploy
Password:
Username for 'https://github.com': spaceg
Password for 'https://spaceg@github.com': 
*** Successfully published!

codes-Mac-mini:my-deploy jh$ 
{% endhighlight %}






Download the Source @ Github : 

https://github.com/SpaceG/my-deploy v.0.0.1

 <a href="https://github.com/SpaceG/my-deploy">https://github.com/SpaceG/my-deploy</a>

see the Demo Page life :  <a href="https://spaceg.github.io/my-deploy/">https://spaceg.github.io/my-deploy/</a>






Material Design for Angular 6 : 
 <a href="https://material.io/design/color/#">https://material.io/design/color/#</a>



Microsoft  Hello World Sample using AngularJS framework along with ASP.Net MVC5: 
 <a href="https://code.msdn.microsoft.com/windowsdesktop/Hello-World-Sample-using-0a82b9ce">https://code.msdn.microsoft.com/windowsdesktop/Hello-World-Sample-using-0a82b9ce</a>










Visual Studio IDE für Windows und Mac: 
 <a href="https://visualstudio.microsoft.com/de/?rr=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Faspnet%2Fweb-api%2Foverview%2Fgetting-started-with-aspnet-web-api%2Fbuild-a-single-page-application-spa-with-aspnet-web-api-and-angularjs">https://visualstudio.microsoft.com/de/?rr=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Faspnet%2Fweb-api%2Foverview%2Fgetting-started-with-aspnet-web-api%2Fbuild-a-single-page-application-spa-with-aspnet-web-api-and-angularjs
</a>






let's install the Angular 6 on your Machine. 

{% highlight ruby %}

sudo npm install -g @angular/cli

{% endhighlight %}








Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
