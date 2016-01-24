$(document).ready(function(){
  console.log('ready');

  $(".side").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".side").css({height:$(window).innerHeight()})
  });



(function(){
  $('.holdLine').velocity({width:'1px'},{duration:700,loop:true, easing:"easeInOutCirc"})
})();

  //arrow slide to portfolio
  $('.menuPortfolio').on('click', function(){
    var menuCounter = 1;
    menuClose()
    $('.portfolioWebsites').velocity("scroll",{ duration: 1000, delay:0,  easing:"easeInOutCubic"})
  })

  //arrow slide to portfolio
  $('.menuAnimation').on('click', function(){
    var menuCounter = 1;
    menuClose()
    $('.portfolioAnimations').velocity("scroll",{ duration: 1000, delay:0,  easing:"easeInOutCubic"})
  })
  //arrow slide to animations
  $('.menuTutorial').on('click', function(){
    var menuCounter = 1;
    menuClose()
    $('.lessons').velocity("scroll",{ duration: 1000, delay:0,  easing:"easeInOutCubic"})
  })
  //arrow slide to portfolio
  $('.menuAbout').on('click', function(){
    var menuCounter = 1;
    menuClose()
    $('.aboutContact').velocity("scroll",{ duration: 1000, delay:0,  easing:"easeInOutCubic"})
  })

  ///////////////// mainMenu START /////////////////
      var menuCounter = 1;
      $('.lineHold').on("click", function(){
      	menuCounter++;
      		if(menuCounter%2=== 0){
      			menuOpen();
      		 }else if(menuCounter%2===1){
      			menuClose();
      		}
      })
      function menuOpen(){
        $('.l2').velocity({width:'0px'},{duration:500, delay:0})
        $('.l1').velocity({rotateZ:'45deg', translateY:'5',translateX:'5px'},{duration:500, delay:0})
        $('.l3').velocity({rotateZ:'-45deg', translateY:'-5',translateX:'5px'},{duration:500, delay:0})

        $('.logo').velocity({opacity:'0'},{duration: 400, delay:0})

        $('.menuHome').velocity({translateY:'0'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuPortfolio').velocity({translateX:'0'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuAnimation').velocity({translateX:'0'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuTutorial').velocity({translateX:'0'},{duration:600, delay:50, easing:"easeInOutQuart"})
        $('.menuAbout').velocity({translateX:'0'},{duration:600, delay:50, easing:"easeInOutQuart"})
        $('.menuUlLinks .li .forCentering').velocity("transition.flipYIn",{duration:1000, delay:800, easing:"easeInOutQuart"})
        console.log('menu was actived')
      }
      function menuClose(){
        $('.l2').velocity({width:'20px'},{duration:500, delay:0})
        $('.l1').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:500, delay:0})
        $('.l3').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:500, delay:0})

        $('.menuUlLinks .li .forCentering').velocity({opacity:'0'},{duration:1000, delay:0, easing:"easeInOutQuart"})

        $('.logo').velocity({opacity:'1'},{duration: 600, delay:0})

        $('.menuHome').velocity({translateY:'-100%'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuPortfolio').velocity({translateX:'-100%'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuAnimation').velocity({translateX:'100%'},{duration:600, delay:0, easing:"easeInOutQuart"})
        $('.menuTutorial').velocity({translateX:'-100%'},{duration:600, delay:50, easing:"easeInOutQuart"})
        $('.menuAbout').velocity({translateX:'100%'},{duration:600, delay:50, easing:"easeInOutQuart"})
        console.log('menu close was activated')
      }
    ///////////////// mainMenu END /////////////////
})
