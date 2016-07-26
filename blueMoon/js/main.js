$(document).ready(function(){
  $("#left, #right").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#left, #right").css({height:$(window).innerHeight()})
  });




var menuCounter = 1;
  $('.menuLines').on("click", function(){
    menuCounter++;
      if(menuCounter%2=== 0){
        menuOpen();
       }else if(menuCounter%2===1){
        menuClose();
      }
  })



  function menuOpen(){
    $('.l2').velocity({width:'0px'},{duration:400, delay:0})
    $('.l1').velocity({rotateZ:'45deg', translateY:'7',translateX:'6'},{duration:400, delay:0})
    $('.l3').velocity({rotateZ:'-45deg', translateY:'-7',translateX:'6'},{duration:400, delay:0})

    //$('#left').velocity({translateY:'-100%'},{duration:400, delay:0})
    //$('#leftMenuContent').velocity({translateY:'-100%'},{duration:400, delay:0})

    //$('.links .li, .social .li a').velocity("transition.flipYIn", {duration:600, delay:500, stagger: '100ms', queue: false})

    $('.logoName').velocity({color: '#634cab'},{duration:400, delay:0, queue:false})
    $('.links .li').velocity("transition.flipYIn", {duration:500, delay:500, stagger: '100ms', queue: false})
    $('.social .li a').velocity("transition.expandIn", {duration:500, delay:1000,queue: false})

    $('#leftMenuContent').velocity("transition.expandIn",{duration:400, delay:0})

/*
    //$('.insideLeft').velocity({translateX:'100px'},{duration:700, delay:0, easing:"easeInOutSine", queue:false})
    if($('#shell').width() >= 801){
      console.log('greater than 800px')


      $('#left').velocity({translateY:'-100%'},{duration:400, delay:0})
      $('#leftMenuContent').velocity({translateY:'-100%'},{duration:400, delay:0})
    }
    if($('#shell').width() <= 800){
      console.log('less than 800px')

      $('#left').velocity({translateX:'-100%'},{duration:400, delay:0})
      $('#leftMenuContent').velocity({translateX:'-100%'},{duration:400, delay:0})
    }
*/


  }
  function menuClose(){
    $('.l2').velocity({width:'70%'},{duration:400, delay:0})
    $('.l1').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:400, delay:0})
    $('.l3').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:400, delay:0})

    //$('#left').velocity({translateY:'0'},{duration:400, delay:0, queue: false})
    //$('#leftMenuContent').velocity({translateY:'0'},{duration:400, delay:0, queue: false})

    $('.logoName').velocity({color: '#000000'},{duration:300, delay:0, queue:false})
    $('.links .li').velocity("transition.fadeOut", {duration:300, delay:0, queue: false})

    $('.social .li a').velocity("transition.fadeOut", {duration:300, delay:0,queue: false})
    $('#leftMenuContent').velocity("transition.expandOut",{duration:400, delay:0})

/*
    if($('#shell').width() >= 801){
      console.log('greater than 800px')


      $('#left').velocity({translateY:'0'},{duration:400, delay:0, queue: false})
      $('#leftMenuContent').velocity({translateY:'0'},{duration:400, delay:0, queue: false})
    }
    if($('#shell').width() <= 800){
      console.log('less than 800px')

      $('#left').velocity({translateX:'0'},{duration:400, delay:0})
      $('#leftMenuContent').velocity({translateX:'0'},{duration:400, delay:0})
    }
      */
  }

  var mobileMenuCounter = 1;
    $('.mobileMenuLineShell').on("click", function(){
      mobileMenuCounter++;
        if(mobileMenuCounter%2=== 0){
          mobileMenuOpen();
         }else if(mobileMenuCounter%2===1){
          mobileMenuClose();
        }
    })

  function mobileMenuOpen(){
    $('.l2').velocity({width:'0px'},{duration:400, delay:0})
    $('.l1').velocity({rotateZ:'45deg', translateY:'7',translateX:'6'},{duration:400, delay:0})
    $('.l3').velocity({rotateZ:'-45deg', translateY:'-7',translateX:'6'},{duration:400, delay:0})

    $('.mobileMenuLineShell').velocity({backgroundColor:"#A7CECB"},{duration:400, delay:0, queue: false})
    //$('body').css({'height':'100%', 'overflow':'hidden'})
    $('#leftMenuContent').velocity("transition.expandIn",{duration:400, delay:0})

    $('.mobileLogoHold').velocity("transition.flipYIn", {duration:500, delay:500, stagger: '100ms', queue: false})
    $('.links .li').velocity("transition.flipYIn", {duration:500, delay:1200, stagger: '100ms', queue: false})
    $('.social .li a').velocity("transition.expandIn", {duration:500, delay:1700,queue: false})
  }


  function mobileMenuClose(){
    $('.l2').velocity({width:'70%'},{duration:400, delay:0})
    $('.l1').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:400, delay:0})
    $('.l3').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:400, delay:0})

    $('.mobileMenuLineShell').velocity({backgroundColor:"#8BA6A9"},{duration:400, delay:0, queue: false})
    $('#leftMenuContent').velocity("transition.expandOut",{duration:400, delay:0})

    //$('body').css({'height':'auto', 'overflow':'scroll'})

    $('.links .li').velocity("transition.fadeOut", {duration:300, delay:0, queue: false})
    $('.social .li a').velocity("transition.fadeOut", {duration:300, delay:0,queue: false})
  }

})
