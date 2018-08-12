---
title:  "Get Start with Angular Material UI/UX"
date:   2018-08-11 10:18:03
description: Create a Front End Angular Material App 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">Google Angular 5 Material Design</h2>


<h1>Get Started with our ng</h1>


First we have to download our Angular Ng Source ! Open your Terminal and let's get start to download your Source, which we need for the Set Up! 


{% highlight ruby %}
$ ng new (angular-project-name-ng-material) 
{% endhighlight %}

then we go ahead: open our folder or git - Repository, or where ever you have shared your new Angular Project!

{% highlight ruby %}
$ cd (angular-project-name-ng-material) 
{% endhighlight %}


now we gonna install all our Npm Packages & Modules, which we need for our App. 

{% highlight ruby %}
$ npm install @angular/material @angular/cdk --save 
{% endhighlight %}


be sure we download the packages for the angular app version 5 

{% highlight ruby %}
$  npm install --save @angular/material@5.2.4 
{% endhighlight %}


then we have also to install some more npm packages and modules, this time we gonna download the opackage animations for our angular app. 


{% highlight ruby %}
$ npm install @angular/material @angular/cdk --save 
{% endhighlight %}

and we have also for Angular 5 the same cdk version 5 

{% highlight ruby %}
$ npm install --save @angular/cdk@5.2.4.
{% endhighlight %}




lets have a look at stackoverflow : 
<a href="https://stackoverflow.com/questions/50134205/error-ts2315-type-elementref-is-not-generic#comment88409375_50134524">https://stackoverflow.com/questions/50134205/error-ts2315-type-elementref-is-not-generic
</a>



lets have a look at our package.json file 

{% highlight ruby %}
{
  "name": "ng5-material",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^5.2.11",
    "@angular/cdk": "^5.2.4",
    "@angular/common": "^5.2.0",
    "@angular/compiler": "^5.2.0",
    "@angular/core": "^5.2.0",
    "@angular/forms": "^5.2.0",
    "@angular/http": "^5.2.0",
    "@angular/material": "^5.2.4",
    "@angular/platform-browser": "^5.2.0",
    "@angular/platform-browser-dynamic": "^5.2.0",
    "@angular/router": "^5.2.0",
    "core-js": "^2.4.1",
    "hammerjs": "^2.0.8",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
  "devDependencies": {
    "@angular/cli": "~1.7.4",
    "@angular/compiler-cli": "^5.2.0",
    "@angular/language-service": "^5.2.0",
    "@types/jasmine": "~2.8.3",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~4.1.0",
    "tslint": "~5.9.1",
    "typescript": "~2.5.3"
  }
}
{% endhighlight %}



now open your app in your code editor. mine is visual studio code !

then go to the file in your app folder like :<code> app.module.ts</code>


{% highlight ruby %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'; 
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}


Then lets create a new file named : <code>material.module.ts </code>



{% highlight ruby %}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material'; 
@NgModule ({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],

})

export class MaterialModule {

}
{% endhighlight %}


then open your style.css file 
then include your @import file : 




{% highlight ruby %}
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
{% endhighlight %}


Next, we need to include *HammerJS for gesture support, as some components require this for full-feature support.
In the console, type:

{% highlight ruby %}
$ npm install --save hammerjs
{% endhighlight %}

To include this, we add it to the /src/main.ts entry point as an import:

// Other imports removed for brevity
{% highlight ruby %}
import 'hammerjs';
{% endhighlight %}


{% highlight ruby %}

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs'; 
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

{% endhighlight %}



Finally, if you're going to use any Material Design Icons (they are used quite frequently throughout material), we need to import Material Icons in the /src/index.html file between the head tags: 
{% highlight ruby %}
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
{% endhighlight %}



in the <code>app.component.html </code> we include the code from : https://material.angular.io/components/toolbar/examples

{% highlight ruby %}

      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <span>MyMaterial</span>

          <span class="example-spacer"></span>
          
          <button mat-button>About</button>
          <button mat-button>Services</button>
          <button mat-button>Contact</button>
        </mat-toolbar-row>
      </mat-toolbar>

{% endhighlight %}


then in our app.components.css : we do include our css 

{% highlight ruby %}

.example-icon {
  padding: 0 14px;
}

.example-spacer {
  flex: 1 1 auto;
}

{% endhighlight %}



then we go back to our app.component.html 

{% highlight ruby %}

      <mat-card>  
        <mat-form-field>
          <input matInput [(ngModel)]="answer" placeholder="WHo has the Best Apps?">
        </mat-form-field>

        <br>

          <button mat-raised-button (click)="showAnswer()">Answer</button>
          <mat-spinner [style.display]="showSpinner ? 'block' : 'none'"></mat-spinner>
      </mat-card>
{% endhighlight %}

we have also to include some more code in our app.component.ts  file 


{% highlight ruby %}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  answer: string = '';
  answerDisplay: string = ''; 
  showSpinner: boolean = false;

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false; 

    }, 2000)
  }
}

{% endhighlight %}










all links : 
Angular Material Official WebSpace: 
<a href="https://material.angular.io/">https://material.angular.io/ </a>

Angular Material Components: 
<a href="https://material.angular.io/components/">https://material.angular.io/components/ </a>


Angular Material cdk: 
<a href="https://material.angular.io/cdk/categories">https://material.angular.io/cdk/categories </a>

Angular Material GUIDES: 
<a href="https://material.angular.io/guides">https://material.angular.io/guides </a>







Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
