---
layout:     post
title:      "How Install Laravel on Mac Os X - { PHP Framework } on Xampp + Mamp"
subtitle:   "Laravel on Xampp + Mamp localhost"
date:       2015-01-05 13:00:02
author:     "Lucas Gatsas"
header-img: "img/600fsull_by_bluespirit33-d7ttrnl.gif"
---
<h2 class="section-heading">Laravel Install </h2>

<blockquote>Update the Post Today! Stay in Space!</blockquote>


<a href="#">
    <img src="{{ site.baseurl }}/img/laravel_logo1.png" alt="Post Sample Image">
</a>



 <code>/Applications/XAMPP/htdocs/L33 </code>

 <code>ls</code>

<code> which php</code>

<code> /Applications/XAMPP/xamppfiles/bin/php </code>

 <code> sudo vi ~/.bash_profile </code>

password: 

<code>**********************************</code>

<code>:wq</code>


<code>cd</code>

then back to bash type


which php
<code>/Applications/XAMPP/xamppfiles/bin/php</code>

<code>composer install </code>




wait, it need a bit time. 


<code>find app/storage -type d -exec chmod 777 {} \; </code>
<code>find app/storage -type f -exec chmod 777 {} \;</code>






Install Composer

Let’s you download and install Composer before
You need to install composer software on you OS , you can get from getcomposer.org and follow instruction on website  i won’t teah you to install composer , Let’s you do it yourself.

https://getcomposer.org/


Get Laravel

Then download Laravel from github here  and place your folder in XAMPP/htdoc

 <code> /Applications/XAMPP/htdoc/{you folder} </code>


 before you install it , you have to check php path that point to 


 <code> /Applications/XAMPP/xamppfiles/bin/php </code>

Terminal Bash :
<code>cd /Applications/XAMPP/htdocs/L4</code>


Terminal Command Line :

<code>sudo vi ~/.bash_profile</code>


export  Path :

<code>“PATH=/Applications/XAMPP/xamppfiles/bin:$PATH”</code>


If finish use ESC to exit


Type composer install after you have finish installation go to browser and enter to 


<code>localhost/{your laraval}</code>


Last problem and solve
Boooom!!! you will get a error on your screen , Go to terminal again user both command

<code>find app/storage -type d -exec chmod 777 {} \;</code>
<code>find app/storage -type f -exec chmod 777 {} \;</code>
then refresh browser you will get complete to install Laravel , Hope to enjoy it!

Update

****Don’t forget restart apache service after set path in<code> ~/.bash_profile</code>
















<a href="#">
    <img src="{{ site.baseurl }}/img/folder-mamp.png" alt="Post Sample Image">
</a>












Install Laravel on MAMP ! 


download 
laravel
laravel.com


download
composer
getcomposer.org



install and run Temrinal .bash


type :

<code>curl -sS https://getcomposer.org/installer | php </code>


type: 


<code>php composer.phar</code> 



type:

<code>composer</code>





to exit : type

<code>clear</code>


<code>exit</code>



Open a New Terminal Bash

type: 


<code>sudo mv composer.phar /usr/local/bin/composer</code>


type: 

<code>composer</code>


type to exit : 


<code>clear</code>





go back to localhost of the index 

localhost/

localhost:8888/





Open New Terminal :


type: 

<code>cd /Applications/MAMP/htdocs/</code>

<code>ls</code>

<code>composer create-project laravel/laravel spaceg --prefer-dist</code>


<code>ls</code> 



<code>rm -R ./*</code>



<code>ls</code> 


<code>cd ~ </code>


<code>ls - l</code>

<code>ls -ls</code>


<code>nano .bash_profile</code>






<code>export PATH=/Applications/MAMP/bin/php/PHP_VERSION/bin/:$PATH</code>




<code>enter the php version</code> 


<code>export PATH=/Applications/MAMP/bin/php/php5.6.2/bin/:$PATH</code>



<code>php5.6.2</code>




<code>ctrl o</code>

<code>ctrl x</code>


Open a New Terminal again:=)



<code>cd /Applications/MAMP/htdocs/</code>



<code>ls</code> 

<code>composer create-project laravel/laravel/ yourprojectname</code>






Preload your Localhost and BOOOOMM!


here is the index of your Laravel PHP Framework to build APPS!
















Globally#

You can place this file anywhere you wish. If you put it in your PATH, you can access it globally. On unixy systems you can even make it executable and invoke it without php.

You can run these commands to easily access composer from anywhere on your system:

curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
Note: If the above fails due to permissions, run the mv line again with sudo.







<code>export PATH=/Applications/MAMP/bin/php/PHP_VERSION/bin/:$PATH</code>

<code>

	<VirtualHost *:80>
	DocumentRoot "/Path/To/New/Document/Root"
	ServerName spaceg.github.io
	<Directory "/Path/To/New/Document/Root">
		Options All
		AllowOverride All
		Order, allow,deny
		Allow from all
	</Directory>
</VirtualHost>

</code>



<!-- 
<a href="#">
    <img src="{{ site.baseurl }}/img/jekyllthemewhite.png" alt="Post Sample Image">
</a> 



 -->



