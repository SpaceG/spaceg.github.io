---
title:  "Install AngularJS"
date:   2018-05-13 10:18:00
description: Get Ready with Google Angular5
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">mongoDB Commandlines & set up Database</h2>

<h1>Step 1: Install AngularJS with npm</h1>


{% highlight ruby %}
codes-Mac-mini:~ jh$ sudo npm install @angular/cli -g 
Password:
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng

> fsevents@1.2.3 install /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents
> node install

[fsevents] Success: "/usr/local/lib/node_modules/@angular/cli/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> @angular/cli@6.0.1 postinstall /usr/local/lib/node_modules/@angular/cli
> node ./bin/ng-update-message.js

+ @angular/cli@6.0.1
added 321 packages from 208 contributors in 16.673s


   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │       New patch version of npm available! 6.0.0 → 6.0.1        │
   │   Changelog: https://github.com/npm/npm/releases/tag/v6.0.1:   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

codes-Mac-mini:~ jh$ ng -v

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 6.0.1
Node: 8.10.0
OS: darwin x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.6.1
@angular-devkit/core         0.6.1
@angular-devkit/schematics   0.6.1
@schematics/angular          0.6.1
@schematics/update           0.6.1
rxjs                         6.1.0
typescript                   2.7.2
    
codes-Mac-mini:~ jh$ 






{% endhighlight %}






<h1>Step 1: Install AngularJS with npm</h1>

{% highlight ruby %}

sudo npm install @angular/cli -g 
{% endhighlight %}



<h1>Step 2: checkout version</h1>

{% highlight ruby %}

ng -v
{% endhighlight %}



<h1>Step 3: Update Version</h1>

{% highlight ruby %}
codes-Mac-mini:~ jh$ sudo npm install @angular/cli -g 
Password:
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng

> fsevents@1.2.3 install /usr/local/lib/node_modules/@angular/cli/node_modules/fsevents
> node install

[fsevents] Success: "/usr/local/lib/node_modules/@angular/cli/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> @angular/cli@6.0.1 postinstall /usr/local/lib/node_modules/@angular/cli
> node ./bin/ng-update-message.js

+ @angular/cli@6.0.1
added 321 packages from 208 contributors in 16.673s


   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │       New patch version of npm available! 6.0.0 → 6.0.1        │
   │   Changelog: https://github.com/npm/npm/releases/tag/v6.0.1:   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

{% endhighlight %}





<h1>Step 4: $ ng</h1>


{% highlight ruby %}

codes-Mac-mini:~ jh$ ng
Available Commands:
  add Add support for a library to your project.
  new Creates a new directory and a new Angular app.
  generate Generates and/or modifies files based on a schematic.
  update Updates your application and its dependencies.
  build Builds your app and places it into the output path (dist/ by default).
  serve Builds and serves your app, rebuilding on file changes.
  test Run unit tests in existing project.
  e2e Run e2e tests in existing project.
  lint Lints code in existing project.
  xi18n Extracts i18n messages from source code.
  run Runs Architect targets.
  eject Temporarily disabled. Ejects your app and output the proper webpack configuration and scripts.
  config Get/set configuration values.
  help Help.
  version Outputs Angular CLI version.
  doc Opens the official Angular API documentation for a given keyword.

For more detailed help run "ng [command name] --help"
codes-Mac-mini:~ jh$ 
{% endhighlight %}


<h1>Step 5: Create App</h1>


{% highlight ruby %}

$ ng new ng5 --style=scss --routing 

{% endhighlight %}


{% highlight ruby %}

