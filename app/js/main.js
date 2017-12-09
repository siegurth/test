$( document ).ready(function() {
	$("#menu li a").click(function(event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.slider').slick({
		infinite: true,
		speed: 2000,
  	slidesToShow: 1,
  	adaptiveHeight: true,
  	dots: false
  });

});