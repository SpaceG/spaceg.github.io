---
title:  "Interpolation and Expressions"
date:   2018-08-14 10:18:03
description: Start with Interpolation and Expressions in Angular 6 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - short project</h2>


<h1>Create a Angular 6 Project</h1>

<small>.Net Core, .Net Core 2.1, Angular .Net, Angular .Net core, Angular .Net core 2.0, Angular 6 .Net Core, Angular Visual studio, ASP .Net Core, ASP .Net Core 2.0, Asp .Net Core 2.1, asp.netcore2.0, Core 2.0, Visual Studio 2017</small>


{% highlight ruby %}
ng new nginterpolation
{% endhighlight %}

open your project with 

{% highlight ruby %}
cd nginterpolation
{% endhighlight %}



{% highlight ruby %}
ng generate component fire
{% endhighlight %}

see the termional output. 

{% highlight ruby %}

codes-Mac-mini:ngInterpolation jh$ ng generate component fire
CREATE src/app/fire/fire.component.css (0 bytes)
CREATE src/app/fire/fire.component.html (23 bytes)
CREATE src/app/fire/fire.component.spec.ts (614 bytes)
CREATE src/app/fire/fire.component.ts (261 bytes)
UPDATE src/app/app.module.ts (388 bytes)
codes-Mac-mini:ngInterpolation jh$ 
{% endhighlight %}

now the component fire was created! 



see the app.module.ts , you find the NgModule <FireComponent>

{% highlight ruby %}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FireComponent } from './fire/fire.component';

@NgModule({
  declarations: [
    AppComponent,
    FireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}

the import was done ! 

{% highlight ruby %}
import { FireComponent } from './fire/fire.component';
{% endhighlight %}

and the Module was imported!


{% highlight ruby %}
@NgModule({
  declarations: [
    AppComponent,
    FireComponent
  ],
{% endhighlight %}





now run <code>ng serve </code>


your app is running on the localhost
{% highlight ruby %}

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


{% endhighlight %}




<h1>we create now our custome component</h1>


in our app.comopnent.html we create a custome component to our fire.component.html 


in our app.component.html we includeour 



The app.component.html file :


{% highlight ruby %}

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!

  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>



This is our StartPage! a custom component says <app-fire></app-fire>
{% endhighlight %}



the <app-fire></app-fire> will output our html from the fire.component.html file. 

{% highlight ruby %}
This is our StartPage! a custom component says <app-fire></app-fire>

{% endhighlight %}


The fire.component.html file :

{% highlight ruby %}
<p>
  This is our Angular 6 App Fire!
</p>
{% endhighlight %}


in our app.component.ts file we also include our import from 

{% highlight ruby %}
import { FireComponent } from './fire/fire.component'; 
{% endhighlight %}


the app.module.ts file : 

{% highlight ruby %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FireComponent } from './fire/fire.component';

@NgModule({
  declarations: [
    AppComponent,
    FireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}


now lets see the front : 




<img class="card-img-top" src="https://spaceg.github.io/assets/images/dd_1.png" alt="">





now, we go a head with our interpolation and expressions in our angular 6 source! 



<h1>Interpolation and Expressions</h1>


{% highlight ruby %}
//{ { myfire } }
{% endhighlight %}

or


{% highlight ruby %}
//{ { 5+2 } }
{% endhighlight %}


or 

{% highlight ruby %}
//{ { 5*2 } }
{% endhighlight %}



<h1>This is our Interpolation & Expressions Script and Examples !</h1>

This is our fire.component.html 


{% highlight ruby %}
<p>
  This is our Angular 6 App Fire!
</p>

<!-- // (1). set here our Variable -->
{ { myVariable }}


<!-- // (2). set here our bitwiseOR  -->
{ { bitwiseOR }}

<!-- // (3). someTask |  -->
{ { doSomeHeavyTask() } }
 
{% endhighlight %}



now lets go back to our fire.component.ts file and write down the code example: 




{% highlight ruby %}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {


// (1). set here our Variable 

myVariable = "MyFire"

// (2). set here our bitwiseOR  

bitwiseOR = 2 | 5 // 010 101 => 0 | 1 = 1 then 1 | 0 is 1 | then 0 | 1 = 1; 111

// (3). ${this.i++} from the ConsoleLOG 
i = 0 

// (4). setInterval 
someVar = Math.random()


// The Constructor 

  constructor() { 

  }


// (3). someTask | 
    // here we start the console.log 

doSomeHeavyTask() {
  console.log(`Called ${this.i++} times`) 
}


  ngOnInit() {

    // (4). setInterval 

    setInterval(()=> {

      this.someVar = Math.random()

    }, 50)
  }

}


{% endhighlight %}

Preview: 


<img class="card-img-top" src="https://spaceg.github.io/assets/images/ezgif-4-00786c0e29.gif" alt="">

Preview: 

<img class="card-img-top" src="https://spaceg.github.io/assets/images/dd_2.png" alt="">


<img class="card-img-top" src="https://spaceg.github.io/assets/images/ezgif-4-0da7a528cb.gif" alt="">







Here is the Video How its Work ! 

<iframe width="100%" height="615" src="https://www.youtube.com/embed/vjqKPdZCuZo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


Download the Source @ Github : 

ngInterpolation v.0.0.1

 <a href="https://github.com/SpaceG/ngInterpolation">https://github.com/SpaceG/ngInterpolation</a>





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
