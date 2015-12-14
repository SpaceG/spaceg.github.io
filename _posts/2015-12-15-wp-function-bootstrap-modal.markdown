---
layout:     post
title:      "UI WP Bootstrap Modal Function Javascript"
subtitle:   "Javascript Function for WP"
date:       2015-12-15 14:00:44
author:     "Lucas Gatsas"
header-img: "img/tU3ptNgGSP6U2fE67Gvy_SYDNEY-162.jpg"
---

<h2 class="section-heading">UI WP Bootstrap Modal Function Javascript
</h2>

<br>
<strong>UI Javascript WP Function for Bootstrap </strong>


The Javascript 



{% highlight ruby %}



// add bootstrap Modal function 
function themeprefix_bootstrap_modals() {
  wp_register_script ( 'modaljs' , get_stylesheet_directory_uri() . '/js/bootstrap/bootstrap.min.js', array( 'jquery' ), '1', true );
  wp_register_style ( 'modalcss' , get_stylesheet_directory_uri() . '/css/bootstrap/bootstrap.css', '' , '', 'all' );
  
  wp_enqueue_script( 'modaljs' );
  wp_enqueue_style( 'modalcss' );
}

add_action( 'wp_enqueue_scripts', 'themeprefix_bootstrap_modals');

         {% endhighlight %}






<br>






HTML 

{% highlight ruby %}


<!-- Button trigger modal -->
<a class="btn btn-primary btn-lg" href="#myModal1" data-toggle="modal">Start Modal</a>

<!-- Modal -->
<div id="myModal1" class="modal fade" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" type="button" data-dismiss="modal">×</button>
          <h4 class="modal-title">Get to the Front of The Queue</h4>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer"><button class="btn btn-default" type="button" data-dismiss="modal">Close</button>
        <button class="btn btn-primary" type="button">Save changes</button></div>
      </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->




         {% endhighlight %}



<br>


The CDN's 

{% highlight ruby %}

    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>


    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">


         {% endhighlight %}


Link: <a href="https://wordpress.com" target="_blank"> Wordpress </a> 
Link: <a href="https://bootstrap.com" target="_blank"> Bootstrap</a> 




<blockquote>
"Change your Life
"
</blockquote>

