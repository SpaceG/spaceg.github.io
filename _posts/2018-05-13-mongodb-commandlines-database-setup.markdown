---
title:  "mongoDB Commandlines & set up Database"
date:   2018-05-13 10:18:00
description: Slove your Git Conflict 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">mongoDB Commandlines & set up Database</h2>

<h1>Step 1: CheckOut your Repository Local</h1>


{% highlight ruby %}
ADMIN

use admin

show dbs

db

show collections

CREATE USERS -


db.createUser(
  {
   user: "myAppDbUser",
   pwd: "myApp123",
   roles: ["readWrite"]
  })


db.createUser(
  {
   user: "myAppDbUser2",
   pwd: "myApp1232",
   roles: ["readWrite"]
  })


db.createUser(
  {
   user: "myAppDbUser3",
   pwd: "myApp1233",
   roles: ["readWrite"]
  })

db.createUser(
  {
   user: "myAppDbUser5",
   pwd: "myApp1235",
   roles: ["readWrite"]
  })



CREATE ADMIN - 

db.createUser(
  {
    user: "superAdmin",
    pwd: "admin123",
    roles: [ { role: "root", db: "admin" } ]
  }
)

db.user.find();
db.system.users.find();

Delete Users

db.removeUser("myAppDbUser");
db.dropUser("myAppDbUser");

db.user.find();
db.system.users.find();


----------------------------------------------------------------------------



CREATE NEW DATABASE AND INSERTS 

$ use (createbase)

$ db.testData.insert({ name: "Dagi Bee", age: 19 });


$ j = {name : "mongobasher"}
$ k = {x : 3}
$ db.testData.insert(j)
$ db.testData.insert(k)

$ db.testData.find();

Add User:
$ db.testData.insert({ name: "Dagi Bee", age: 19 });

Remove User:
$ db.testData.remove({name : "mongobasher"});



$ db.testData.find();



----------------------------------------------------------------------------

Delete Database:


$ use {Database Name}

$ db.dropDatabase()

how dbs //to list existing databases

use <dbname> //the <dbname> is the database you'd like to drop

db //should show <dbname> just to be sure I'm working with the right database

db.dropDatabase() //will delete the database and return { "dropped" : "<dbname>", "ok" : 1 }


----------------------------------------------------------------------------






$ use admin
$ show dbs
$ show collections;
$ show colelctions
$ show dbs
$ db.users.find();
$ db.sytsem.users.find();






{% endhighlight %}






This it, Hope you like my SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1. Please feel free to Fork, Star and Clone it. 
See the Issue Detail here on Github <a href="https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication">Download</a> 
Link: <a href="https://github.com/SpaceG/oAuthy-SailsJS-PassportJS-MongoDB-Authentication">SailsJS + PassportJS + MongoDB authentication SailsJS V. 1.0.1.</a> 




 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
