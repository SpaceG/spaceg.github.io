---
title:  "Hacking Macintosh HD"
date:   2016-01-18 06:18:00
description: reboot your Mac  - chmod o+rx!
---

<h2 class="section-heading"> Hacking Macintosh HD </h2>
<h2 class="section-heading">Entry Your Data with the Terminal Commandline Chmod o+rx</h2>



<strong> Recovery Mode </strong>

So my History now.. i tried hack my HD! After a Error, i put the rights to the {% highlight ruby %}(:denied){% endhighlight %}

Spoken Words: - I don't had rights anymore everywhere! After a New Start my Machine, the same thing again.

i Tried out to reboot the Machine on {% highlight ruby %} "C" {% endhighlight %}! Nothing Works! After booted in to the {% highlight ruby %}C{% endhighlight %}
{% highlight ruby %}cmd + r {% endhighlight %} ! Booted the Mac over Recovery Mode and choose in the Menu the Terminal App and Typed on -bash:~ 3.2# {% highlight ruby %}chmod o+rx "/Volumes/YOURHD"{% endhighlight %} and prompt (Enter) it. {% highlight ruby %} sudo shutdown -r now {% endhighlight %}! New Started and waited for a while
and BANG unbelievable! The whole Machine is back now with all my Users! What a Thing! Hacking your Machine and learn to Rule!


First Reboot your Machine from {% highlight ruby %} cmd + r{% endhighlight %}   and then wait!
Open the Terminal and Type follow CommandLine {% highlight ruby %}chmod o+rx "/Volumes/YOURHD"{% endhighlight %}
And New Start your Mac!

<br>
<strong> Off course there are alot Ways to Boot and Reboot your Machine </strong>

<br>
{% highlight ruby %}
Single-User Mode
{% endhighlight %}



Newstart your Machine and Press {% highlight ruby %}
cmd + s{% endhighlight %}! Your machine will run over Text-Mode - Pure Terminal on your Machine.
There do you can entry your Commandlines ! you boot directly to a root shell. getting multi-user operating System!

Unix/ Will Open! This is your root single-user Mode if you want to reboot press Type
<code>reboot</code>

First i have typed :
{% highlight ruby %}
$mount -uw/
{% endhighlight %}

Then After Prompt :
{% highlight ruby %}
$chmod 755/System
{% endhighlight %}

And Now Type :
{% highlight ruby %}
$chmod 1773/Shared
{% endhighlight %}

At Last prompt:
{% highlight ruby %}
$chmod 1777/Users/Shared
{% endhighlight %}


Then <code>reboot</code> your Machine! ;)

<br>
<strong> Verbose Mode </strong>

Press <code> cmd + V</code> to boot into verbose mode, You See Your Desktop in a Normal Way, after enter the prompt, do you will see your Screen to Freezing!





 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
