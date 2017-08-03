/**
 * @author Sharon Tender
 */
//click to fade in
$(document).ready(function() {
	$(".button").click(function() {
		$("#red").fadeIn(function() {
			$("#green").fadeIn("slow", function() {
			  $("#blue").fadeIn("3000");
			});
		});
	});

	// dble click to fade out dblclick
	$(".button").dblclick(function() {
		$("#blue").fadeOut(function() {
			$("#green").fadeOut("slow", function() {
			  $("#red").fadeOut("3000");
			});
		});
	});

});


