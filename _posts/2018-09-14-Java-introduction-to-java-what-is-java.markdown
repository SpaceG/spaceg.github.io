---
title:  "Java - Introduction to Java #01"
date:   2018-09-13 00:00:01
description: Get Start with Java - what is Java? 
---
<h2 id="this-post-is-the-last-of-a-series-of-posts-in-which-i-write-about-the-observable-type-in-the-first-post-we-went-ahead-writing-an-observable-from-scratch-in-order-to-fully-understand-it-we-then-explored-how-to-create-observables-from-values-arrays-dom-events-and-promises-this-time-well-focus-on-compositions-by-rewriting-some-basic-composition-operators">
Java - Introduction to Java #01</h2>

<small>Java, Eclipse, Introduction, Computer, Bit, Password, Bank Account, Java Tutorial </small>

What is Java Platform? Ultimate Guide for Programmers
Introduction to JAVA
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>


<h1>What is JAVA?</h1>

Bevor we start with the JAVA-PLATTFORM. you can aks your self ? 


Java is a programming language and a computing platform for application development. It was first released by Sun Microsystem in 1995 and later acquired by Oracle Corporation. It is one of the most used programming languages.

<h1>What is Java Platform?</h1>
Java platform is a collection of programs that help to develop and run programs written in the Java programming language. Java platform includes an execution engine, a compiler, and a set of libraries. JAVA is platform-independent language. It is not specific to any processor or operating system.


<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-1.png" alt="">



This Tutorial introduces the Java platform, and explains why Java is a platform as well as a programming language.

To understand JAVA programming language, we need to understand some basic concept of how a computer program can run a command and execute the action.


<h1>What is PC?</h1>

A computer is an electronic device capable of performing computations, and we all know that it is composed of a monitor, keyboard, mouse, and memory to store information. But the most important component of the computer is a PROCESSOR. Which does all thinking of computer, but the question is how the computer does this thinking? How does it understand text, images, videos, etc.?

<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-2.png" alt="">

<h1>What is Assembly Language?</h1>
The computer is an electronic device, and it can only understand electronic signals or binary signals. For example, the 5-volt electronic signal may represent binary number 1 while 0 volts may represent binary number 0. So your PC is continuously bombarded with these signals.


<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-3.png" alt="">



Eight bits of such signals are group together to interpret Text, numerical and symbols.

<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-4.png" alt="">
For example, the # symbol is identified by computer as 10101010. Similarly, the pattern for adding a function is represented by 10000011.

<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-5.png" alt="">

This is known as 8-bit computing. Current day processor is capable of decoding 64-bit time. But what is the relation of this concept with the programming language JAVA? Let understand these as an example.

Suppose if you want to tell the computer to add two number (1+2) which is represented by some binary numbers (10000011), how are you going to tell the computer? Yes, we going to use assembly language to get our code executed.





<blockquote>"Assembly Language is the most elementary form of software development languages."

</blockquote>





We are going to give the command to a computer in this format as shown below. Your code to add two numbers in this language would be in this order.

<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-6.png" alt="">



Store number 1 at memory location say A
Store number 2 at memory location say B
Add contents of Location A & B
Store results


But how are we going to do this? Back in 1950's when computers were huge and consumed a great deal of power, you would convert your assembly code into corresponding machine code to 1 and 0's using mapping sheets. Later this code will be punched into the machine cards and feed to the computer. The computer will read these code and execute the program. These would be a long process then until ASSEMBLER came to help.




<h1>What are Assembler and Compiler?</h1>
With the advancement in technology i/o devices were invented, you could directly type your program into the PC using a program called ASSEMBLER. It converts it into corresponding machine code (110001..) and feeds to your processor. So coming back to our example addition of (1+2), the assembler will convert this code into machine code and give the output.





<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-7.png" alt="">


That apart, you will also have to make calls to create Operating System provided functions to display the output of the code.

But alone assembler is not involved in this whole process; it also requires the compiler to compile the long code into a small chunk of codes. With advancement in software development languages, this entire assembly code could shrink into just one line print f 1+2 A with the help of software called COMPILER. It is used to convert your c language code into assembly code, and the assembler converts it into corresponding machine code, and this machine code will be transmitted to the processor. The most common processor used in PC or Computers are Intel processor.




<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-8.png" alt="">

Though present-day compilers come bundled with assembler can directly convert your higher language code into machine code.

Now, suppose Windows operating system is running on this Intel processor, a combination of Operating System plus the processor is called the PLATFORM. The most common platform in the world is the Windows, and Intel called the Wintel Platform. The other popular platforms are AMD and Linux, Power PC, and Mac OS X.

Now, with a change in processor, the assembly instructions will also change. For example the

- Add instruction in Intel may be called ADDITION for AMD
- OR Math ADD for Power PC


And obviously, with a change in Operating System, the level and nature of O.S level calls will also change.

As a developer, I want my software program to work on all platforms available, to maximize my revenues. So I would have to buy separate compilers which convert my print f command into the native machine code.


<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-9.png" alt="">

But compilers come expensive, and there is a chance of compatibility issues. So buying and installing a separate compiler for different O.S and processor is not feasible. So, what can be an alternative solution? Enter Java language.

<h1>How Java Virtual Machine works?</h1>
By using Java Virtual Machine, this problem can be solved. But how it works on different processors and O.S. Let's understand this process step by step.


<img class="card-img-top" src="https://spaceg.github.io/assets/images/th-10.png" alt="">
Step 1) The code to display addition of two numbers is System.out.println(1+2), and saved as .java file.

- Step 2) Using the java compiler the code is converted into an intermediate code called the bytecode. The output is a .class file.

- Step 3) This code is not understood by any platform, but only a virtual platform called the Java Virtual Machine.

- Step 4) This Virtual Machine resides in the RAM of your operating system. When the Virtual Machine is fed with this bytecode, it identifies the platform it is working on and converts the bytecode into the native machine code.

In fact, while working on your PC or browsing the web whenever you see either of these icons be assured the java virtual machine is loaded into your RAM. But what makes java lucrative is that code once compiled can run not only on all PC platforms but also mobiles or other electronic gadgets supporting java.

Hence, 

<blockquote>
"Java is a programming language as well as a Platform"

</blockquote>

<h1>Introduction to JAVA</h1>
<a href="https://de.wikipedia.org/wiki/Java_(Programmiersprache)">https://de.wikipedia.org/wiki/Java_(Programmiersprache) </a>




Donate Me and my Work as Developer: PayPal <a href="https://www.paypal.me/sysadmincat">https://www.paypal.me/sysadmincat </a>


 Hello, I'm work @ [SpaceDig.ch][spacedig] for more info, how to get contact with us. File all bugs/feature requests at My  [Github][jekyll-gh].

[jekyll-gh]: https://github.com/spaceg
[spacedig]:    http://spacedig.ch
