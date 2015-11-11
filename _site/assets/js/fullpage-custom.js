$(document).ready(function() {        
	
	/* ======= Fullpage.js ======= */ 
	/* Ref: https://github.com/alvarotrigo/fullPage.js */
        
    $('#fullpage').fullpage({
		anchors: ['home', 'gitlist', 'blog', 'blog', 'download'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Gitlist App', 'Blog', 'Benefit 3', 'Download'],
		resize : false,
		scrollBar: true,
		autoScrolling: false,
		
		
	});
    

});