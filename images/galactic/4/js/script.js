$(document).ready(function() {
$('body').css('display', 'none');
$('body').fadeIn(1100);

$('.logo, .logo_posts, .prev, .next').click(function(event) {

event.preventDefault();
newLocation = this.href;
$('body').fadeOut(1000, newpage);
});

function newpage() {
window.location = newLocation;
}

});


$(function(){
	$("#heading").appear(function() {
		$(function(){
		
		var container = $("#heading");
		container.shuffleLetters().css({ opacity: 1 });
		});
	});


	
var $Top = $('.blog_container');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $Top.fadeIn(400);
    } else if ($Top.is(':visible')) {
        $Top.fadeOut(200);
    }
});
	$(".blog_container").fadeOut();


	$(".fade_in").css({opacity:0,});
	$("#heading").appear(function() {
		$(".fade_in").delay( 800 ).animate({opacity:1}, 1500);
	});

	$(".top_section").appear(function() {
		$("#top_hide").animate({opacity:1}, 800);
		$(".top_hide").delay( 1000 ).animate({opacity:1}, 1000);
	});

		$("#middle_hide").css({ opacity: 0 });
	$(".middle_hide").css({ opacity: 0 });

	$(".middle_section").appear(function() {
		$("#middle_hide").animate({opacity:1}, 800);
		$(".middle_hide").delay( 1000 ).animate({opacity:1}, 1000);
	});

	$("#logo").css({opacity:0});



if ($(window).width() <= 960) {
   
	$("#more_hide").css({opacity:0, "bottom": "2.3em", position: "relative"});
	$("#more_hide").delay( 2200 ).animate({opacity:1, "bottom": "0em"}, 900);

	$("#logo").css({opacity:0, "top": "-3em", position: "relative"});
	$("#logo").delay( 1200 ).animate({opacity:1, "top": "0em"}, 200);


	$( "video" ).remove();

    userFeed.run();

}
else {
   $("#more_hide").css({opacity:0});
	$("#more_hide").delay( 3200 ).animate({opacity:1}, 800);
	
	$("#logo").css({opacity:0});
	$("#logo").delay( 2750 ).animate({opacity:1}, 300);

	$("h3 #title1").css({opacity:1, "margin-right": "-130px", position: "relative"});
	$("h3 #title1").delay( 1500 ).animate({opacity:1, "margin-right": "0em"}, 500);

	$("h3 #title2").css({opacity:0});
	$("h3 #title2").delay( 1980 ).animate({opacity:1}, 200);

	$("h3 #title3").css({opacity:0, "margin-right": "-500px", position: "relative"});
	$("h3 #title3").delay( 2550 ).animate({opacity:1, "margin-right": "0em"}, 500);

	    var userFeed = new Instafeed({
        get: 'user',
        resolution: 'standard_resolution',
        accessToken: '20312266.b18a46b.fb9e6e2246334353a6906d125d2bfbfe',
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
        limit: 12
    });

    userFeed.run();

}


$('.plus').click(function(){
    $(this).toggleClass("rotate45");
});


$( "a.blog" ).click(function() {
  $( ".blog_show" ).fadeToggle( 400 ).css({opacity: block});
});


});




jQuery(document).keydown(function(e) {
if ($(".prev")[0]){
    if (e.keyCode == 37) {
        window.location = jQuery('.prev').attr('href');
        $(".key").css({opacity:1});
        return false;
      }
    }
});

jQuery(document).keydown(function(e) {
if ($(".next")[0]){
    if (e.keyCode == 39) {
        window.location = jQuery('.next').attr('href');
        $(".key").css({opacity:1});
        return false;
      }
    }
});

