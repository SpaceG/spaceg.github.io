---
layout:     post
title:      "Add X-UA Compatible Part II"
subtitle:   "Compatibility View - Internet Explorer - per Policy - Server Based"
date:       2015-04-09 14:00:44
author:     "Lucas Gatsas"
header-img: "img/Quadrat-Kubus.png"
---

<h2 class="section-heading"><strong> Front-End Development</strong> </h2>
<h2 class="section-heading">X-UA Compatibility Modus - Cross Browser Check IE Microsoft</h2>


<strong>Browser Check!</strong>



<table class="table">
        <thead>
          <tr>
            <th>Value</th>
            <th id="fadeout-1">Mean</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <code> IE=11 </code></td>
            <td id="fadeout-1">The code of the page as indicated by the quirks mode in Internet Explorer 7 </td>
          </tr>
        </tbody>
      </table>


<br>

 

<a href="#">
    <img src="{{ site.baseurl }}/img/cross-browser-test-1.png" alt="Lucas Gatsas"  style="width:100%">
</a>







<h2 class="section-heading"><strong> Javascript</strong> </h2>
<h2 class="section-heading"> Internet Explorer 8 - Microsoft</h2>

For Internet Explorer 8 Microsoft has a new proprietary property of the document object, the document mode introduced. This property returns a numeric value that corresponds to the document compatibility mode of the page.


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



<strong>Warning:</strong> The introduced with Internet Explorer 6 CompatMode property has been deprecated in favor document mode. Scripts that are based on CompatMode will continue to work in Internet Explorer 8, but should be switched to the use of document mode to prevent future problems.



<blockquote>
	"For every Developer is the Internet Explorer from Microsoft the badest Explorer of all the Time.! - Word -"
</blockquote>