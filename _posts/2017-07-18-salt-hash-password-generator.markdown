---
title:  "Salt + Hash Password Generator"
date:   2017-07-06 10:18:00
description: Salt + Hash Password Generator
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">This practice gonna be to the Salt and Hash Generator in Node.js! I will example you, how to code this Script. So let's Start it. Now, first of all, we need to Install already Node.js on our Machine. <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)" target="_blank">wiki/Salt_(cryptography)</a> Then, we create a foler like <code>SaltHash</code> Then we open  that Folder with our Terminal. <a href="https://en.wikipedia.org/wiki/Npm_(software)" target="_blank">Create your Npm_(software) package.json file with our dependencies for the Node.js Modules. </a>. Okey, let's downlaod the Module <code>crypto</code> with <code>npm install crypto </code> packages. The JavaScript implementations of Standard and Secure Cryptographic Algorithms.</h2>


<h1>The Package.json File</h1>
Lets Create it via Commandline

{% highlight ruby %}
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

{% endhighlight %}
Then we create the <code>index.js</code> file to start and create our app. 

{% highlight ruby %}
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
{% endhighlight %}




Now we are finish, then start the app with  <code>node index.js</code> in the Terminal, prompt and it will give your output like :

<code>node index.js</code>


{% highlight ruby %}
UserPassword = MYPASSWORD
Passwordhash = 72326df0c134ad67c7066d869d49e7891b1e5557ba496f6d54b73bb50e5d93c79bb20f2f861b74b3a296eab330d8f53792b1c8e7d6696d1f451485e3bc5cab1c
nSalt = 40dd704e393618c3
UserPassword = MYPASSWORD
Passwordhash = d9130ca8df005768884d3a7a887695d604866199fbb9326b47db7165eb38d3744cb12dae823b02f6bc82822cee2e0965a6c1e0d4d9b223caa6238eaf670b68c4
nSalt = 18ea7d118e4fcc61
{% endhighlight %}



This it, Hope you like my Salt/Hash Passwort Generator. Please feel free to Fork, Star and Clone it. 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/salt-hash-password">Download</a> 
Link: <a href="https://github.com/SpaceG/salt-hash-password/">Salt Hash Password Generator in (SHA-512).</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
