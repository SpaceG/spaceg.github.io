---
layout:     post
title:      "Git Introduction"
subtitle:   "Download  - Git - Git CommandLines"
date:       2015-03-20 14:00:44
author:     "Lucas Gatsas"
header-img: "img/p0198vg4.jpg"
---
<h2 class="section-heading"><strong>Git CommandLines</strong> </h2>


[Git](http://git-scm.com/) is a free software for distributed version control of files that were originally developed for source control of the Linux kernel.



(1.) Go Download Git [Git](http://git-scm.com/download/mac) I'm also a Mac/Unix & Linux User. But this install and Workflow is for Mac Os X. Do you can Download it directly from [sourceforge.net](http://sourceforge.net/projects/git-osx-installer/files/git-2.2.1-intel-universal-mavericks.dmg/download?use_mirror=autoselect). 

(2.)
Open the pkg File with Doppleclick : 


<a href="#">
    <img src="{{ site.baseurl }}/img/git-sourceforge.png" alt="Post Sample Image" style="width:100%">
</a>

<br> 



<table class="table table-responsive table-hover">
<tbody>
<tr>
<td>

	<code>
	git init
	</code>

</td>
<td>
Create a repo from existing data
</td>
</tr>
<tr>
<td>

	<code>
git clone (repo_url)
</code>

</td>
<td>
Clone a current repo (into a folder with same name as repo)
</td>
</tr>
<tr>
<td>

	<code>
git clone (repo_url) (folder_name)
</code>

</td>
<td>
Clone a repo into a specific folder name
</td>
</tr>
<tr>
<td>

	<code>
git clone (repo_url) .
</code>

</td>
<td>

Clone a repo into current directory (should be an empty directory)

</td>
</tr>
<tr>
<td>

<code>
git remote add origin 
	https://github.com/
	username/
	(repo_name).git
</code>

</td>
<td>
Create a remote repo named origin pointing at your Github repo (after you’ve already created the repo on Github) (used if you git init since the repo you created locally isn’t linked to a remote repo yet)
</td>
</tr>
<tr>
<td>

<code>
git remote add 
	origin git@github.com:
	username/
	(repo_name).git
</code>

</td>
<td>
Create a remote repo named origin pointing at your Github repo (using SSH url instead of HTTP url)
</td>
</tr>
<tr>
<td>

	<code>
git remote
</code>

</td>
<td>
Show the names of the remote repositories you’ve set up
</td>
</tr>
<tr>
<td>
	<code>

git remote -v
</code>

</td>
<td>
Show the names and URLs of the remote repositories
</td>
</tr>
<tr>
<td>
	<code>

git remote rm 
	(remote_name)
	</code>

</td>
<td>
Remove a remote repository
</td>
</tr>
<tr>
<td>

<code>

git remote set-url 
	origin (git_url)
	</code>

</td>
<td>
Change the URL of the git repo
</td>
</tr>
<tr>
<td>

	<code>

git push
</code>

</td>
<td>
Push your changes to the origin
</td>
</tr>
</tbody>
</table>








<a href="#">
    <img src="{{ site.baseurl }}/img/p0198vg4.jpg" alt="Post Sample Image" style="width:100%">
</a>





<blockquote>
	"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
</blockquote>