codes-Mac-mini:~ jh$ mkdir ngcode
codes-Mac-mini:~ jh$ cd ngcode
codes-Mac-mini:ngcode jh$ ls
codes-Mac-mini:ngcode jh$ ng new ng5 --style=scss --routing 
CREATE ng5/README.md (1020 bytes)
CREATE ng5/angular.json (3471 bytes)
CREATE ng5/package.json (1307 bytes)
CREATE ng5/tsconfig.json (384 bytes)
CREATE ng5/tslint.json (2805 bytes)
CREATE ng5/.editorconfig (245 bytes)
CREATE ng5/.gitignore (503 bytes)
CREATE ng5/src/environments/environment.prod.ts (51 bytes)
CREATE ng5/src/environments/environment.ts (631 bytes)
CREATE ng5/src/favicon.ico (5430 bytes)
CREATE ng5/src/index.html (290 bytes)
CREATE ng5/src/main.ts (370 bytes)
CREATE ng5/src/polyfills.ts (3194 bytes)
CREATE ng5/src/test.ts (642 bytes)
CREATE ng5/src/assets/.gitkeep (0 bytes)
CREATE ng5/src/styles.scss (80 bytes)
CREATE ng5/src/browserslist (375 bytes)
CREATE ng5/src/karma.conf.js (964 bytes)
CREATE ng5/src/tsconfig.app.json (194 bytes)
CREATE ng5/src/tsconfig.spec.json (282 bytes)
CREATE ng5/src/tslint.json (314 bytes)
CREATE ng5/src/app/app-routing.module.ts (245 bytes)
CREATE ng5/src/app/app.module.ts (393 bytes)
CREATE ng5/src/app/app.component.scss (0 bytes)
CREATE ng5/src/app/app.component.html (1173 bytes)
CREATE ng5/src/app/app.component.spec.ts (1103 bytes)
CREATE ng5/src/app/app.component.ts (208 bytes)
CREATE ng5/e2e/protractor.conf.js (752 bytes)
CREATE ng5/e2e/src/app.e2e-spec.ts (299 bytes)
CREATE ng5/e2e/src/app.po.ts (208 bytes)
CREATE ng5/e2e/tsconfig.e2e.json (213 bytes)
⸨            ░░░░░░⸩ ⠇ refresh-package-json:regex-not: sill refresh-package-json /Users/jh/ng

{% endhighlight %}



<h1>Step 5: Create App</h1>




{% highlight ruby %}
> fsevents@1.2.3 install /Users/jh/ngcode/ng5/node_modules/fsevents
> node install

[fsevents] Success: "/Users/jh/ngcode/ng5/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> node-sass@4.9.0 install /Users/jh/ngcode/ng5/node_modules/node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.9.0/darwin-x64-57_binding.node
Download complete  ⸩ ⠋ :
Binary saved to /Users/jh/ngcode/ng5/node_modules/node-sass/vendor/darwin-x64-57/binding.node
Caching binary to /Users/jh/.npm/node-sass/4.9.0/darwin-x64-57_binding.node

> node-sass@4.9.0 postinstall /Users/jh/ngcode/ng5/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/jh/ngcode/ng5/node_modules/node-sass/vendor/darwin-x64-57/binding.node
Testing binary
Binary is fine

> @angular/cli@6.0.1 postinstall /Users/jh/ngcode/ng5/node_modules/@angular/cli
> node ./bin/ng-update-message.js

added 1148 packages from 1284 contributors in 59.485s
[!] 14 vulnerabilities found [21355 packages audited]
    Severity: 10 low | 4 high
    Run `npm audit` for more detail

    Successfully initialized git.
{% endhighlight %}

<h1>Step 5: Create App</h1>



{% highlight ruby %}

added 1148 packages from 1284 contributors in 59.485s
[!] 14 vulnerabilities found [21355 packages audited]
    Severity: 10 low | 4 high
    Run `npm audit` for more detail

    Successfully initialized git.


{% endhighlight %}


<h1>Step 6: Open The Angular App</h1>


{% highlight ruby %}


codes-Mac-mini:ngcode jh$ ls
ng5
codes-Mac-mini:ngcode jh$ cd ng5
codes-Mac-mini:ng5 jh$ ls
README.md		node_modules		src
angular.json		package-lock.json	tsconfig.json
e2e			package.json		tslint.json
codes-Mac-mini:ng5 jh$ 

{% endhighlight %}





<h1>Step 7: Start the Server</h1>


{% highlight ruby %}

$ ng serve

{% endhighlight %}

<h1>Step 8: Start the Server localhost:4200</h1>


{% highlight ruby %}

codes-Mac-mini:ng5 jh$ ng serve
** Angular Live Development Server is listening on localhost: 4200, open your browser on http://localhost:4200/ **
                                                                                          
Date: 2018-05-13T22:39:01.106Z
Hash: 55467e0557c2e683108e
Time: 13190ms
chunk {main} main.js, main.js.map (main) 12.8 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.4 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 15.9 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.62 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
{% endhighlight %}


