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


Reade More @ our Files: 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Go Read</a> 
Link: <a href="https://github.com/SpaceG/youtube/edit/master/mongo_db.md">Read More about on my Gist File.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
