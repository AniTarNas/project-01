/*Menu icon has child add class js start*/
$('.menu_icon >ul >li >ul').parent('li').addClass('has_child');
/*Menu icon has child add class js end*/


/*Responsive menu js start*/
(function($) {
	function mediaSize() { 
		if (window.matchMedia('(max-width: 1280px)').matches) {

			/*Menu open/close and burger menu js atart*/
			$('.burger').click(function(){
			  $(this).toggleClass('active');

			  $("nav .content .menu_icon").toggle(1000);
			});
			/*Menu open/close and burger menu js end*/
/*--------------------------------------------------------------------*/
			/*Menu has_child icon open/close js start*/
			$('li.has_child').click(function(){
			  $(this).toggleClass('rotate');
			  $(this).children('ul').toggle(500);
			});
			/*Menu has_child icon open/close js end*/
		} 
	};
/* Call the function */		
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);
/*Responsive menu js end*/


/*Menu scroll function with media start*/
(function($) {
	function mediaSize() { 
		if (window.matchMedia('(min-width: 1280px)').matches) {

			window.onscroll = function() {scrollFunction()};
			function scrollFunction() {
			  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			    $('nav .content .menu_icon .menu_icon_flex>li>a').css({"padding":"30px 10px"});
			  } else {
			    $('nav .content .menu_icon .menu_icon_flex>li>a').css({"padding":"40px 10px"});
			  }
			}

		} 
	};
	/* Call the function */
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
})(jQuery);

/*Menu scroll function with media end*/


/*Lightslider js start*/
  $(document).ready(function() {
    var autoplaySlider = $('#lightSlider').lightSlider({
    	item:1,
        auto:true,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
/*Lightslider js end*/


/*Countdown with scroll jQuery start*/
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
/*Countdown with scroll jQuery end*/
