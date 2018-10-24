$(document).ready(function(){
	console.log("done?")

	
	
	$('.intro__slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
	prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),	
});
	
	
	
	$('.gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.gallery__slider__controls'
});
	
	$('.gallery__slider__controls').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.gallery__slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
	

		
	console.log("end?")
});

