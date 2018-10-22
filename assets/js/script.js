$(document).ready(function(){
	console.log("done?")
//$('.slider__item').slick({
//  dots: true,
//  infinite: true,
//  speed: 300,
//  slidesToShow: 1,
//  adaptiveHeight: true
//});
	
	
//$('.slider__item').slick();
	
	
	$('.intro__slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
	prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),	
});
	

		

});