To create componetns, type these code below. example : 
{% highlight ruby %}
$  ng generate component home
{% endhighlight %}


{% highlight ruby %}

codes-Mac-mini:ng5 jh$ ng generate component home
CREATE src/app/home/home.component.scss (0 bytes)
CREATE src/app/home/home.component.html (23 bytes)
CREATE src/app/home/home.component.spec.ts (614 bytes)
CREATE src/app/home/home.component.ts (262 bytes)
UPDATE src/app/app.module.ts (467 bytes)
codes-Mac-mini:ng5 jh$ 
{% endhighlight %}


checkout the new folder which was created, by the generate components :


<img src="https://spaceg.github.io/assets/images/angu_1.jpg">


so now let's create some pages : 

{% highlight ruby %}

 $ ng g c about

{% endhighlight %}

see the terminal below: 


{% highlight ruby %}

codes-Mac-mini:ng5 jh$ ng g c about
CREATE src/app/about/about.component.scss (0 bytes)
CREATE src/app/about/about.component.html (24 bytes)
CREATE src/app/about/about.component.spec.ts (621 bytes)
CREATE src/app/about/about.component.ts (266 bytes)
UPDATE src/app/app.module.ts (545 bytes)
codes-Mac-mini:ng5 jh$ 

{% endhighlight %}

right now we gonna see the new pages in our Visual Code 

<img src="https://spaceg.github.io/assets/images/angu_2.jpg">

{% highlight ruby %}

codes-Mac-mini:ng5 jh$ ng g c about
CREATE src/app/about/about.component.scss (0 bytes)
CREATE src/app/about/about.component.html (24 bytes)
CREATE src/app/about/about.component.spec.ts (621 bytes)
CREATE src/app/about/about.component.ts (266 bytes)
UPDATE src/app/app.module.ts (545 bytes)
codes-Mac-mini:ng5 jh$ 

{% endhighlight %}


now go back to the app.component.html file, this is our index file. 
{% highlight ruby %}

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>

<router-outlet></router-outlet>


{% endhighlight %}


Remove the Angular Html MarkUp : and let's create a routerLink: 
{% highlight ruby %}

<!--The content below is only a placeholder and can be replaced.-->

<ul>

    <li><a routerLink="">Home</a></li>

</ul>




<router-outlet></router-outlet>

{% endhighlight %}



Now you can also Link to the diffirent Pages: 
{% highlight ruby %}


<!--The content below is only a placeholder and can be replaced.-->

<ul>
  <li><a routerLink="">Home</a></li>
  <li><a routerLink="about">About</a></li>
</ul>




<router-outlet></router-outlet>
{% endhighlight %}



Now you can see the Componetns at the about.components.ts page


{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}

in the main index.html file which gonna link the app-root ! 

the <strong><code> <app-root></app-root> </code></strong>

{% highlight ruby %}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ng5</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

{% endhighlight %}


Right now we gonna Design & Template Styling


In the home.components.ts you find this Code : 




{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}



We can change something like this : in the component : 

<code>templateURL</code>

change it to : 

{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '
  
    <p>This is my Hello World!</p>

  ,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}


Now go back to your Server and start your server with <code>ng serve</code>

<img src="https://spaceg.github.io/assets/images/angu_3.jpg">




now go back to your code: and change something : 


{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}


now we can change it allready in the home.components.html file 


{% highlight ruby %}
<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits">
            <input type="submit" class="btn" value="Add Item">
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>
{% endhighlight %}



Now let's go back to the home.components.ts , now let's change the styles.. 


