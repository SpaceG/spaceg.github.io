---
title:  "Unix Commandlines"
date:   2010-11-10 10:18:00
description: Commandlines!
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">In This Post, i do list some powerfull commandlines for mac os series. <a href="https://ss64.com/osx/" target="_blank">ss64.com/osx/</a> in order to fully understand it. We then explored how to <a href="https://developer.apple.com/library/content/documentation/OpenSource/Conceptual/ShellScripting/shell_scripts/shell_scripts.html" target="_blank">create bash scripts from values, arrays, dom events and promises</a>. This time we’ll focus on compositions by standart powerfull mac osx commandlines.</h2>



You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.


<h1>Installing Command Line Tools in Mac OS X</h1>
Launch the Terminal, found in
<small>/Applications/Utilities/</small>


<h1>Type the following command string:</h1>
$ xcode-select --install



{% highlight ruby %}
code @ ~/desktop/spy * master
 [1] → xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
{% endhighlight %}


A popup window will show that asks.

<blockquote> The xcode-select command requires the command line developer tools. Would you like to install the tools now?

choose to confirm this by clicking “Install”, then agree to the Terms of Service when requested (feel free to read them thoroughly, we’ll be here)</blockquote>

<br>
Wait for the Command Line Tools package download to complete, it’ll be about 130MB and installs fairly quickly depending on your connection speed.



The installer goes away on its own when complete, and you can then confirm everything is working by trying to use one of the commands that were just installed, like gcc, git, svn, rebase, make, ld, otool, nm, whatever you want from the list below. Assuming the installation went uninterrupted, the command will execute as expected. This also means you can compile and install things from source code directly without having to use a package manager. Enjoy your new unix command line toolkit!





What Installs with Command Line Tools and Where

For those interested, the entire package command line toolkit package gets placed in the following directory:

/Library/Developer/ CommandLineTools/

(note that is the root /Library, not user ~/Library)

If you want to see the 61 new commands available to you, they’re all in

/Library/Developer/ CommandLineTools/usr/bin/

and we have listed them below for convenience:






{% highlight ruby %}
code @ ~/desktop 
 [5] → git clone https://github.com/SpaceG/sockio.git
Cloning into 'sockio'...
remote: Counting objects: 786, done.
remote: Compressing objects: 100% (569/569), done.
remote: Total 786 (delta 169), reused 786 (delta 169), pack-reused 0
Receiving objects: 100% (786/786), 4.69 MiB | 1.21 MiB/s, done.
Resolving deltas: 100% (169/169), done.
{% endhighlight %}



<figure class="table textLeft">
&nbsp; 	
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 			
&nbsp; 			
&nbsp; 		
&nbsp; 	
&nbsp; <table class="fullTable"><thead><tr><th>Befehl</th><th>Funktion</th></tr></thead><tbody><tr><td><code>cd</code></td><td><em>change directory</em> — Welchselt in ein angegebenenes Verzeichnis</td></tr><tr><td><code>ls</code></td><td><em>list</em> — Listet den Inhalt eines Verzeichnisses auf</td></tr><tr><td><code>pwd</code></td><td><em>print working directory</em> — Zeigt das aktuelle Verzeichnis an</td></tr><tr><td><code>cp</code></td><td><em>copy</em> — Kopiert Dateien und Ordner</td></tr><tr><td><code>mv</code></td><td><em>move</em> — Verschiebt Dateien und Ordner</td></tr><tr><td><code>rm</code></td><td><em>remove</em> — Löscht Dateien oder Ordner</td></tr><tr><td><code>mkdir</code></td><td><em>make directory</em> — Erstellt einen neuen Ordner</td></tr><tr><td><code>rmdir</code></td><td><em>remove directory</em> — Löscht einen (leeren) Ordner</td></tr><tr><td><code>open</code></td><td>Öffnet eine angegebene Datei oder Ordner</td></tr><tr><td><code>kill </code><code> killall</code></td><td>Beendet einen angegebenen Prozess</td></tr><tr><td><code>whoami</code></td><td>Zeigt den aktuellen Benutzer an</td></tr><tr><td><code>su</code></td><td><em>switch user</em> — Wechselt zum angegebenen Benutzer</td></tr><tr><td><code>sudo</code></td><td><em>substitute user do</em> — Führt den Befehl als Superuser (root) aus</td></tr><tr><td><code>pbcopy</code></td><td><em>pasteboard copy</em> — Übergibt Inhalt an die Zwischenablage von OS X</td></tr><tr><td><code>pbpaste</code></td><td><em>pasteboard past</em> — Gibt Inhalt der OS X Zwischenablage aus</td></tr><tr><td><code>say</code></td><td>Sprachausgabe eines angegebenen Textes</td></tr><tr><td><code>date</code></td><td>Zeigt das aktuelle Datum und Uhrzeit an</td></tr><tr><td><code>nano</code></td><td>Text-Editor nano</td></tr><tr><td><code>screencapture</code></td><td>Erstellt ein Bildschirmfoto</td></tr><tr><td><code>find</code></td><td>Suche nach Dateien</td></tr><tr><td><code>mdfind</code></td><td>Spotlight-Suche</td></tr><tr><td><code>ps</code></td><td>Listet die aktuell aktiven Prozesse auf</td></tr><tr><td><code>top</code></td><td>Listet eine detaillierte Prozessliste auf</td></tr><tr><td><code>history</code></td><td>Listet die zuletzt benutzten Befehle auf</td></tr><tr><td><code>clear</code></td><td>Verschiebt die Promt so, dass im aktuellen Terminal-Fenster alles leer ist</td></tr><tr><td><code>man</code></td><td><em>Man-Page</em> — Ruft die Man-Seite zum angegebenen Befehl auf</td></tr><tr><td><code>which</code></td><td>Welcher Befehl wird ausgeführt?</td></tr><tr><td><code>whatis</code></td><td>Kurzinfo zum angegebenen Befehl</td></tr></tbody></table>
</figure>





 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
