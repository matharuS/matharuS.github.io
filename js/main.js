$(document).ready(function(){
  $(".panel").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".panel").css({height:$(window).innerHeight()})
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
    TweenMax.to(line1,0.5, {rotation:'45deg', y:9, backgroundColor:'#ffffff'})
    TweenMax.to(line2,0.5, {width:0, backgroundColor:'#ffffff'})
    TweenMax.to(line3,0.5, {rotation:'-45deg', y:-9, backgroundColor:'#ffffff'})
    TweenMax.to(menuAfter, 0.5, {left:0})
    TweenMax.staggerTo(menuItem, 0.6, {scale:1, opacity:1, delay:0.8, ease:Elastic.easeOut}, 0.05)
  }//end menuOpen

  function menuClose(){
    TweenMax.to(line1, 0.5, {rotation:'0', y:0, backgroundColor:'#000000'})
    TweenMax.to(line2, 0.5, {width:'40px', backgroundColor:'#000000'})
    TweenMax.to(line3, 0.5, {rotation:'0', y:0, backgroundColor:'#000000'})
    TweenMax.to(menuAfter, 0.5, {left:-300})
  }

  $('.menuItem').on('click', function(){
    TweenMax.staggerTo(menuItem, 0.5, {opacity:0, scale:0.5, ease:Back.easeIn}, 0.1)
    setTimeout(menuClose, 1000);
  })

  $('.menuPortfolio').on('click', function(){
    TweenMax.to(window, 1, {scrollTo:{y:$('.three').position().top}, ease:Power2.easeOut, delay:1.5})
  })
  $('.menuServices').on('click', function(){
    TweenMax.to(window, 1, {scrollTo:{y:$('.services').position().top}, ease:Power2.easeOut, delay:1.5})
  })
  $('.menuLab').on('click', function(){
    TweenMax.to(window, 1, {scrollTo:{y:$('.lab').position().top}, ease:Power2.easeOut, delay:1.5})
  })
  $('.menuContact').on('click', function(){
    TweenMax.to(window, 1, {scrollTo:{y:$('.footer').position().top}, ease:Power2.easeOut, delay:1.5})
  })

var bannerTL = new TimelineMax(),
    menuOpenTL = new TimelineMax(),
    menuCloseTL = new TimelineMax(),
    menuTL = new TimelineMax(),
    contactTL = new TimelineMax(),
    bannerText = $('.bannerBigText'),
    bannerP = $('.bannerP'),
    words = $('.words p'),
    line1 = $('.l1'),
    line2 = $('.l2'),
    line3 = $('.l3'),
    shell = $('#shell'),
    footer = $('.footer'),
    firstLine = $('.fFirst'),
    shortLine = $('.fShort'),
    mediumLine = $('.fMed'),
    longLine = $('.fLong'),
    footerWords = $('.footWords'),
    menuAfter = $('.menuAfter'),
    menuHome = $('.menuHome'),
    menuPortfolio = $('.menuPortfolio'),
    menuServices = $('.menuServices'),
    menuLab = $('.menuLab'),
    menuContact = $('.menuContact'),
    menuItem = $('.menuItem'),
    serviceItem = $('.serviceItem'),
    contact = $('.contact'),
    contactAfter = $('.contactAfter'),
    contactForm = $('.contactAfter form'),
    contactExit = $('.exit'),
    footerDeer = $('.footerDeer'),
    legal = $('.legal'),
    social = $('.social');

  bannerTL
    .from(bannerText, 1, {y:-100, opacity:0, ease:Power2.easeOu})
    .from(bannerP, 0.5, {y:-20, opacity:0, ease:Power2.easeOu});


  $('.contact').on('click', function(){
    contactTL
      .to(contactAfter, 1, {scale:1 })
      .to(contactAfter, 1, {width: 350})
      .to(contactForm, 1, {opacity:1})
  })

  $('.exit').on('click', function(){
    contactTL
    .to(contactForm, 1, {opacity:0})
    .to(contactAfter, 1, {width: 5})
    .to(contactAfter, 1, {scale:0 })
  })

  var sect2Text = new Waypoint({
    element:$('.two'),
    handler: function(){
      TweenMax.to(words, 1.5, { marginTop:0,opacity:1, ease:Power2.easeInOut});
    },
    offset: '20%'
  })

  var servicesAnimation = new Waypoint({
    element:$('.serviceItem'),
    handler: function(){
      TweenMax.staggerTo(serviceItem, 2, {scale:1, opacity:1,  ease:Elastic.easeOut}, 0.05)
    },
    offset: '40%'
  })//end

  var footerAnimation = new Waypoint({
    element:footer,
    handler: function(){
      TweenMax.to(footerDeer,1,{opacity:1})
      TweenMax.to(shortLine, 1, {scale: 1, delay:1})
      TweenMax.to(mediumLine, 1, {scale: 1, delay:1})
      TweenMax.to(longLine, 1, {scale: 1, delay:1})
      TweenMax.to(footerWords, 1, {marginTop:0, opacity:1, delay:1})
      TweenMax.to(contact, 0.3, {opacity:1, delay:2})
      TweenMax.to(social, 0.3, {opacity:1, delay:2.1})
      TweenMax.to(legal, 0.3, {opacity:0.5, delay:2.2})
    },
    offset: '20%'
  })
})// js end
