---
title:  "Angular 6 - Include Bootstrap 4 - Ng-Bootsrap"
date:   2018-09-01 10:18:23
description: Install Bootstrap 4 in to your Angular 6 App
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - with Bootstrap 4</h2>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI, Bootstrap 4 </small>

In This Tutorial, i will show you, how to install Bootstrap 4 in to your Current Angular 6 App. 
Okey Let's get start with Angular 6. 

<strong>DEMO</strong> <a href="https://angular6-spaceg-judgement-day.stackblitz.io/">angular6-spaceg-judgement-day.stackblitz.io </a>

<h1>Angular 6 & Bootstrap 4</h1>

Let's see the start Guide. here @  <a href="https://ng-bootstrap.github.io/#/getting-started">Bootstrap 4 - Ng - Bootstrap 4</a>

{% highlight ruby %}
$ npm install --save @ng-bootstrap/ng-bootstrap
{% endhighlight %}


Then create your app.module.ts 

import your NgbModule for Boostrap 4 

{% highlight ruby %}
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
{% endhighlight %}

set the Module as your Root. 

{% highlight ruby %}

@NgModule({
  imports: [BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, NgbModule.forRoot()], 
{% endhighlight %}

like below of my code. in the app.module.ts 

{% highlight ruby %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, NgbModule.forRoot()], 
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}

{% endhighlight %}


Right now, we have also update our main index.html file. we have also, include the source code of Boostrap 4 Manualy with copy Past. now go to the Official Boostrap 4 site <a href="https://getbootstrap.com/">https://getbootstrap.com/</a>, and inlcude the following script links code with the bootstrap 4 librarys! 

copy this paths: 

{% highlight ruby %}
BootstrapCDN
When you only need to include Bootstrap's compiled CSS or JS, you can use BootstrapCDN.

CSS only
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
{% endhighlight %}
and the Javascript and the JQuery Files:


{% highlight ruby %}
JS, Popper.js, and jQuery
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
{% endhighlight %}



now it should like my index.html file from the angular 6 project : 
{% highlight ruby %}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BbotsNg</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>
  <app-root></app-root>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>

{% endhighlight %}


yes, we have also included now the Bootstrap 4 source finally. 





now, we have to create two components. because we gonna create our Carousel. 
the HTML file 
{% highlight ruby %}
carousel-basic.html
{% endhighlight %}
and the Typescript File 
{% highlight ruby %}
carousel-basic.ts
{% endhighlight %}


and include your your import to the app.module.ts file 

import the carousel, which route it to our index page : 

{% highlight ruby %}
import { NgbdCarouselBasic } from './carousel-basic';
{% endhighlight %}

and update the declarations: [ NgbdCarouselBasic]

and here is the full app.module.ts code!

{% highlight ruby %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, NgbModule.forRoot()], 
  declarations: [
    AppComponent,
    NgbdCarouselBasic

  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}

{% endhighlight %}




now create the carousel-basic.ts file with the following code : 



{% highlight ruby %}

import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = [1, 2, 3].map(() => `https://i.imgur.com/3VFThE0.gif?random&t=${Math.random()}`);
  images2 = [1, 2, 3].map(() => `https://www.laguiadelvaron.com/wp-content/uploads/2016/07/tumblr.com-tumblr_o4m7qhEumc1v4u49oo1_500.gif?random&t=${Math.random()}`);
  images3 = [1, 2, 3].map(() => `https://giffiles.alphacoders.com/899/89957.gif?random&t=${Math.random()}`); images4 = [1, 2, 3].map(() => `https://media.giphy.com/media/NvHeuMnxXzJS/giphy.gif?random&t=${Math.random()}`);
  images5 = [1, 2, 3].map(() => `https://media.giphy.com/media/Gac5lzgUbciZy/giphy.gif?random&t=${Math.random()}`);

}
{% endhighlight %}




in the carousel-basic.html we include this code below : 
{% highlight ruby %}

<ngb-carousel *ngIf="images">
    <ng-template ngbSlide>
      <img [src]="images[0]" alt="Random first slide">
      <div class="carousel-caption">
        <h3>Judgement Day</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images[1]" alt="Random second slide">
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>
  

  <ngb-carousel *ngIf="images2">
    <ng-template ngbSlide>
      <img [src]="images2[0]" alt="Random first slide">
      <div class="carousel-caption">
        <h3>Judgement Day</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images2[1]" alt="Random second slide">
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images2[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>



  <ngb-carousel *ngIf="images3">
    <ng-template ngbSlide>
      <img [src]="images3[0]" alt="Random first slide">
      <div class="carousel-caption">
        <h3>Judgement Day</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images3[1]" alt="Random second slide">
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images3[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>
  
  
  <ngb-carousel *ngIf="images4">
    <ng-template ngbSlide>
      <img [src]="images4[0]" alt="Random first slide">
      <div class="carousel-caption">
        <h3>Judgement Day</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images4[1]" alt="Random second slide">
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images4[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>
  
  
  <ngb-carousel *ngIf="images5">
    <ng-template ngbSlide>
      <img [src]="images5[0]" alt="Random first slide">
      <div class="carousel-caption">
        <h3>Judgement Day</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images5[1]" alt="Random second slide">
      <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </ng-template>
    <ng-template ngbSlide>
      <img [src]="images5[2]" alt="Random third slide">
      <div class="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </ng-template>
  </ngb-carousel>
  {% endhighlight %}

  




right now, we can update the app.component.html file in our Angular App


{% highlight ruby %}
<div class="container-fluid">
  <hr>
  <header>
    <img style="width:100px;margin: 0 auto;display:table;" src="http://jamescamerononline.com/metallict2.gif"/> 
      <p>
        This is Our Example Carousel in Angular 6<strong>ng-bootstrap</strong> project: Angular powered Bootstrap.
        Visit <a href="https://www.youtube.com/channel/UCpMkxjR1N5J3NSFfC6oEbZw" 
        target="_blank">https://www.youtube.com/channel/UCpMkxjR1N5J3NSFfC6oEbZw</a> for more Tutorials.
      </p>
  <hr>
</header>
  <ngbd-carousel-basic></ngbd-carousel-basic>
</div>
{% endhighlight %}


now we have include our Routes: below the ending header tag <code> </header> </code>
{% highlight ruby %}
  <ngbd-carousel-basic></ngbd-carousel-basic>
{% endhighlight %}







Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
