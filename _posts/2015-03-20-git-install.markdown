---
layout:     post
title:      "Git Introduction"
subtitle:   "Download  - Git - Git CommandLines"
date:       2015-03-20 14:00:44
author:     "Lucas Gatsas"
header-img: "img/p0198vg4.jpg"
---
<h2 class="section-heading"><strong>Git CommandLines</strong> </h2>


[Git](http://git-scm.com/) is a free software for distributed version control of files that were originally developed for source control of the Linux kernel.



(1.) Go Download Git [Git](http://git-scm.com/download/mac) I'm also a Mac User. Do you can Download it directly from [sourceforge.net](http://sourceforge.net/projects/git-osx-installer/files/git-2.2.1-intel-universal-mavericks.dmg/download?use_mirror=autoselect). 

(2.)
Open the pkg File with Doppleclick : 


<a href="#">
    <img src="{{ site.baseurl }}/img/git-sourceforge.png" alt="Post Sample Image" style="width:100%">
</a>

<br> 



Git Commands:


<style>
tbody tr:hover td {
background: rgba(237,237,237,.25);
}
tr {
border-bottom: .1em solid rgb(237,237,237);
}
td {
border-left: 1px solid rgba(65, 65, 65, 0.09);
border-right: 1px solid rgba(65, 65, 65, 0.09);
padding-left: 5px;
}
</style>



<h2 class="section-heading">Git Basics</h2>




<figure class="table textLeft"><table class="fullTable"><thead><tr><th>Befehl</th><th>Funktion</th></tr></thead>
&nbsp; 	<tbody>
&nbsp; 		<tr>
&nbsp; 			<td><code>git init</code></td>
&nbsp; 			<td><em> <directory> </em> — Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository.</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>ls</code></td>
&nbsp; 			<td><em>list</em> — Listet den Inhalt eines Verzeichnisses auf</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>pwd</code></td>
&nbsp; 			<td><em>print working directory</em> — Zeigt das aktuelle Verzeichnis an</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>cp</code></td>
&nbsp; 			<td><em>copy</em> — Kopiert Dateien und Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>mv</code></td>
&nbsp; 			<td><em>move</em> — Verschiebt Dateien und Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>rm</code></td>
&nbsp; 			<td><em>remove</em> — Löscht Dateien oder Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>mkdir</code></td>
&nbsp; 			<td><em>make directory</em> — Erstellt einen neuen Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>rmdir</code></td>
&nbsp; 			<td><em>remove directory</em> — Löscht einen (leeren) Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>open</code></td>
&nbsp; 			<td>Öffnet eine angegebene Datei oder Ordner</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>kill </code><code> killall</code></td>
&nbsp; 			<td>Beendet einen angegebenen Prozess</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>whoami</code></td>
&nbsp; 			<td>Zeigt den aktuellen Benutzer an</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>su</code></td>
&nbsp; 			<td><em>switch user</em> — Wechselt zum angegebenen Benutzer</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>sudo</code></td>
&nbsp; 			<td><em>substitute user do</em> — Führt den Befehl als Superuser (root) aus</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>pbcopy</code></td>
&nbsp; 			<td><em>pasteboard copy</em> — Übergibt Inhalt an die Zwischenablage von OS X</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>pbpaste</code></td>
&nbsp; 			<td><em>pasteboard past</em> — Gibt Inhalt der OS X Zwischenablage aus</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>say</code></td>
&nbsp; 			<td>Sprachausgabe eines angegebenen Textes</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>date</code></td>
&nbsp; 			<td>Zeigt das aktuelle Datum und Uhrzeit an</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>nano</code></td>
&nbsp; 			<td>Text-Editor nano</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>screencapture</code></td>
&nbsp; 			<td>Erstellt ein Bildschirmfoto</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>find</code></td>
&nbsp; 			<td>Suche nach Dateien</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>mdfind</code></td>
&nbsp; 			<td>Spotlight-Suche</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>ps</code></td>
&nbsp; 			<td>Listet die aktuell aktiven Prozesse auf</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>top</code></td>
&nbsp; 			<td>Listet eine detaillierte Prozessliste auf</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>history</code></td>
&nbsp; 			<td>Listet die zuletzt benutzten Befehle auf</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>clear</code></td>
&nbsp; 			<td>Verschiebt die Promt so, dass im aktuellen Terminal-Fenster alles leer ist</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>man</code></td>
&nbsp; 			<td><em>Man-Page</em> — Ruft die Man-Seite zum angegebenen Befehl auf</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>which</code></td>
&nbsp; 			<td>Welcher Befehl wird ausgeführt?</td>
&nbsp; 		</tr><tr>
&nbsp; 			<td><code>whatis</code></td>
&nbsp; 			<td>Kurzinfo zum angegebenen Befehl</td>
&nbsp; 		</tr>
&nbsp; 	</tbody>
&nbsp; </table>
</figure>










<a href="#">
    <img src="{{ site.baseurl }}/img/p0198vg4.jpg" alt="Post Sample Image" style="width:100%">
</a>





<blockquote>
	"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
</blockquote>