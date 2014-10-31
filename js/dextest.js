$( document ).ready(function() {

	$(function(){
		
		var box1 = ".box1_first";
			$(box1).hover(function(){
			$(box1).toggleClass("hover_test1");
			$(".test1").show();
			$(".test2,.test3,.test4").hide();
		});
		$(".box1_second").hover(function(){
			$(this).toggleClass("hover_test1");
			$(".test2").show();
			$(".test1,.test3,.test4").hide();
		});
		$(".box1_third").hover(function(){
			$(this).toggleClass("hover_test1");
			$(".test3").show();
			$(".test1,.test2,.test4").hide();
		});
		$(".box1_fourth").hover(function(){
			$(this).toggleClass("hover_test1");
			$(".test4").show();
			$(".test1,.test2,.test3").hide();
		});
		
		<!--Start of Nav functionallity
		$(".box1_first,.box1_second,.box1_third,.box1_fourth").hide();
		$(".about,.home").click(function(){
			$(".box1_first,.box1_second,.box1_third,.box1_fourth").hide();
		});
		$(".about,.home").mouseover(function(){
			$(".test1,.test2,.test3,.test4").hide();
		});
		
		$(".gallery").click(function(){
			$(".box1_first,.box1_second,.box1_third,.box1_fourth").show();
		});
		
	});	


$(function() {
    $("#box1_first").hover(
    function() {
        $(this).css('background-color', '#f0f0f0')
    }, function() {
        $(this).css('background-color', '#c0c0c0')
    });
});​

}); //end of doc ready
