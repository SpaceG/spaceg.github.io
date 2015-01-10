---
layout:     post
title:      "Bootstrap Currently v3.3.1 - Front-End Framework"
subtitle:   "Bootstrap makes front-end web development faster and easier."
date:       2015-01-10 13:00:40
author:     "Lucas Gatsas"
header-img: "img/"
---
<h2 class="section-heading">Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</h2>


<p>Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes. </p>


Download
[Bootstrap Currently v3.3.1](http://getbootstrap.com/)

<style>
header.intro-header {
background: #6f5499;
}
</style>


<a href="#">
    <img src="{{ site.baseurl }}/img/bootstrap-wordpress-themes.jpg" alt="Post Sample Image">
</a>



<!--
<a href="#">
    <img src="{{ site.baseurl }}/img/gitlist.io.png" alt="Post Sample Image">
</a> -->

<h2 class="section-heading">Javascript Library</h2>

<p>
Varying modal content based on trigger button
Have a bunch of buttons that all trigger the same modal, just with slightly different contents? Use event.relatedTarget and HTML data-* attributes (possibly via jQuery) to vary the contents of the modal depending on which button was clicked. See the Modal Events docs for details on relatedTarget, </p>

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre>$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
</pre></pre></div>

<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre><b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"btn btn-primary"</b> data-toggle<i>=</i><b>"modal"</b> data-target<i>=</i><b>"#exampleModal"</b> data-whatever<i>=</i><b>"@lucasgatsas"</b><b>&gt;</b>Open modal for @lucasgatsas<b>&lt;/</b><b>button</b><b>&gt;</b>
<b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"btn btn-primary"</b> data-toggle<i>=</i><b>"modal"</b> data-target<i>=</i><b>"#exampleModal"</b> data-whatever<i>=</i><b>"@lucasgatsas"</b><b>&gt;</b>Open modal for @lucasgatsas<b>&lt;/</b><b>button</b><b>&gt;</b>
<b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"btn btn-primary"</b> data-toggle<i>=</i><b>"modal"</b> data-target<i>=</i><b>"#exampleModal"</b> data-whatever<i>=</i><b>"@twbootstrap"</b><b>&gt;</b>Open modal for @twbootstrap<b>&lt;/</b><b>button</b><b>&gt;</b>
...more buttons...



<b>&lt;</b><b>div</b> class<i>=</i><b>"modal fade"</b> id<i>=</i><b>"exampleModal"</b> tabindex<i>=</i><b>"-1"</b> role<i>=</i><b>"dialog"</b> aria-labelledby<i>=</i><b>"exampleModalLabel"</b> aria-hidden<i>=</i><b>"true"</b><b>&gt;</b>
  <b>&lt;</b><b>div</b> class<i>=</i><b>"modal-dialog"</b><b>&gt;</b>
    <b>&lt;</b><b>div</b> class<i>=</i><b>"modal-content"</b><b>&gt;</b>
      <b>&lt;</b><b>div</b> class<i>=</i><b>"modal-header"</b><b>&gt;</b>
        <b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"close"</b> data-dismiss<i>=</i><b>"modal"</b> aria-label<i>=</i><b>"Close"</b><b>&gt;</b><b>&lt;</b><b>span</b> aria-hidden<i>=</i><b>"true"</b><b>&gt;</b>&amp;times;<b>&lt;/</b><b>span</b><b>&gt;</b><b>&lt;/</b><b>button</b><b>&gt;</b>
        <b>&lt;</b><b>h4</b> class<i>=</i><b>"modal-title"</b> id<i>=</i><b>"exampleModalLabel"</b><b>&gt;</b>New message<b>&lt;/</b><b>h4</b><b>&gt;</b>
      <b>&lt;/</b><b>div</b><b>&gt;</b>
      <b>&lt;</b><b>div</b> class<i>=</i><b>"modal-body"</b><b>&gt;</b>
        <b>&lt;</b><b>form</b><b>&gt;</b>
          <b>&lt;</b><b>div</b> class<i>=</i><b>"form-group"</b><b>&gt;</b>
            <b>&lt;</b><b>label</b> for<i>=</i><b>"recipient-name"</b> class<i>=</i><b>"control-label"</b><b>&gt;</b>Recipient:<b>&lt;/</b><b>label</b><b>&gt;</b>
            <b>&lt;</b><b>input</b> type<i>=</i><b>"text"</b> class<i>=</i><b>"form-control"</b> id<i>=</i><b>"recipient-name"</b><b>&gt;</b>
          <b>&lt;/</b><b>div</b><b>&gt;</b>
          <b>&lt;</b><b>div</b> class<i>=</i><b>"form-group"</b><b>&gt;</b>
            <b>&lt;</b><b>label</b> for<i>=</i><b>"message-text"</b> class<i>=</i><b>"control-label"</b><b>&gt;</b>Message:<b>&lt;/</b><b>label</b><b>&gt;</b>
            <b>&lt;</b><b>textarea</b> class<i>=</i><b>"form-control"</b> id<i>=</i><b>"message-text"</b><b>&gt;</b><b>&lt;/</b><b>textarea</b><b>&gt;</b>
          <b>&lt;/</b><b>div</b><b>&gt;</b>
        <b>&lt;/</b><b>form</b><b>&gt;</b>
      <b>&lt;/</b><b>div</b><b>&gt;</b>
      <b>&lt;</b><b>div</b> class<i>=</i><b>"modal-footer"</b><b>&gt;</b>
        <b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"btn btn-default"</b> data-dismiss<i>=</i><b>"modal"</b><b>&gt;</b>Close<b>&lt;/</b><b>button</b><b>&gt;</b>
        <b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> class<i>=</i><b>"btn btn-primary"</b><b>&gt;</b>Send message<b>&lt;/</b><b>button</b><b>&gt;</b>
      <b>&lt;/</b><b>div</b><b>&gt;</b>
    <b>&lt;/</b><b>div</b><b>&gt;</b>
  <b>&lt;/</b><b>div</b><b>&gt;</b>
<b>&lt;/</b><b>div</b><b>&gt;</b>
</pre></pre></div>

Usage
The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds .modal-open to the <body> to override default scrolling behavior and generates a .modal-backdrop to provide a click area for dismissing shown modals when clicking outside the modal.


Via data attributes
Activate a modal without writing JavaScript. Set data-toggle="modal" on a controller element, like a button, along with a data-target="#foo" or href="#foo" to target a specific modal to toggle.


<div style="overflow:auto; height=200; width=100%;">
<pre style="color:black;background:white;"><pre><b>&lt;</b><b>button</b> type<i>=</i><b>"button"</b> data-toggle<i>=</i><b>"modal"</b> data-target<i>=</i><b>"#myModal"</b><b>&gt;</b>Launch modal<b>&lt;/</b><b>button</b><b>&gt;</b>
</pre></pre></div>



<p>Update Post Soon!</p>




<blockquote>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.

- Steve Jobs

</blockquote>


<!-- 
<a href="#">
    <img src="{{ site.baseurl }}/img/jekyllthemewhite.png" alt="Post Sample Image">
</a> 



 -->



