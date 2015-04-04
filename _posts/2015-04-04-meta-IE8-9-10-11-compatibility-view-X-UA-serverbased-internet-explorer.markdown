---
layout:     post
title:      "Add X-UA Compatible"
subtitle:   "Compatibility View - Internet Explorer - per Policy - Server Based"
date:       2015-04-04 14:00:44
author:     "Lucas Gatsas"
header-img: "img/images-cms-image-004442450.jpg"
---

<h2 class="section-heading"><strong> Front-End Development</strong> </h2>
<h2 class="section-heading">Add X-UA Compatibility Mode</h2>


<table class="table">
        <thead>
          <tr>
            <th>Value</th>
            <th id="fadeout-1">Mean</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <strong>  IE=5 </strong></td>
            <td id="fadeout-1">Der Code der Seite wird wie durch den Quirks-Modus von Internet Explorer 7 angezeigt </td>
          </tr>
          <tr>
            <td><code>$ npm -v</code></td>
            <td id="fadeout-1">Run Terminal and type npm -v</td>
          </tr>
          <tr>
            <td><code>$ [sudo] npm install npm -g</code></td>
            <td id="fadeout-1">To upgrade, run: [sudo] npm install npm -g</td>
          </tr>
        </tbody>
      </table>



<h2 class="section-heading"><strong> Javascript</strong> </h2>
<h2 class="section-heading"> Internet Explorer 8 - Microsoft</h2>



<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

var IE = null;

if (window.navigator.appName == "Microsoft Internet Explorer") {
	
	if (document.documentMode) {

		// Internet Explorer 8

		IE = document.documentMode; // documentMode = 8

		} else {


			// Internet Explorer 5-7

				IE = 5; //setzt the Quirks-Modus

					if (document.compatMode) {
	
			if (document.compatMode == "CSS1Compat")


			IE = 7; IE7 Modus

			}
		}
	}
}
</pre></pre></div>

<blockquote>
	"get $bash unix shell awesome"
</blockquote>