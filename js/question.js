 $(".button-1").on("click",
 	function(){
	 	$(".content-2").hide();
	 	$(".content-3").hide();
 	}); 
 	$(".content-1").toggle();
 	
 $(".button-2").on("click",
 	function(){
	 	$(".content-1").hide();
	 	$(".content-3").hide();
 	}); 
 	$(".content-2").toggle();
 
 $(".button-3").on("click",
 	function(){
	 	$(".content-1").hide();
	 	$(".content-2").hide();
 	}); 
 	$(".content-3").toggle();