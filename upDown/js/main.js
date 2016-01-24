$(document).ready(function(){
  /*
  $("body").css({height:$(window).innerHeight()});
  $(window).resize(function(){
    $("body").css({height:$(window).innerHeight()})
  });
*/



                //mouse movement functionality
/*
  $(document).on( "mousemove", function( e ) {
  //$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

  //$('.mainPlain').velocity({rotateX:"e.xPosition * 0.5"},{duration:10, delay:0})
  cx = Math.ceil($('body').width() / 5.0);
  cy = Math.ceil($('body').height() / 5.0);
  dx = e.pageX - cx;
  dy = e.pageY - cy;

  tiltx = (dy / cy);
  tilty = - (dx / cx);
  radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
  degree = (radius * 20);

  $('.mainPlain').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');

});

*/










(function upDown(){
  //$('.cube').velocity({translateZ:'20px'},{duration:500, loop:true, easing: "easeInOutElastic"})
  $('.cube').each(function(i){
      //$(this).delay((i + 1) * 40).velocity({translateZ:'60px', translateY:'10px', translateX:'30px'},{duration:500, loop:true, easing: "easeInOutElastic"})
      $(this).velocity({margin:'5px'},{duration:0,delay:0})
      $(this).delay((i + 1) * 40).velocity({translateZ:'20px'},{duration:500, loop:true, easing: "easeInOutElastic"})
      //$('.cube .top').velocity({ backgroundColor: '#92C39E'},{duration:1000, loop:true, easing: "easeInOutElastic"})
  })
  })();

})//end document.ready
