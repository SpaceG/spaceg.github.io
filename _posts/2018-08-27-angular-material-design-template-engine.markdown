---
title:  "Angular 6 - Material Design"
date:   2018-08-27 10:18:23
description: get start with Angular 6 Material Design
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular Template & Styling</h2>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI </small>

In the following style.scss ( Sass - Stylesheet File) you can inlude your global stylesheets. And create sameTime with routing commandline CLI form Angular to your App ( Project) style home.component.css file. for only that session. 


<h1>Material Design in Angular 6</h1>

Create a New Angular 6 Project and start your app. 

{% highlight ruby %}
$ ng new space-ngs
$ cd space-ngs
$ ng serve --open
$ code .
{% endhighlight %}



then  add angular material 

{% highlight ruby %}
$ ng add @angular/material
{% endhighlight %}


Then, generate the Navigation Menu to your Angular Project, easy via Command-Line CLI. It generate a new component with the Navigation!

{% highlight ruby %}
$ ng generate @angular/material:material-nav --name=main-nav
{% endhighlight %}

its generate a new nav component 


now checkout your app.module.ts file its already imported 

{% highlight ruby %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
{% endhighlight %}

it will be import the


then include in your app.component.html your output, or outlet, like
{% highlight ruby %}
< app-main-nav></ app-main-nav>
{% endhighlight %}


{% highlight ruby %}
$ ng serve --open
{% endhighlight %}


okey, next step, go back to the <strong>app.module.ts</strong> then add a import :





{% highlight ruby %}
import { RouterModule, Routes } from '@angular/router';
{% endhighlight %}


{% highlight ruby %}
RouterModule.forRoot(appRoutes),
{% endhighlight %}



create a constance below the imports like : 





{% highlight ruby %}


const appRoutes: Routes = [

  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }

];

{% endhighlight %}









in the Html, create the pages links and routes finally 
go to your main-nav.component,html file 


{% highlight ruby %}

    <mat-nav-list>
      <a mat-list-item href="/first-page">First Page</a>
      <a mat-list-item href="/second-page">Second Page</a>
      <a mat-list-item href="/third-page">Third Page</a>
    </mat-nav-list>
{% endhighlight %}







open your <strong>app.module.ts</strong> file, be sure you have aslo importet all packages from material design, which we need to set up our Navigation in our Themplate. 
Then inside of your Angular , import some packages 1. material design 2. cdk 3. animations, to your Project. 











{% highlight ruby %}
$ npm install --save @angular/material @angular/cdk @angular/animations
{% endhighlight %}

include and import your angular animations to your Angular Project. 

{% highlight ruby %}
$ npm install --save angular/material2-builds angular/cdk-builds angular/animations-builds
{% endhighlight %}










Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
