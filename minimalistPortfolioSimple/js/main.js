$(document).ready(function(){
  $(".panel").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".panel").css({height:$(window).innerHeight()})
  });
    $('.menu').on('click', menuOpen);
    $('.back').on('click', menuClose);


    function menuOpen(){
      $('.menuAfter').velocity('transition.fadeIn', {duration:700, delay:0, queue:false})
      $('.logo a').velocity({color: '#696780'}, {duration:600, delay:0, queue:false})
      $('.menu').velocity("transition.fadeOut", {duration:300, delay:0, queue:false})
      $('.back').velocity("transition.fadeIn", {duration:300, delay:0, queue:false})

      $('.menuAfter .links a').velocity('transition.fadeIn', {duration:500, delay:800, stagger:'100ms', queue:false})
      $('.menuAfter .social').velocity('transition.flipYIn', {duration:1000, delay:1300})
    }
    function menuClose(){
      $('.menuAfter').velocity('transition.fadeOut', {duration:700, delay:0, queue:false})
      $('.logo a').velocity({color: '#000000'}, {duration:600, delay:0, queue:false})
      $('.menu').velocity("transition.fadeIn", {duration:300, delay:0, queue:false})
      $('.back').velocity("transition.fadeOut", {duration:300, delay:0, queue:false})
      $('.menuAfter .links a, .menuAfter .social').velocity('transition.fadeOut', {duration:600, delay:0, queue:false})
    }
})//end js
