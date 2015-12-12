---
layout:     post
title:      "The Crazy Autofill in Css"
subtitle:   "User Agent Stylesheet input "
date:       2015-12-12 14:00:44
author:     "Lucas Gatsas"
header-img: "img/3d-abstract_widewallpaper_misty-clouds-over-mountains_57245.jpg"
---

<h2 class="section-heading">User Agent Stylesheet input 
</h2>

<br>
<strong>Javascript and Css  </strong>


The Javascript Variant for Google Chrome 



{% highlight ruby %}




<script>
if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
  $(window).load(function(){
    $('input:-webkit-autofill').each(function(){
      var text = $(this).val();
      var name = $(this).attr('name');
      $(this).after(this.outerHTML).remove();
      $('input[name=' + name + ']').val(text);
    });
  });
}


</script>

         {% endhighlight %}






<br>



Permanent User Agent Stylesheet  

{% highlight ruby %}


<style>


input[type="checkbox"] {
 -webkit-appearance: checkbox;
 #if !(defined(WTF_PLATFORM_IOS) && WTF_PLATFORM_IOS)
box-sizing: border-box;
 #else
     border-radius: 5px;
     width: 16px;
     height: 16px;
     padding: 0px;
     /* We want to be as close to background:transparent as possible without actually being transparent */
     background-color: rgba(255, 255, 255, 0.01);

 #endif
}
 
#if defined(WTF_PLATFORM_IOS) && WTF_PLATFORM_IOS
input[type="radio"] {
     -webkit-appearance: radio;
     border-radius: 8px;
     width: 16px;
     height: 16px;
     padding: 0px;
     /* We want to be as close to background:transparent as possible without actually being transparent */
    background-color: rgba(255, 255, 255, 0);
    color: white;
 }
 
 input:matches([type="checkbox"], [type="radio"]):checked {
     background: rgba(0, 0, 0, 0.8);
     border-color: rgba(255, 255, 255, 0.0);
}

 input:matches([type="checkbox"], [type="radio"]):checked:disabled {
     opacity: 0.4;
     background: white;
 }
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgba(255, 255, 255, 0);
    background-image: rgba(255, 255, 255, 0);
    color: rgb(0, 0, 0);
}
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill  {
    background: rgba(255, 255, 255, 0);
    background-image: rgba(255, 255, 255, 0);

}
/* Change the white to any color ;) */

input#loginEmail {
    background: none;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill  {
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
  -webkit-autofill: rgba(255, 255, 255, 0) inset;
}


input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
  -webkit-autofill: rgba(255, 255, 255, 0) inset;
    background: rgba(255, 255, 255, 0);
    background-image: rgba(255, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0);


}


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff;

}

</style>


         {% endhighlight %}



<br>






Link: <a href="https://de.wikipedia.org/wiki/Rewrite-Engine" target="_blank"> Rewrite-Engine </a> 
Link: <a href="https://de.wikipedia.org/wiki/CPanel" target="_blank"> C-Panel </a> 




<blockquote>
"Quote of the Operation : Gefahr entsteht, wenn der Mensch sich in seiner Position sicher fühlt. Verderben bedroht dem, der versucht, einen Zustand zu erhalten. Durcheinander entsteht, wenn wir alles ordnen. Daher vergißt der überlegene Mensch nicht die Gefahr, wenn er in Sicherheit ist. Der Weise vergißt nicht das Gespenst des Verderbens, wenn er sich in vollständigem Wohlstand befindet. Der Intelligente vergißt nicht das Durcheinander, wenn seine Geschäfte geordnet sind. 
"
</blockquote>

