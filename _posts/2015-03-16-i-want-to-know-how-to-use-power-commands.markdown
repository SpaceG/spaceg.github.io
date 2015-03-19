---
layout:     post
title:      "I Want To Know How To Use Power Commands"
subtitle:   "CommandLines Os X"
date:       2015-03-16 14:00:44
author:     "Lucas Gatsas"
header-img: "img/front-post-image-01-terminal.png"
---
<h2 class="section-heading"><strong>Real Men Don't Use Menus. I Want To Know How To Use Power Commands.</strong> </h2>

<h2 class="section-heading">OS X Thema: Terminal/UNIX</h2>

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

<figure class="table textLeft"><table class="fullTable"><thead><tr><th>Befehl</th><th>Funktion</th></tr></thead>
&nbsp; 	<tbody>
&nbsp; 		<tr>
&nbsp; 			<td><code>cd</code></td>
&nbsp; 			<td><em>change directory</em> — Welchselt in ein angegebenenes Verzeichnis</td>
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
  



Installing Command Line Tools in Mac OS X
1. Launch the Terminal, found in <code>/Applications/Utilities/</code>
2. Type the following command string:
<code>xcode-select --install</code>
3. A popup window will show that asks. <code> The xcode-select command requires the command line developer tools. Would you like to install the tools now?</code>  choose to confirm this by clicking “Install”, then agree to the Terms of Service when requested (feel free to read them thoroughly, we’ll be here)
4. Wait for the Command Line Tools package download to complete, it’ll be about 130MB and installs fairly quickly depending on your connection speed. 

<a href="#">
    <img src="{{ site.baseurl }}/img/install-command-line-tools-os-x.jpg" alt="Post Sample Image" style="width:100%">
</a>
<br> <br>
<a href="#">
    <img src="{{ site.baseurl }}/img/confirm-install-command-line-tools-mac-os-x-1.jpg" alt="Post Sample Image" style="width:100%">
</a>
<br><br>
<a href="#">
    <img src="{{ site.baseurl }}/img/downloading-command-line-tools-1.jpg" alt="Post Sample Image" style="width:100%">
</a>
<br><br>
In The Next Days, i will go Upload some New Terminal 
[CommandLine Tools](https://developer.apple.com/xcode/) Skills. All for Mac Os X. 




<blockquote>
	“sudo make me a sandwich :) ! ”
</blockquote>