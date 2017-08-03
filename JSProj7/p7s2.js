/**
 * @author Sharon Tender
 */
$(document).ready(function() {
	$(".button").click(function() {
		$("#red").fadeIn(function() {
			$("#green").fadeIn("slow", function() {
			  $("#blue").fadeIn("3000");
			});
		});
	});
});
