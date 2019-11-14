$(window).on("load", function(){
	$("#hamburger").on('click', function() {
		$(this).toggleClass("fa-times");
		$("#dropdown").toggleClass("show");
	});
});