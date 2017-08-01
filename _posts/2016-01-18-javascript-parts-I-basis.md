---
layout: post

#event information
title:  "Javascript Basis"
cover: "img/Halle-E_G5__c_-Rupert-Steiner_web.jpg"
date:   2016-06-29

#event organiser details
organiser: "Lucas Gatsas"


---
<h2 class="section-heading"> Javascript Basis </h2>






<h2 class="section-heading"> Variables </h2>
Variables are containers that you can store values in. You start by declaring a variable with the var keyword, followed by any name you want to call it:

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">Variable</th>
   <th scope="col">Explanation</th>
   <th scope="col">Example</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"><a title="Die Definition dieses Ausdrucks (String) wurde noch nicht geschrieben; bitte hilf mit und trage sie bei!" href="/de/docs/Glossary/String" class="new glossaryLink">String</a></th>
   <td>A string of text. To signify that the variable is a string, you should enclose it in quote marks.</td>
   <td><code>var myVariable = 'Bob';</code></td>
  </tr>
  <tr>
   <th scope="row"><a title="Number: In JavaScript ist&nbsp;Number&nbsp;ein numerischer Datentyp im&nbsp;double-precision 64-bit floating point format (IEEE 754). In anderen Programmiersprachen können verschiedene numerische Typen existieren zum Beispiel Integer, Float, Double oder Bignum." href="/de/docs/Glossary/Number" class="glossaryLink">Number</a></th>
   <td>A number. Numbers don't have quotes around them.</td>
   <td><code>var myVariable = 10;</code></td>
  </tr>
  <tr>
   <th scope="row"><a title="Boolean: In der Programmierung ist Boolean&nbsp;ein logischer Datentyp, der nur einen der zwei&nbsp;Werte&nbsp;true oder&nbsp;false&nbsp;annehmen kann. Ein Boolean ist die Umsetzung von wahr&nbsp;oder falsch&nbsp;in der Programmierung. Ohne die Möglichkeit Dinge in Booleans auszudrücken würden viele Dinge in einer Programmiersprache nicht mehr funktionieren. Zum Beispiel muss sich in JavaScript eine Bedingung eines&nbsp;if-Statements&nbsp;zu einem Boolean auflösen können. &nbsp;Eine&nbsp;for-Schleife könnte ohne Bedingung nicht feststellen, ob sie den Code ausführen soll oder nicht." href="/de/docs/Glossary/Boolean" class="glossaryLink">Boolean</a></th>
   <td>A True/False value. The words <code>true</code> and <code>false</code> are special keywords in JS, and don't need quotes.</td>
   <td><code>var myVariable = true;</code></td>
  </tr>
  <tr>
   <th scope="row"><a title="Die Definition dieses Ausdrucks (Array) wurde noch nicht geschrieben; bitte hilf mit und trage sie bei!" href="/de/docs/Glossary/Array" class="new glossaryLink">Array</a></th>
   <td>A structure that allows you to store multiple values in one single reference.</td>
   <td><code>var myVariable = [1,'Bob','Steve',10];</code><br>
    Refer to each member of the array like this:<br>
    <code>myVariable[0]</code>, <code>myVariable[1]</code>, etc.</td>
  </tr>
  <tr>
   <th scope="row"><a title="Die Definition dieses Ausdrucks (Object) wurde noch nicht geschrieben; bitte hilf mit und trage sie bei!" href="/de/docs/Glossary/Object" class="new glossaryLink">Object</a></th>
   <td>Basically, anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn.</td>
   <td><code>var myVariable = document.querySelector('h1');</code><br>
    All of the above examples too.</td>
  </tr>
 </tbody>
</table>



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;">


function printTheCity(city) {
	var preffix = "i live in";
	console.log(city);

}
	printTheCity("New York");


	
	</pre>
	</div>
