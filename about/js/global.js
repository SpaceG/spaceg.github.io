
/*
responsive menu
*/
(function(){
	function updateHeader(menu){
		var header = menu.find('.menu-toggle');
		var title = menu.find('.menu-collapse li.selected > a').data('title');
		if (!title) title = menu.find('.menu-collapse li.selected > a').text();
		if (title) header.html(title + '<span></span>');
	}
	var menus = jQuery('.menu-respond');
	var buttons = jQuery('.menu-toggle');
	buttons.click(function(){
		jQuery(this).toggleClass('open');
		var menu = jQuery(this).next('.menu-collapse');
		if(!menu.is(':animated')) { 
			menu.slideToggle();
		}
		return false;
	});
	menus.each(function(){
		var menu = jQuery(this);
		var menu_links = menu.find('.menu-collapse a');
		updateHeader(menu);
		menu_links.click(function(){
			if (jQuery(this).attr('href').substr(0,1) != '#') return;
			var header = menu.find('.menu-toggle');
			var collapse = menu.find('.menu-collapse');
			var title = jQuery(this).data('title');
			if (!title) title = jQuery(this).text();
			if (title) header.html(title + '<span></span>');
			jQuery(header).toggleClass('open');
			collapse.hide();
		});
	});
	
    //Portfolio masonry
    var $container = $('#projects');
    $container.isotope({
      masonry: {
       columnWidth: 0
      },
      itemSelector: '.project'
    });

    //Portfolio filters
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });	
	
  //On Click Open Services
  $('#service-overlay').on( 'click', function() {
      $('#service-panel').addClass('open');
	  $('#course-panel').removeClass('open');
    });
  $('#service-panel .overlay-close').on( 'click', function() {
      $('#service-panel').removeClass('open');
    });

  //On Click Open Courses
  $('#course-overlay').on( 'click', function() {
      $('#course-panel').addClass('open');
	  $('#service-panel').removeClass('open');
    });
  $('#course-panel .overlay-close').on( 'click', function() {
      $('#course-panel').removeClass('open');
    });	
  $('.main-wrap').on( 'click', function() {
      $('#course-panel, #service-panel').removeClass('open');
    });	
	
	
})();


jQuery(document).ready(function() {
	var browserWidth = window.innerWidth;
	console.log(browserWidth);

	if (browserWidth > 767) {
		jQuery(window).bind('scroll', function(e){			
			parallax();		
		});
	}
	
	

});

function parallax() {
	var scrollPosition = jQuery(window).scrollTop();
	jQuery('.generic-image-banner').css('top', (0 - (scrollPosition) * .2) + 'px');
	jQuery('.custom-image-banner').css('top', (0 - (scrollPosition) * .2) + 'px');
	jQuery('.events-image-banner').css('top', (0 - (scrollPosition) * .2) + 'px');
	jQuery('.image-banner-text').css('top', (0 - scrollPosition) + 'px');
}

  //Google Maps
  function initMap() {
    var myLatlng = new google.maps.LatLng(22.3481691,91.8319693); // <- Your latitude and longitude
    var styles = [{"featureType":"water","stylers":[{"visibility":"on"}]},{"featureType":"landscape"},{"featureType":"road.highway","elementType":"geometry"},{"featureType":"road.arterial","elementType":"geometry"},{"featureType":"road.local","elementType":"geometry"},{"featureType":"poi.park","elementType":"geometry"},{"featureType":"administrative","stylers":[{"visibility":"on"}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{},{"featureType":"road"}]
    
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false,
      styles: styles
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: "We are here!"
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '../images/pin.png',
        title: 'We are here!'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initMap);
    $('#map').css('position', 'absolute');
  }  
 

    //Placeholder

    $('input,textarea').on( 'focus', function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });
	
	$('input, textarea').placeholder();
	 	
