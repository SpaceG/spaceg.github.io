---
layout:     post
title:      "Sails.js - Partials"
subtitle:   "Render a partial view with sailsjs"
date:       2015-06-26 14:00:44
author:     "Lucas Gatsas"
header-img: "img/lucas-gatsas-213515241234.jpg"
---
<h2 class="section-heading">Setting Partials in Sails.js -</h2>
<h2 class="section-heading">"Render a Partial View <br> with sails.js"</h2>


Render a partial view with sails.js in Our Web App. First you should have a Partials Folder and add your <code>.ejs</code>
 File like <code> section_footer.ejs  </code>  and add in your Main Files like in the homepage.ejs ! 


<code><%- partial ('../partials/section_footer.ejs') %></code> 

Include your framework (HTML) in the  <code> section_footer.ejs  </code> and code your Layout in the Framework.




<code>/partials/section_footer.ejs</code> 


<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

<code>

< div class="inner-startup-partials-01">

      <%- partial ('../partials/section_footer.ejs') %>  

  < /div>

</code>

</pre></pre></div>




1. Layouts
2. Locals
3. Partials
4. View Engines




1. Links: <a href="http://sailsjs.org/#!/documentation/concepts" target="_blank">sails.js</a>
2. Links <a href="http://sailsjs.org/#!/documentation/concepts/Views/Partials.html" target="_blank">Partials </a> 

<blockquote>
“<strong>One thing to note:</strong> partials are rendered synchronously, so they will block Sails from serving more requests until they're done loading. It's something to keep in mind while developing your app, especially if you anticipate a large number of connections.” 
</blockquote>

