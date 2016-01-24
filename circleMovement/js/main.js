$(document).ready(function(){
  console.log('ready')
  $("body").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("body").css({height:$(window).innerHeight()})
  });

/*
  (function upDown(){
  //$('.cube').velocity({translateZ:'20px'},{duration:500, loop:true, easing: "easeInOutElastic"})
  $('.cube').each(function(i){
      //$(this).delay((i + 1) * 40).velocity({translateZ:'60px', translateY:'10px', translateX:'30px'},{duration:500, loop:true, easing: "easeInOutElastic"})
      $(this).velocity({margin:'5px'},{duration:0,delay:0})
      $(this).delay((i + 1) * 40).velocity({translateZ:'20px'},{duration:500, loop:true, easing: "easeInOutElastic"})
  })
  })();
*/

(function upDown(){

  //$('.topCubes .fl').velocity({rotateZ:'360deg', rotateX:'360deg' },{duration:3000, loop:true, easing: "linear"})
  $('.topCubes .fl').velocity({translateX:'160px', translateY:'-160px', translateZ:'-160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.topCubes .fr').velocity({translateY:'-160px', translateX:'-160px', translateZ:'-160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.topCubes .br').velocity({translateY:'160px', translateX:'-160px', translateZ:'-160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.topCubes .bl').velocity({translateY:'160px', translateX:'160px', translateZ:'-160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})

  $('.bottomCubes .fl').velocity({translateX:'160px', translateY:'-160px', translateZ:'160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.bottomCubes .fr').velocity({translateY:'-160px', translateX:'-160px', translateZ:'160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.bottomCubes .br').velocity({translateY:'160px', translateX:'-160px', translateZ:'160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  $('.bottomCubes .bl').velocity({translateY:'160px', translateX:'160px', translateZ:'160px'},{duration:2000, loop:true, easing: "easeInOutCubic"})
  //or easeInOutQuart
})();


/*
              //mouse movement functionality
$(document).on( "mousemove", function( e ) {
//$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

//$('.mainPlain').velocity({rotateX:"e.xPosition * 0.5"},{duration:10, delay:0})
cx = Math.ceil($('body').width() / 10.0);
cy = Math.ceil($('body').height() / 10.0);
dx = e.pageX - cx;
dy = e.pageY - cy;

tiltx = (dy / cy);
tilty = - (dx / cx);
radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
degree = (radius * 20);

$('.cubeHold').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');

});
*/



})//end documen.ready
