	$( document ).ready(function() {
	$("#menu li a").click(function(event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});

	if ($('.back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('.back-to-top').addClass('show');
          } else {
              $('.back-to-top').removeClass('show');
          }
        };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
      	scrollTop: 0
      }, 700);
    });
	};

	$('.sandwich-menu').click(function(){
		$(this).siblings('ul').show(function(){$(this).animate(),500});
	});

	$('.slider').slick({
		infinite: true,
		speed: 2000,
  	slidesToShow: 1,
  	adaptiveHeight: true,
  	dots: false
  });

  $('.blog-slider').slick({
  	infinite: true,
		speed: 2000,
  	slidesToShow: 1,
  	dots: true,
  	adaptiveHeight: true
  });

});