$(document).ready(function(){
  $("body").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("body").css({height:$(window).innerHeight()})
  });

  var loading  = new TimelineMax();

  var loadingShell = $('.loadingShell'),
      shell = $('#shell'),

      serviceItem = $('.serviceItem'),

      contactAfter = $('.contactAfter');

      //menu = $('.menu'),
      //menuContent = $('.menuContent'),
      //menuItem = $('.menuItem'),

      //menuPortfolio = $('.menuPortfolio'),
      //menuServices = $('.menuServices'),
      //menuContact = $('.menuContact'),
      //portfolio = $('.portfolio'),
      //services = $('.services'),
      //footer = $('.footer');

  //TweenMax.set(menu, {autoAlpha:0})
  //TweenMax.set(menuItem,{autoAlpha:0, x:-30})

  TweenMax.set(contactAfter, {scale:0.1,autoAlpha:0})


  loading
    .fromTo(loadingShell, 1, {top:'120%'},{top:0, ease:Power1.EaseIn})
    .to(loadingShell,1, { top:30,scaleX:1, scaleY:1})
    //.fromTo([shell, menu], 0.5, {css:{autoAlpha:0}},{css:{autoAlpha:1}})
    .fromTo(shell, 0.5, {css:{autoAlpha:0}},{css:{autoAlpha:1}})
    .to(loadingShell,0.5, { scale:0,autoAlpha:0})


  $('.services').waypoint(function() {
      TweenMax.staggerTo(serviceItem, 2, {scale:1, opacity:1,  ease:Elastic.easeOut}, 0.05)
  },{context:"#shell", offset:'20%'});


  $('.contact').on('click', function(){
    TweenMax.to(contactAfter,0.7,{autoAlpha:1, scale:1})
    console.log('contact for form clicked')
  })
  $('.contactExit').on('click', function(){
    TweenMax.to(contactAfter,0.7,{autoAlpha:0, scale:0.1})
  })



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

  function menuOpen(){
    TweenMax.to(shell, 0.6, {scale:0.8,rotationY:-40, x:'15%'})
    TweenMax.staggerTo(menuItem, 2, {x:0, y:0,autoAlpha:1, ease:Elastic.easeOut, delay:0.5}, 0.05)
    TweenMax.set(shell,{className:'+=tempPointerClass'})
    TweenMax.set($('.contact'),{className:'+=noPointers'})

    $(".tempPointerClass").on('click', function(){
      menuClose();
      menuCounter = 1;
    })

  }//end function menuOpen()
  function menuClose(){
    TweenMax.to(shell, 0.6, {scale:1,rotationY:0, x:'0%'})
    TweenMax.to(menuItem, 0.6, {x:-30,autoAlpha:0})
    TweenMax.set(shell,{className:'-=tempPointerClass'})
    TweenMax.set($('.contact'),{className:'-=noPointers'})
  }//end function menuClose()

  $('.menuPortfolio').on('click', function(){
    TweenMax.to(shell, 1, {scrollTo:{y:portfolio}, ease:Power2.easeOut});
  })
  $('.menuServices').on('click', function(){
    TweenMax.to(shell, 1, {scrollTo:{y:services}, ease:Power2.easeOut});
  })
  $('.menuContact').on('click', function(){
    TweenMax.to(shell, 1, {scrollTo:{y:footer}, ease:Power2.easeOut});
  })

*/


})//end main.js
