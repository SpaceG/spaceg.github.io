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



<div class="alert alert-info">
<strong>Git Terminology:</strong><br>
<table class="table table-responsive">
<tbody>
<tr>
<td>
master
</td>
<td>
default branch we develop in
</td>
</tr>
<tr>
<td>
origin
</td>
<td>
default upstream repo (Github)
</td>
</tr>
<tr>
<td>
HEAD
</td>
<td>
current branch
</td>
</tr>
<tr>
<td>
remote
</td>
<td>
repository stored on another computer
</td>
</tr>
<tr>
<td>
staging (adding)
</td>
<td>
adding changed files to index tree to be committed
</td>
</tr>
</tbody>
</table>
<p>
Here’s a good <a href="http://stackoverflow.com/questions/7076164/terminology-used-by-git" target="_blank" class="alert-link">glossary</a> of definitions.
</p>
</div>



<br>


<h2 class="section-heading"><a href="#starting-a-repo-init/clone/remote"><span class="heading-link ti-link"></span> Starting a Repo <small>init/clone/remote</small></a></h2>



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


<br>



<h2 class="section-heading"><a href="#showing-changes-status/diff/log/blame"><span class="heading-link ti-link"></span> Showing Changes <small>status/diff/log/blame</small></a></h2>


<br>





<table class="table table-responsive table-hover">
<tbody>
<tr>
<td>
	<code>
git status
</code>
</td>


<td>
Show the files changed
</td>
</tr>
<tr>
<td>

	<code>
git diff
</code>
</td>



<td>
Show changes to files compared to last commit
</td>
</tr>
<tr>
<td>

	<code>
git diff (filename)
</code>
</td>


<td>
Show changes in single file compared to last commit
</td>
</tr>
<tr>
<td>

	<code>
git diff (commit_id)
</code>
</td>


<td>
Show changes between two different commits.
</td>
</tr>
<tr>
<td>
	<code>
git log
</code>
</td>


<td>
Show history of changes
</td>
</tr>
<tr>
<td>
	<code>
git blame (filename)
</code>
</td>
<td>
Show who changed each line of a file and when
</td>
</tr>
</tbody>
</table>


<br>



<div class="alert alert-info">
<strong>Commit ID:</strong> This can be that giant long SHA-1 hash. You can call it many different ways. I usually just use the <strong>first 4 characters</strong> of the hash.
</div>


<br>




<h2 class="section-heading"><a href="#undoing-changes-reset/revert"><span class="heading-link ti-link"></span> Undoing Changes <small>reset/revert</small></a></h2>



<br>


<table class="table table-responsive table-hover">
<tbody>
<tr>
<td>
	<code>
git reset –hard
</code>
</td>
<td>
Go back to the last commit (will not delete new unstaged files)
</td>
</tr>
<tr>
<td>
	<code>
git revert HEAD
</code>
</td>
<td>
Undo/revert last commit AND create a new commit
</td>
</tr>
<tr>
<td>
	<code>
git revert (commit_id)
</code>
</td>
<td>
Undo/revert a specific commit AND create a new commit
</td>
</tr>
</tbody>
</table>




<br>



<h2 class="section-heading"><a href="#staging-files-add/rm"><span class="heading-link ti-link"></span> Staging Files <small>add/rm</small></a></h2>



<br>


<table class="table table-responsive table-hover">
<tbody>
<tr>
<td><code>
git add -A</code>
</td>
<td>
Stage all files (new, modified, and deleted)
</td>
</tr>
<tr>
<td><code>
git add .</code>
</td>
<td>
Stage new and modified files (not deleted)
</td>
</tr>
<tr>
<td><code>
git add -u</code>
</td>
<td>
Stage modified and deleted files (not new)
</td>
</tr>
<tr>
<td><code>
git rm (filename)</code>
</td>
<td>
Remove a file and untrack it
</td>
</tr>
<tr>
<td><code>
git rm (filename) –cached</code>
</td>
<td>
Untrack a file only. It will still exist. Usually you will add this file to .gitignore after rm
</td>
</tr>
</tbody>
</table>


<br>


<div class="alert alert-info">
<strong>Git Workflow Trees:</strong> How adding and committing moves files between the different git trees.
</div>
<br>








<a href="#">
    <img src="{{ site.baseurl }}/img/p0198vg4.jpg" alt="Post Sample Image" style="width:100%">
</a>





<blockquote>
	"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
</blockquote>