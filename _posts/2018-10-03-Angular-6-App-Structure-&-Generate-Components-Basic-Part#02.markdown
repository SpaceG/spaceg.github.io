---
title:  "Angular 6 on Windows 10 - The Basics 02 - Angular 6 - App Structure & Generate Components - Basic Part#02"
date:   2018-10-03 00:00:03
description: Get Start with Angular 6 on Windows.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 on Windows 10 - The Basics 02 - Angular 6 - App Structure & Generate Components - Basic Part#02</h2>



<small>Angular 6, Javascript, Framework, Tutorial, Install Angular 6 on Windows 10</small>

<iframe width="100%" height="615" src="https://www.youtube.com/embed/QBJCgWQ39M4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<strong>Step 1. </strong> Set up the Development Environment 
You need to set up your development environment before you can do anything.

Install Node.js® and npm if they are not already on your machine.

<a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>
<a href="https://www.npmjs.com/">https://www.npmjs.com/</a>


Let's get start and create a new Angular 6 Project with your Command Line / CLI


Then install the Angular CLI globally.

{% highlight ruby %}
$ npm install -g @angular/cli
{% endhighlight %}


<strong>Step 2. </strong>Create a new project 
Open a terminal window.

Generate a new project and default app by running the following command:

{% highlight ruby %}
$ ng new my-app
{% endhighlight %}


The Angular CLI installs the necessary npm packages, creates the project files, and populates the project with a simple default app. This can take some time.


Step 3: Serve the application 
Go to the project directory and launch the server.


{% highlight ruby %}
cd my-app
ng serve --open
{% endhighlight %}

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the --open (or just -o) option will automatically open your browser on http://localhost:4200/.

Your app greets you with a message: Welcome to the App.



Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work as Front-End Developer @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
