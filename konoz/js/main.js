jQuery(document).ready(function($){


	function interpretation(){

		//$('.tempShell').velocity({opacity:0},{duration:0, delay:0})

		$('.cd-header, .cd-fixed-background, .testimonial, .tryNow, footer, nav').velocity({opacity:0},{duration:0, delay:0})
		$('.interpretation').velocity("scroll",{duration:0,delay:0, offset:-400})
		$('.interpretation').velocity({height:'230px', width:'300px'},{duration:600,delay:200 })
		$('.interpretation .content').velocity("transition.expandIn",{duration:400,delay:600 })
	}

	function dissolve(){
			$('.cd-header, .cd-fixed-background, .testimonial, .tryNow, footer, nav').velocity({opacity:1},{duration:1000, delay:0})
			$('.interpretation').velocity({height:'0', width:'0'},{display:'none'},{duration:400,delay:0, queue:false})
			$('.interpretation .content').velocity("transition.expandOut",{duration:300,delay:0, queue:false})
	}

	$('.interpretation').on('click',function(){
		console.log('clicked')
		dissolve();
	})

	interpretation();

	var animating = false;

	//update arrows visibility and detect which section is visible in the viewport
	setSlider();
	$(window).on('scroll resize', function(){
		(!window.requestAnimationFrame) ? setSlider() : window.requestAnimationFrame(setSlider);
	});

	//move to next/previous section clicking on arrows
    $('.cd-vertical-nav .cd-prev').on('click', function(){
    	prevSection();
    });
    $('.cd-vertical-nav .cd-next').on('click', function(){
    	nextSection();
    });

    //move to next/previous using the keyboards
    $(document).keydown(function(event){
		if( event.which=='38' ) {
			prevSection();
			event.preventDefault();
		} else if( event.which=='40' ) {
			nextSection();
			event.preventDefault();
		}
	});

	//go to next section
	function nextSection() {
		if (!animating) {
			if ($('.is-visible[data-type="slider-item"]').next().length > 0) smoothScroll($('.is-visible[data-type="slider-item"]').next());
		}
	}

	//go to previous section
	function prevSection() {
		if (!animating) {
			var prevSection = $('.is-visible[data-type="slider-item"]');
			if(prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
				smoothScroll(prevSection);
			} else if(prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
				smoothScroll(prevSection.prev('[data-type="slider-item"]'));
			}
		}
	}

	function setSlider() {
		checkNavigation();
		checkVisibleSection();
	}

	//update the visibility of the navigation arrows
	function checkNavigation() {
		( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
		( $(window).scrollTop() > $(document).height() - 3*$(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
	}

	//detect which section is visible in the viewport
	function checkVisibleSection() {
		var scrollTop = $(window).scrollTop(),
			windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function(){
			var actualBlock = $(this),
				offset = scrollTop - actualBlock.offset().top;
			//add/remove .is-visible class if the section is in the viewport - it is used to navigate through the sections
			( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	}

	function smoothScroll(target) {
		animating = true;
        $('body,html').animate({'scrollTop': target.offset().top}, 500, function(){ animating = false; });
	}
});
