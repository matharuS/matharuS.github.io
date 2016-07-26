$(document).ready(function(){
  $(".fullSize").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".fullSize").css({height:$(window).innerHeight()})
  });

/*
  var menuCounter = 1;
    $('.menu').on("click", function(){
      menuCounter++;
        if(menuCounter%2=== 0){
          menuOpen();
         }else if(menuCounter%2===1){
          menuClose();
        }
    })
    */

    $('.menu').on('click', menuOpen);
    $('.back').on('click', menuClose);


    function menuOpen(){
      //$('.menu').velocity({top:'20px',bottom:'none', left:'20px'}, {duration:600, delay:0})

      //$('#pinContainer').css('pointer-events', 'none !important')
      $('.menuAfter').velocity('transition.fadeIn', {duration:700, delay:0, queue:false})
      //$('.logo a, .menu').velocity({color: '#696780'}, {duration:600, delay:0, queue:false})
      $('.logo a').velocity({color: '#696780'}, {duration:600, delay:0, queue:false})


      $('.menu').velocity("transition.fadeOut", {duration:300, delay:0, queue:false})
      $('.back').velocity("transition.fadeIn", {duration:300, delay:0, queue:false})

      $('.menuAfter .links a').velocity('transition.fadeIn', {duration:500, delay:800, stagger:'100ms', queue:false})
      $('.menuAfter .social').velocity('transition.flipYIn', {duration:1000, delay:1300})

      console.log('menuCLicked');
    //  $('#pinContainer').velocity({scale:'0.8'}, {duration:600, delay:0, easing:"easeInOutSine"})



    }
    function menuClose(){
      //$('#pinContainer').css('pointer-events', 'all')
      $('.menuAfter').velocity('transition.fadeOut', {duration:700, delay:0, queue:false})

      //$('.logo a, .menu').velocity({color: '#000000'}, {duration:600, delay:0, queue:false})
      $('.logo a').velocity({color: '#000000'}, {duration:600, delay:0, queue:false})
      $('.menu').velocity("transition.fadeIn", {duration:300, delay:0, queue:false})
      $('.back').velocity("transition.fadeOut", {duration:300, delay:0, queue:false})

      //$('.menuAfter .links a').css('display', 'none');
      $('.menuAfter .links a, .menuAfter .social').velocity('transition.fadeOut', {duration:600, delay:0, queue:false})
      //$('.menuAfter .links a').css('display', 'none');
    //  $('#pinContainer').velocity({scale:'1'}, {duration:600, delay:0, easing:"easeInOutSine"})

    }




$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

    if($('body').height() >= 800){
     console.log(' greater than 800');


   } else if($('body').height() <= 800){
     console.log(' less than 800');


   }

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			//.fromTo("section.panel.one", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left

      //.fromTo("section.panel.two",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			//.fromTo("section.panel.three", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
      //.fromTo("section.panel.four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
      //.fromTo("section.panel.i1", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top

      /*
      .fromTo("section.panel.i2", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.i3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      */




      .fromTo("section.panel.i2", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.i3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.i4", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.i5", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.i6", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});

})