{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

{% endhighlight %}



now let's change the styles.. 

{% highlight ruby %}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['
  
  p { font-weight: bold } div { color: gray }
  
  ']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

{% endhighlight %}



<img src="https://spaceg.github.io/assets/images/angu_4.jpg">


Now let's go back : CHange the follow code again : 


{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}


Now, finally we can also styling our css with scss file in the home.components.scss file 

But, you find also some more styles.scss file in the root of your code : like  the file styles.scss 
you can also add there your global styles ! 

{% highlight ruby %}
styles.scss 
/* You can add global styles to this file, and also import other style files */


@import url('https://fonts.googleapis.com/css?family=Open+Sans');


body {
    background: rgb(255, 255, 255);
    padding: 3em;
    font-family: 'Open Sans', sans-serif; 
    color: blue; 

}
ul {
    list-style-type:none;
    margin: 0 0 2em 0;
    padding:0;

}

ul li {
    display:inline;
    margin-right: 30px; 

}

ul li a {
    font-size: 1.5em ;
}

a {
    color: blue; 
}
{% endhighlight %}



<img src="https://spaceg.github.io/assets/images/angu_5.jpg">


{% highlight ruby %}

                                                                                          
Date: 2018-05-20T15:09:04.448Z - Hash: aaba6bd1af515d64a753 - Time: 173ms
4 unchanged chunks
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:09:06.027Z - Hash: aaba6bd1af515d64a753 - Time: 80ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:09:06.633Z - Hash: aaba6bd1af515d64a753 - Time: 98ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:09:40.628Z - Hash: f6d4db58756d36f587f7 - Time: 133ms
4 unchanged chunks
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.

{% endhighlight %}


See the Changes in the Terminal below: 
<img src="https://spaceg.github.io/assets/images/angu_6.jpg">


Now, let's go back to our home.components.scss file and code your css down like mine: 

{% highlight ruby %}

.container {
    display: grid;
    grid-template-columns: 50% auto;
}
.col {
    padding: .4em 1.3em;
}
.color-dark {
    background: rgb(222, 242, 255);
}
.color-light {
    background: rgb(238, 248, 255);
}

input.txt {
    border: 0;
    padding: 1em;
    width: 80%;
    margin-bottom: 2em;
    border-radius: 4px;
}
input.btn {
    border: 0;
    display:block;
    padding:1em 3em;
    background:#A5F883;
    color:#003A61;
    margin-bottom:1em;
    cursor:pointer;
    border-radius: 4px;
}
.git-container {
    background:rgb(222, 242, 255);
    padding:.5em;
    font-weight:bold;
    cursor:pointer;
    border-radius: 4px; 
}
{% endhighlight %}



Now go back to the home.components.ts file and let0s change the components : 
back to the <code> styleUrls:</code>

{% highlight ruby %}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}



<img src="https://spaceg.github.io/assets/images/angu_7.jpg">

What a amazing workflow?! :) isn't it ? :) Okey let's go forward ! 




<img src="https://spaceg.github.io/assets/images/angu_8.jpg">


Okey, let's go  Interpolation, Property & Event Binding  



{% highlight ruby %}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //now let's code in there 


  itemCount: number = 4; 



  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}


now let's go back to the home.components.html file 

But the          ({{ itemCount }}) to paragraph ! Now Save that, go back to your localhost! 


{% highlight ruby %}
<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits">
            <input type="submit" class="btn" value="Add Item">
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>
{% endhighlight %}




<img src="https://spaceg.github.io/assets/images/angu_9.jpg">


now you see the Numer 4 in your Treny List (4). 


Now we can also include some more Property into our code : 






{% highlight ruby %}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //now let's code in there 


  itemCount: number = 4; 



  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}


now we can also include the {{ btnText }}

{% highlight ruby %}


<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits">
            <input type="submit" class="btn" value="{{ btnText }}">
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>
{% endhighlight %}

Now actally, we can also change and give another Event Binding like [value]="btnText


{% highlight ruby %}



<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits">
            <input type="submit" class="btn" [value]="btnText">
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>

{% endhighlight %}

Now it's the same thing, after your preload it ! 





<img src="https://spaceg.github.io/assets/images/angu_10.jpg">



Now you can find a file named app.modules.ts now we add some modules right now to our application! 

{% highlight ruby %}
dd the follow line 
import { FormsModule } from '@angular/forms';
{% endhighlight %}



{% highlight ruby %}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//add the follow line 
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

{% endhighlight %}

Now Save that and go back to the home.component.ts 


{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //now let's code in there 


  itemCount: number = 4; 
  btnText: string =  'Add a Git';
  gitText: string = 'My First Git';


  constructor() { }

  ngOnInit() {
  }

}
{% endhighlight %}



Add some html Text! 


{% highlight ruby %}

<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits" [(ngModel)]="gitText">
            <br><span>{{ gitText }}</span>
            <input type="submit" class="btn" [value]="btnText">
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>
{% endhighlight %}


