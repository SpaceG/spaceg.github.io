---
layout: post

#event information
title:  "Salt + Hash Password Generator"
cover: "img/sh.jpg"
date:   2017-08-09

#event organiser details
organiser: "Lucas Gatsas"


---

<h2 class="section-heading">Salt + Hash Password Generator in Node.js </h2>


![Alt text](https://raw.githubusercontent.com/SpaceG/salt-hash-password/master/salthash.png "Optional Title")


This practice gonna be to the Salt and Hash Generator in Node.js! I will example you, how to code this Script.
So let's Start it. Now, first of all, we need to Install already Node.js on our Machine. 

Then, we create a foler like <code>SaltHash</code> Then we open  that Folder with our Terminal.
Create your package.json file with our dependencies for the Node.js Modules. 

Okey, let's downlaod the Module <code>crypto</code> with <code>npm install crypto </code> packages. The JavaScript implementations of Standard and Secure Cryptographic Algorithms.



<div style="overflow:auto; height=200; width=100%;">
<pre style="background:white;">



{
  "name": "hash",
  "version": "1.0.0",
  "description": "hash password",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "hash",
    "password"
  ],
  "author": "Lucas Gatsas",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/SpaceG/salt-hash-password"
  },
  "bugs": {
    "url": "https://github.com/SpaceG/salt-hash-password"
  },
  "homepage": "https://github.com/SpaceG/salt-hash-password"
}


</pre></div>

<a href="{{ site.baseurl }}/img/sh.jpg">
    <img src="{{ site.baseurl }}/img/sh.jpg" style="width:100%" alt="Lucas Gatsas">
</a>

Then we create the <code>index.js</code> file to start and create our app. 


<div style="overflow:auto; height=200; width=100%;">
<pre style="background:white;">
'use strict';
var crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+userpassword);
    console.log('Passwordhash = '+passwordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);
}

saltHashPassword('MYPASSWORD');
saltHashPassword('MYPASSWORD');
</pre></div>

Now we are finish, then start the app with  <code>node index.js</code> in the Terminal, prompt and it will give your output like :

<div style="overflow:auto; height=200; width=100%;">
<pre style="background:white;">
<code>node index.js</code>
UserPassword = MYPASSWORD
Passwordhash = 72326df0c134ad67c7066d869d49e7891b1e5557ba496f6d54b73bb50e5d93c79bb20f2f861b74b3a296eab330d8f53792b1c8e7d6696d1f451485e3bc5cab1c
nSalt = 40dd704e393618c3
UserPassword = MYPASSWORD
Passwordhash = d9130ca8df005768884d3a7a887695d604866199fbb9326b47db7165eb38d3744cb12dae823b02f6bc82822cee2e0965a6c1e0d4d9b223caa6238eaf670b68c4
nSalt = 18ea7d118e4fcc61
</pre></div>


This it, Hope you like my Salt/Hash Passwort Generator. Please feel free to Fork, Star and Clone it. 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/salt-hash-password">Download</a> 
Link: <a href="https://github.com/SpaceG/salt-hash-password/">Salt Hash Password Generator in (SHA-512).</a> 

<br>

