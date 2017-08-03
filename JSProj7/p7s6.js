/**
 * @author Sharon Tender
 */
$(document).ready(function() {
	$('.gallery img').each(function(i) {
		var imgFile = $(this).attr('src');
		var preloadImage = new Image();
		var imgExt = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgExt,'_h$1');
		$(this).hover(function() {
			$(this).attr('src', preloadImage.src);
		},
		function () {
			var currentSource=$(this).attr('src');
			$(this).attr('src', imgFile);
		});
	});

// when an image from the gallery class (on the left) is clicked, swap to new image
	$('.gallery a').click(function(evt) {
		//don't follow link
		 evt.preventDefault();
		 //get path to new image that was clicked
	   var imgPath = $(this).attr('href');
		 //get reference to old image - big photo area
		 var oldImage = $('.photo img');

			 //create HTML for new image to replace the prior image - big photo area
			 var newImage = $('<img src="' + imgPath +'">');
			 //make new image invisible
			 newImage.hide();
			 //add clicked image to the photo class in the last div prior to footer, which is the big photo area
			 $('.photo').prepend(newImage);
			 //fade in new image
			 newImage.fadeIn(1000);

			 //fade out old image and remove from DOM
			 oldImage.fadeOut(1000,function(){
		     $(this).remove();
				});
	}); // end click
	$('.gallery a:first').click();
	}); // end ready