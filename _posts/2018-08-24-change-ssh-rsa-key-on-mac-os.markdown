---
title:  "SSH Rsa Key on your Machine"
date:   2018-08-24 10:18:04
description: find the ~/.ssh/github_rsa.pub file and host
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Change the SSH Rsa Key on your Machine</h2>


<h1>find the hidden  ~/.ssh/ folder in your Machine!</h1>

<small>~/.ssh/github_rsa.pub</small>


{% highlight ruby %}
$ cd ~/.ssh/ 
{% endhighlight %}

then open it, then see there your ssh keys. remove it, or change it ! - 
{% highlight ruby %}
$ open ~/.ssh/ 
{% endhighlight %}

then, you have to create a new ssh key for your Machine for Github, Jira, Atlassian.com etc. 

now, you have no more denied or premissions problem with your Gits on your local host. 
which mean, makes conflicts to push and origin your gits. 



Deleting your credentials via the command line
Through the command line, you can use the credential helper directly to erase the keychain entry.

To do this, type the following command:
{% highlight ruby %}
$ git credential-osxkeychain erase
host=github.com
protocol=https
[Press Return]
{% endhighlight %}

If it's successful, nothing will print out. To test that it works, try and clone a repository from GitHub. If you are prompted for a password, the keychain entry was deleted.




Copy the SSH key to your clipboard.

If your SSH key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.
{% highlight ruby %}
$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
{% endhighlight %}


copy it, and then, open a new text file, paste it in to the text file. see the new rsa ssh key. - 


<h1>Generating a new SSH key</h1>

Open Terminal.

Paste the text below, substituting in your GitHub email address.

{% highlight ruby %}
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
{% endhighlight %}

This creates a new ssh key, using the provided email as a label.

{% highlight ruby %}
Generating public/private rsa key pair.
{% endhighlight %}
When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

{% highlight ruby %}
Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
{% endhighlight %}

At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".
{% highlight ruby %}

Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
{% endhighlight %}

<h1>Adding your SSH key to the ssh-agent
</h1>


Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. When adding your SSH key to the agent, use the default macOS ssh-add command, and not an application installed by macports, homebrew, or some other external source.


Start the ssh-agent in the background.
{% highlight ruby %}
eval "$(ssh-agent -s)"
Agent pid 59566
{% endhighlight %}

If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.
{% highlight ruby %}

Host *
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_rsa
{% endhighlight %}


Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_rsa in the command with the name of your private key file.
{% highlight ruby %}

$ ssh-add -K ~/.ssh/id_rsa
{% endhighlight %}



Note: The -K option is Apple's standard version of ssh-add, which stores the passphrase in your keychain for you when you add an ssh key to the ssh-agent.

If you don't have Apple's standard version installed, you may receive an error. For more information on resolving this error, see "Error: ssh-add: illegal option -- K."


read more at Github about the SSH on Github. 
<a href="https://help.github.com/articles/connecting-to-github-with-ssh/">https://help.github.com/articles/connecting-to-github-with-ssh/
 </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