Now let's see the Terminal APP! 


{% highlight ruby %}

Date: 2018-05-20T15:51:51.405Z - Hash: 40bb1a628013104eb637 - Time: 5417ms
3 unchanged chunks
chunk {main} main.js, main.js.map (main) 19.1 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.62 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:51:54.826Z - Hash: 40bb1a628013104eb637 - Time: 139ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:52:06.033Z - Hash: 40bb1a628013104eb637 - Time: 136ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:53:27.808Z - Hash: d15d3b3a0898aedccb6f - Time: 6592ms
3 unchanged chunks
chunk {main} main.js, main.js.map (main) 19.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.88 MB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:56:40.397Z - Hash: 75f1a0870c047f1772d7 - Time: 317ms
4 unchanged chunks
chunk {main} main.js, main.js.map (main) 19.4 kB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T15:56:44.755Z - Hash: 75f1a0870c047f1772d7 - Time: 163ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T16:00:08.784Z - Hash: 23c66006b2195fd2a931 - Time: 187ms
4 unchanged chunks
chunk {main} main.js, main.js.map (main) 19.4 kB [initial] [rendered]
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: wait until bundle finished: /runtime.js
ℹ ｢wdm｣: wait until bundle finished: /polyfills.js
ℹ ｢wdm｣: wait until bundle finished: /styles.js
ℹ ｢wdm｣: wait until bundle finished: /polyfills.js.map
ℹ ｢wdm｣: wait until bundle finished: /styles.js.map
                                                                                          
Date: 2018-05-20T16:00:09.331Z - Hash: 23c66006b2195fd2a931 - Time: 170ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T16:00:17.009Z - Hash: 23c66006b2195fd2a931 - Time: 139ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T16:00:24.844Z - Hash: 23c66006b2195fd2a931 - Time: 196ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
                                                                                          
Date: 2018-05-20T16:00:32.042Z - Hash: 23c66006b2195fd2a931 - Time: 449ms
5 unchanged chunks
ℹ ｢wdm｣: Compiled successfully.
{% endhighlight %}


<img src="https://spaceg.github.io/assets/images/angu_11.jpg">




Now we go back and add some events to our html file : add an event : (click)="addItem()"

{% highlight ruby %}


 <input type="submit" class="btn" [value]="btnText" (click)="addItem()" >


 {% endhighlight %}


{% highlight ruby %}

<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="Trendy Gits" [(ngModel)]="gitText">
            <input type="submit" class="btn" [value]="btnText" (click)="addItem()" >
          </form>
    </div>
    <div class="col">
      <p class="git-container">
            I want to be a Trendy Git
      </p>
    </div>
</div>


{% endhighlight %}



Now let's  change the follow process : 



{% highlight ruby %}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  gitText: string = 'My first Gitlist';
  gits = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.gits.length;
  }

  addItem() {
    this.gits.push(this.gitText);
    this.gitText = '';
    this.itemCount = this.gits.length;
  }

}
{% endhighlight %}


Now, it's gonna be count, not listed, now see the image below. 


<img src="https://spaceg.github.io/assets/images/angu_12.jpg">



Now Let's fix this in our Template! 



{% highlight ruby %}

<div class="container color-dark">
    <div class="col">
      <p>Add Some Git List</p>
    </div>
    <div class="col">
        <p>Your Git List ({{ itemCount }})</p>
    </div>
  </div>
    <div class="container color-light">
    <div class="col">
        <p class="sm">Use The Form below to add new Git to the Gitlist</p>
        <form>
            <input type="text" class="txt" name="item" placeholder="GitList" [(ngModel)]="gitText">
            <input type="submit" class="btn" [value]="btnText" (click)="addItem()">
          </form>
    </div>
    <div class="col">
        <p class="git-container" *ngFor="let git of gits">
            {{ git }}
          </p>
    </div>
</div>

{% endhighlight %}



add this in our Html file ! 


{% highlight ruby %}

     <p class="git-container" *ngFor="let git of gits">
            {{ git }}
          </p>

{% endhighlight %}





<img src="https://spaceg.github.io/assets/images/angu_13.jpg">





Reade More @ our Files: 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Go Read</a> 
Link: <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Read More about on my Gist File.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
