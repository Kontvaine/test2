$(document).ready(function(){
	console.log("done?")

	//Slick sliders index
	
	$('.intro__slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
	prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),	
});
	
	//Slick sliders categories
	
	$('.gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
	centerMode: true,
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
	
	
	
	
	
	
	//ACCORDION
	
	$( function() {
    $( "#product-info__more" ).accordion({
			
			collapsible: true,
			active: true,
			heightStyle: "content",
			//icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
			
    });
			//var icons = $( "#product-info__more" ).accordion( "option", "icons" );
 
// Setter
//		$( "#product-info__more" ).accordion( "option", "icons", { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" } );
  });
	
	
		
	$( "#product-info__specs" ).accordion({

			collapsible: true,
			heightStyle: "content",
			//icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});

	//var icons = $( "#product-info__more" ).accordion( "option", "icons" );

	//$( "#product-info__more" ).accordion( "option", "icons", { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" } );

	
		$( function() {
    $( "#product-info__specs" ).accordion({
      collapsible: true,
			heightStyle: "content",
			active: false
    }).on("click", "h3.ui-accordion-header", function(e) {
    $("h3.ui-accordion-header").each(function(i, el) {
     $(this).find(".panel-icon").text($(el).is(".ui-state-active") ? "-" : "+")
    })
  });
  } );
	
//	
//			$( function() {
//    $( "#product-info__more" ).accordion({
//      collapsible: true,
//			heightStyle: "content",
//			active: false
//    }).on("click", "h3.ui-accordion-header", function(e) {
//    $("h3.ui-accordion-header").each(function(i, el) {
//     $(this).find(".panel-icon").text($(el).is(".ui-state-active") ? "-" : "+")
//    })
//  });
//  } );

$( ".order" ).click(function(){
	
	//Fade in the Popup
    $("#popup-order-form").fadeIn(300);

    
    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
		return false;
	
});
	
	
	
	
	
	// When clicking on the button close or the mask layer the popup closed
$('.order-form_close').click(function(){
  $('#popup-order-form').fadeOut(300);
	$('#mask').fadeOut(300); 

return false;
});
//	
//	// When clicking on the button close or the mask layer the popup closed
//$('.order-form_close, #mask').live('click', function() { 
//  $('#mask, #popup-order-form').fadeOut(300 , function() {
//    $('#mask').remove();  
//}); 
//return false;
//});
	
	
	
	




		
	console.log("end?")
});

