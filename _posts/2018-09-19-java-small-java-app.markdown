---
title:  "Java - Small Java App #06"
date:   2018-09-19 00:00:01
description: Get Start with Java - Code a Small Java App.
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Java - Small Java App #06</h2>



<small>Java, Eclipse, Introduction, Computer, Bit, Password, Bank Account, Java Tutorial, Install Java, Oracle</small>

What is Java Platform? Ultimate Guide for Programmers
Introduction to JAVA
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>


<h1>Hello World in JAVA</h1>

Create your JAVA classes and write down this code below and run it in your IDE.


{% highlight ruby %}

package javaApp;
import java.util.Date;
import java.util.Arrays; 
import java.net.Inet4Address;
import java.net.InetAddress; 
import java.net.UnknownHostException; 

public class Test {

	public static void main(String[] args) throws UnknownHostException {
		
		String url = "www.youtube.com"; 
		byte addr[]= {127, 0, 0, 1};
		InetAddress ip1 = Inet4Address.getByName(url); 
		InetAddress ip2 = InetAddress.getByAddress(addr); 
		
		// Print Out the String 
		System.out.println(" Address : " + Arrays.toString(ip1.getAddress())); 
		
		// Print Out the Hello World 
		System.out.println("HelloWorld");

		//Print Out the Date 
		Date date = new Date();
		System.out.println(date.toString());
		
		// Print Out the IP ADRESS 
		InetAddress IP=InetAddress.getLocalHost();
		System.out.println("IP of my system is := " +IP.getHostAddress());
		
		// Print Out the HashCode 
		System.out.println("hashCode : " + ip1.hashCode());
		
		// equals ip1 === ip2 method 
		System.out.println("ip1==ip2 : " + ip1.equals(ip2)); 
		
		// Print Out the HostAddress 
		System.out.println("Host Address : "  + ip1.getHostAddress());
		
		
		
	}

}



{% endhighlight %}

This is the Output:

{% highlight ruby %}
 Address : [-84, -39, -88, 78]
HelloWorld
Thu Sep 20 00:44:14 CEST 2018
IP of my system is := 192.168.176.29
hashCode : -1395021746
ip1==ip2 : false
Host Address : 172.212.168.88
{% endhighlight %}





<h1>Introduction to JAVA</h1>
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
