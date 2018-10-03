---
title:  "Angular 6 - Start with Angular"
date:   2018-08-12 10:18:01
description: getting start with angular6
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Today we gonna start with Angular 6!</h2>


<h1>Set Up Angular 6</h1>


let's install the Angular 6 on your Machine. 

{% highlight ruby %}

sudo npm install -g @angular/cli

{% endhighlight %}



checkout the version : ng -v 

{% highlight ruby %}

ng -v

{% endhighlight %}


create a new project:


{% highlight ruby %}


ng new angularmat

{% endhighlight %}


open your project with your terminal 


{% highlight ruby %}


cd angularmat

{% endhighlight %}


let's start your localhost and server ! type in your terminal ng serve to lift and start your local server on your machine. 


{% highlight ruby %}


ng serve 

{% endhighlight %}



{% highlight ruby %}

codes-Mac-mini:angularmat jh$ ng serve
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
                                                                                          
Date: 2018-08-12T21:23:50.086Z
Hash: b173590d099425cc124f
Time: 10654ms
chunk {main} main.js, main.js.map (main) 10.7 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 15.6 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.27 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.

{% endhighlight %}



now the server has lifted on our localhost via localhost:4200 with the port of 4200
now we add some material to our app !

{% highlight ruby %}
ng add @angular/material
{% endhighlight %}



now lets see our package.json file : 

{% highlight ruby %}


{
  "name": "angularmat",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^6.1.0",
    "@angular/common": "^6.1.0",
    "@angular/compiler": "^6.1.0",
    "@angular/core": "^6.1.0",
    "@angular/forms": "^6.1.0",
    "@angular/http": "^6.1.0",
    "@angular/material": "^6.4.3",
    "@angular/platform-browser": "^6.1.0",
    "@angular/platform-browser-dynamic": "^6.1.0",
    "@angular/router": "^6.1.0",
    "core-js": "^2.5.4",
    "rxjs": "^6.0.0",
    "zone.js": "~0.8.26",
    "@angular/cdk": "^6.2.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.7.0",
    "@angular/cli": "~6.1.3",
    "@angular/compiler-cli": "^6.1.0",
    "@angular/language-service": "^6.1.0",
    "@types/jasmine": "~2.8.6",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.2.1",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~1.7.1",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.0",
    "karma-jasmine": "~1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.3.0",
    "ts-node": "~5.0.1",
    "tslint": "~5.9.1",
    "typescript": "~2.7.2"
  }
}
{% endhighlight %}


now include the following steps for the buttons ! 


{% highlight ruby %}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


{% endhighlight %}


then open the app.component.html 

{% highlight ruby %}
<button mat-raised-button>click button</button>
{% endhighlight %}

or 


{% highlight ruby %}
<button mat-raised-button color="primary">click button</button>
{% endhighlight %}


okey, now we gonna include some more components to our app lets open your termianl and type this following commandline :


{% highlight ruby %}
$ ng generate @angular/material:material-nav --name=main-nav
{% endhighlight %}

see the terminal output : 

{% highlight ruby %}

codes-Mac-mini:angularmat jh$ ng generate @angular/material:material-nav --name=main-nav
CREATE src/app/main-nav/main-nav.component.css (129 bytes)
CREATE src/app/main-nav/main-nav.component.html (953 bytes)
CREATE src/app/main-nav/main-nav.component.spec.ts (713 bytes)
CREATE src/app/main-nav/main-nav.component.ts (588 bytes)
UPDATE src/app/app.module.ts (803 bytes)
codes-Mac-mini:angularmat jh$ 
{% endhighlight %}

it was created : 

{% highlight ruby %}

CREATE src/app/main-nav/main-nav.component.css (129 bytes)
CREATE src/app/main-nav/main-nav.component.html (953 bytes)
CREATE src/app/main-nav/main-nav.component.spec.ts (713 bytes)
CREATE src/app/main-nav/main-nav.component.ts (588 bytes)
{% endhighlight %}



now we gonna create our sidebar navigation: now in the main-nav.component.ts


{% highlight ruby %}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }

{% endhighlight %}

in the @component you see the selectors.. there are the 'app-main-nav' - this is our link to the app.component.html

{% highlight ruby %}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
{% endhighlight %}


so now, open your app.component.html file and include our 

{% highlight ruby %}
<app-main-nav></app-main-nav>
<button mat-raised-button color="primary">click button</button>
{% endhighlight %}







then ng serve your app again. bam, your sidebar is here! - 







Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
