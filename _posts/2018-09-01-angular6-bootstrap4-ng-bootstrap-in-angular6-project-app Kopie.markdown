---
title:  "Angular 6 - Include Bootstrap 4 - Sass Files"
date:   2018-09-02 10:18:23
description: Install Sass Files to your Bootstrap 4 + Angular 6 App
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Angular 6 - with Bootstrap 4</h2>

<small>Angular 6, Framework, components, command-line, CLI, Angular CLI, Bootstrap 4 </small>

This post assumes that you have already created an Angular CLI project and configured its default stylesheets to SASS files.

If you are just about to start a new Angular CLI project, then you can easily do that by using the following command:

<strong>DEMO</strong> <a href="https://angular6-spaceg-judgement-day.stackblitz.io/">angular6-spaceg-judgement-day.stackblitz.io </a>

<strong>DEMO 2 - Stackblitz</strong> <a href="https://stackblitz.com/edit/angular6-spaceg-judgement-day?file=src%2Findex.html">https://stackblitz.com/edit/angular6-spaceg-judgement-day?file=src%2Findex.html</a>

EMBED URL 
 <a href="https://stackblitz.com/edit/angular6-spaceg-judgement-day?embed=1&file=src/index.html">https://stackblitz.com/edit/angular6-spaceg-judgement-day?embed=1&file=src/index.html
</a>

<h1>Angular 6 & Bootstrap 4</h1>

Let's see the start Guide. here @  <a href="https://ng-bootstrap.github.io/#/getting-started">Bootstrap 4 - Ng - Bootstrap 4</a>

{% highlight ruby %}
$ ng new my-sass-app --style=scss
{% endhighlight %}
Now, let’s get back to the subject of this article because that’s what you are here for.

We are going to add Bootstrap 4 to our project together with its SASS files so that we can easily customise it to fit our needs.
<h1>Add Bootstrap 4
</h1>
We can easily install Bootstrap 4 in our project via npm or yarn:

{% highlight ruby %}
npm install bootstrap --save
// or using yarn
yarn add bootstrap
{% endhighlight %}

After installing it, we need to add the Bootstrap SASS main file (i.e. where all the styles such as variables, mixins, forms, buttons, tables etc. are imported) to the styles.scss file, which has been automatically generated when you created the project.
{% highlight ruby %}

// styles.scss
@import "../node_modules/bootstrap/scss/bootstrap.scss";
{% endhighlight %}


If you changed the default location of the styles.scss file, then you need to use the following version.

{% highlight ruby %}

// styles.scss
@import "~bootstrap/scss/bootstrap.scss";
{% endhighlight %}

I personally prefer using the latter version as it’s prettier and you don’t need to change anything if you move the styles.scss file to other folders.


<h1>Customise global variables from Bootstrap</h1>
Now that we have added Bootstrap 4 to our project, we can finally start having our customised version of Bootstrap.

Why would you want to do that?

Well, if you don’t know, the SASS version of Bootstrap has all the default colours, font sizes, backgrounds etc. defined in a separate file (you can check out the file here).

This allows you to customise it and have your own version of Bootstrap.

For example, you might want to change the primary colour for buttons across the whole framework, or the default radius for buttons.

We can either do that directly in the styles.scss or create a separate .scss file and import it in styles.scss.

My suggestion would be, especially if you are just about to start with the project, to create a separate SASS file: _variables.scssand import it in the styles.scssfile as such:





{% highlight ruby %}

// styles.scss
@import "variables";
@import "~bootstrap/scss/bootstrap.scss";
{% endhighlight %}




If you are curious what variables you can override, then have a look at the original _variables.scss file here.

I usually tend to first start overriding the default colours provided by Bootstrap as such.


{% highlight ruby %}

// _variables.scss
$primary: #3498db;
$secondary: #e67e22;
$success: #2ecc71;
$danger: #e74c3c;
{% endhighlight %}


That’s it! You can easily customise Bootstrap 4 now.

If you want to find out how the styles get attached to your project and more internal details, then feel free to read the rest of this article.

Otherwise, thanks for reading and I hope you found it useful!





<h1>Why is the “variables” file imported before the “bootstrap” files?</h1>
That seems weird, doesn’t it?

You might be wondering why are our customised variables imported before the actual framework.

Shouldn’t they be imported after the framework so that they can be overridden?

If you have a closer look at the _variables.scss file provided by Bootstrap, then you will see that all variables have the !default keyword at the end.

From the SASS documentation:
<blockquote>
You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one</blockquote>
This means that we first need to import our custom variables, otherwise they won’t be used when we import Bootstrap.

<h1>Can I add Bootstrap to .angular-cli.json instead of styles.scss?</h1>

One might ask why we are not adding the path (i.e. ../node_modules/bootstrap/scss/bootstrap.scss) to the styles array inside our .angular-cli.jsonfile as such:
{% highlight ruby %}

"styles": [
  "../node_modules/bootstrap/scss/bootstrap.scss",
  "styles.scss"
]
{% endhighlight %}


Well, you can indeed do that, but you won’t be able to customise it as whenever you add a new path to the stylesarray inside .angular-cli.json, they get appended as internal CSS between your <head>tags.

As a consequence, if you define your Bootstrap path in the .angular-cli.jsonfile, then it gets appended to the top of your index.htmland the styles coming from your styles.scss file are appended separately.

Troubleshooting: if you get an error similar to the one below

BrowserslistError: Unknown browser major

then you might have an older version of Angular CLI (run ng -versionto check it) and need to update it to Angular CLI 1.7+.

This was an issue with the Angular CLI which was fixed before, so don’t worry about it.

If you would like to find out more about the issue, then you can check it here.

Thanks for having the patience to read the article until the end and I hope you learnt something new today.





Set Up follwing commandlines for testing. etc.

wiki of angular commandline interface 

<a href="https://github.com/angular/angular-cli/wiki">https://github.com/angular/angular-cli/wiki </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
