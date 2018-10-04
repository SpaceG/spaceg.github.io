---
title:  "Angular 6 on Windows 10 - The Basics 02 - Understanding the Role of AppModule and Component Declaration
"
date:   2018-10-03 00:00:04
description: Get Start with Angular 6 on Windows.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 on Windows 10 - The Basics 02 - Understanding the Role of AppModule and Component Declaration
</h2>

<small>Angular 6, Javascript, Framework, Tutorial, Install Angular 6 on Windows 10</small>

{% highlight ruby %}
$ app.module.ts 
{% endhighlight %}


you will find a the imports! there you also can add, these modules for your Angular 6 Project. 
and it also import your components for your Angular App. 

like this example from a Bigger Angular 6 App, which I'm work on. 

{% highlight ruby %}
import { Component, OnInit } from '@angular/core';
import { ValuationService } from '../../../service/valuation/valuation.service';
import { ActivatedRoute } from '@angular/router';
import { Building, Change, ConstructionYear, Valuation } from '../../../shared/valuation/valuation.model';
import { AppStateService } from '../../../service/app-state/app-state.service';
import { ConfirmationService } from 'primeng/api';
import { TranslationService } from '../../../service/translation/translation.service';
{% endhighlight %}


now, we need these two imports for our current app, which we work on. 


import these following angular imports packages:


{% highlight ruby %}
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
{% endhighlight %}


That's it, how iporting Moduling form Angular 6 Working. ! :) 

Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work as Front-End Developer @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
