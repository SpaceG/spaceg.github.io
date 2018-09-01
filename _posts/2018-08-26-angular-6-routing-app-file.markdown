---
title:  "Angular 6 - App Routing Module File"
date:   2018-08-26 10:18:33
description: get start with Angular 6 - Routing file
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - app-routing.module.ts file</h2>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI </small>

<iframe width="100%" height="615" src="https://www.youtube.com/embed/OyXLnCBGQA8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


When we started this project with the Angular CLI, we used the --routing flag, which set us up with a file located at /src/app/app-routing.module.ts, visit this file and import the 2 components we created earlier:

{% highlight ruby %}
$ /src/app/app-routing.module.ts
{% endhighlight %}


import some module : 
{% highlight ruby %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
{% endhighlight %}


then go to const routes:


{% highlight ruby %}
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
{% endhighlight %}


should look like this below: 

{% highlight ruby %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
{% endhighlight %}


this is the app.component.html file 
{% highlight ruby %}
<ul>
  <li><a routerLink="">Home</a></li>
  <li><a routerLink="about">About</a></li>
</ul>
<router-outlet></router-outlet>
{% endhighlight %}







Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
