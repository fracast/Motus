$(document).ready(function(){
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed (the yPos is a negative value because scrolling direction is up								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

		// put together our final background position
		var coords = '50% '+ yPos + 'px';

		// move the background
		$bgobj.css({ backgroundPosition: coords });

});

 });	

});

document.createElement("article");
document.createElement("section");