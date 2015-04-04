---
layout:     post
title:      "Add X-UA Compatible"
subtitle:   "Compatibility View - Internet Explorer - per Policy - Server Based"
date:       2015-04-04 14:00:44
author:     "Lucas Gatsas"
header-img: "img/images-cms-image-004442450.jpg"
---

<h2 class="section-heading"><strong> Front-End Development</strong> </h2>
<h2 class="section-heading">Add X-UA Compatible</h2>






<h2 class="section-heading"><strong> Javascript</strong> </h2>
<h2 class="section-heading"> Internet Explorer 8 - Microsoft</h2>



<code>
var IE = null;
if (window.navigator.appName == "Microsoft Internet Explorer") {
   if (document.documentMode) {  
      // Internet Exploter 8
      IE = document.documentMode; // documentMode = 8
   } else {
      // Internet Explorer 5-7
      IE = 5; //setzt sozusagen den Quirks-Modus
      if (document.compatMode) {
         if (document.compatMode == "CSS1Compat")
            IE = 7; // IE7 Modus
         }
     }
   }
}
</code>


<blockquote>
	"get $bash unix shell awesome"
</blockquote>