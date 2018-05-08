---
title:  "git config --local credential.helper "
date:   2018-05-08 10:18:00
description: Slove your Git Conflict 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">This Partial shows, you how to slove your conflict with your local and remote github git Repositorys</h2>

<h1>Step 1: CheckOut your Repository Local</h1>


{% highlight ruby %}

$ git config --global user.name "Lucas"

$ git config --global user.name
Lucas

$ config --global user.email  "yourmail@gmail.com"

$ git config --global user.email 
yourmail@gmail.com

{% endhighlight %}


Then run follow commandlines! 


{% highlight ruby %}

$ git add --all

$ git cmmit -m "your Changes"

$ git push 

$ git push origin master

$ git remote -v

$ git config --local credential.helper ""

$ git push origin master 



{% endhighlight %}



That's its ! Have Fun with your Remote Work. :)



This show the conflict below : 


{% highlight ruby %}
codes-Mac-mini:~ jh$ cd oAuthy-SailsJS-PassportJS-MongoDB-Authentication
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ ls
Gruntfile.js		assets			tasks
README.md		config			views
api			package-lock.json
app.js			package.json
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   views/login.ejs

no changes added to commit (use "git add" and/or "git commit -a")
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git add --all
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git commit -m "change the type input"
[master 653a239] change the type input
 1 file changed, 2 insertions(+), 1 deletion(-)
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git push origin master
remote: Permission to SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication.git denied to uiuxfy.
fatal: unable to access 'https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication.git/': The requested URL returned error: 403
{% endhighlight %}



This past shows you, sloved part with the Git workflow: 


{% highlight ruby %}
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git config --local credential.helper ""
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git push origin master
Username for 'https://github.com': SpaceG
Password for 'https://SpaceG@github.com': 
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 375 bytes | 375.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication.git
   a5bfb3c..653a239  master -> master
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working tree clean
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ git branch
* master
codes-Mac-mini:oAuthy-SailsJS-PassportJS-MongoDB-Authentication jh$ 
{% endhighlight %}






This it, Hope you like my SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1. Please feel free to Fork, Star and Clone it. 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication">Download</a> 
Link: <a href="https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication">SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
