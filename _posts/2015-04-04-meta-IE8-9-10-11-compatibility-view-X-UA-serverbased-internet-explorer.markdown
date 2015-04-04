---
layout:     post
title:      "Add X-UA Compatible"
subtitle:   "Compatibility View - Internet Explorer - per Policy - Server Based"
date:       2015-04-04 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Quadrat-Kubus.png"
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
            <td> <code> IE=5 </code></td>
            <td id="fadeout-1">Der Code der Seite wird wie durch den Quirks-Modus von Internet Explorer 7 angezeigt </td>
          </tr>
          <tr>
            <td><code>IE=7</code></td>
            <td id="fadeout-1">Der Code der Seite wird wie durch den Standards-Modus von Internet Explorer 7 angezeigt, ohne Berücksichtigung der/einer DOCTYPE-Angabe</td>
          </tr>
          <tr>
            <td><code>IE=EmulateIE7</code></td>
            <td id="fadeout-1">Der Code der Seite wird wie von Internet Explorer 7 angezeigt, jedoch Berücksichtigung der/einer DOCTYPE-Angabe (der standardkonforme Modus wird wie vom IE7 angezeigt und der quirks-mode, wie vom IE 5)</td>
          </tr>
               <tr>
            <td><code>IE=EmulateIE8</code></td>
            <td id="fadeout-1">Enthält der Webseite eine standardkonforme DOCTYPE-Angabe, wird sie im „IE8“ Modus, anderseits im Quirks-Modus (IE5-Modus) dargestellt</td>
          </tr>
                        <tr>
            <td><code>IE=8</code></td>
            <td id="fadeout-1">Der IE8– oder IE8-Standards-Modus. Achtung:dies ist die Standardeinstellung für den Internet Explorer 8![1][2][3]</td>
          </tr>
                       <tr>
            <td><code>IE=edge</code></td>
            <td id="fadeout-1">Mit diesem Modus wird der Internet Explorer (8) angewiesen, den höchsten zur Verfügung stehenden Modus zu verwenden. Dieser Modus wird nur für Tests empfohlen.</td>
          </tr>
        </tbody>
      </table>
<!--
<table class="table">
        <thead>
          <tr>
            <th>Value</th>
            <th id="fadeout-1">Mean</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <code> IE=5 </code></td>
            <td id="fadeout-1">Der Code der Seite wird wie durch den Quirks-Modus von Internet Explorer 7 angezeigt </td>
          </tr>
          <tr>
            <td><code>IE=7</code></td>
            <td id="fadeout-1">Der Code der Seite wird wie durch den Standards-Modus von Internet Explorer 7 angezeigt, ohne Berücksichtigung der/einer DOCTYPE-Angabe</td>
          </tr>
          <tr>
            <td><code>IE=EmulateIE7</code></td>
            <td id="fadeout-1">Der Code der Seite wird wie von Internet Explorer 7 angezeigt, jedoch Berücksichtigung der/einer DOCTYPE-Angabe (der standardkonforme Modus wird wie vom IE7 angezeigt und der quirks-mode, wie vom IE 5)</td>
          </tr>
               <tr>
            <td><code>IE=EmulateIE8</code></td>
            <td id="fadeout-1">Enthält der Webseite eine standardkonforme DOCTYPE-Angabe, wird sie im „IE8“ Modus, anderseits im Quirks-Modus (IE5-Modus) dargestellt</td>
          </tr>
                        <tr>
            <td><code>IE=8</code></td>
            <td id="fadeout-1">Der IE8– oder IE8-Standards-Modus. Achtung:dies ist die Standardeinstellung für den Internet Explorer 8![1][2][3]</td>
          </tr>
                       <tr>
            <td><code>IE=edge</code></td>
            <td id="fadeout-1">Mit diesem Modus wird der Internet Explorer (8) angewiesen, den höchsten zur Verfügung stehenden Modus zu verwenden. Dieser Modus wird nur für Tests empfohlen.</td>
          </tr>
        </tbody>
      </table>


-->

For individual websites a corresponding meta element can be recorded in the head section of the page. Note: this element must be in the header above all other elements. The only exception is the title element and other meta-elements

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>

<html>
   <head>
      <title>Website-Titel</title>
      <meta http-equiv="X-UA-Compatible" content="IE=8" />
   </head>
   <body>
      <h1>Titel</h1>
      <p>#seiteninhalt.</p>
   </body>
</html>

</pre></pre></div>


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
	"For every Developer is the Internet Explorer from Microsoft the badest Explorer of all the Time.! - Word -"
</blockquote>