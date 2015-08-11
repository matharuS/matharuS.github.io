$(document).ready(function(){
  console.log("im ready");
  //calulating svg line length

  function popUP(){

    $('.leave').on('click', function(){
      $('.alertness').css('display','none');
      $('.s1').velocity({opacity:"1"})
      $('.s2').velocity({opacity:"1"})
      $('.s3').velocity({opacity:"1"})
      $('.s4').velocity({opacity:"1"})
      $('footer').velocity({opacity:"1"})

      logoAnimation();
      bannerFade();
    })
  }
  popUP();

  function logoAnimation(){
    $('#top')
      .velocity({ 'stroke-dasharray': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 0 }, { duration: 800, delay: 400},"easeInQuart");
    $('#bottom')
      .velocity({ 'stroke-dasharray': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 0 }, { duration: 800, delay: 400},"easeInQuart");
    $('#left')
      .velocity({ 'stroke-dasharray': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 0 }, { duration: 800, delay: 400},"easeInQuart");
    $('#right')
      .velocity({ 'stroke-dasharray': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 30 }, 0)
      .velocity({ 'stroke-dashoffset': 0 }, { duration: 800, delay: 400},"easeInQuart");
  }


  function bannerFade(){
    $('.b1').velocity({opacity:"0"}, {duration:2000, delay:5000})
    $('.b2').velocity({opacity:"1"}, {duration:2000, delay:5000})
    $('.b2').velocity({opacity:"0"}, {duration:2000, delay:10000})
    $('.b3').velocity({opacity:"1"}, {duration:2000, delay:10000})
    //$('.h1Hold h1').velocity({color:"#fff"},{duration:2000, delay:2000})


  }



  $(".s1").css({height:$(window).innerHeight()})
    $(window).resize(function(){
        $(".s1").css({height:$(window).innerHeight()})
    });

    $('.li1').on('click', function(){
      $('.li1').velocity({height:"100%", width:"100%"},{duration: 1000})
      $('.li1 .liIMG').velocity({height:"0", width:"0"},{duration:1000})
      $('.li1 .after').velocity({opacity:"1"},{duration:1000})
      $('.li1 .liP').velocity({float:"left", marginLeft:"2.5%", width:"100px", top:"10px"},{duration:1000})
      $('.li1 .exit1').velocity({opacity:"1"},{duration:1000})
      $('.li1').addClass('noPoint');
      $('.li1 .after').addClass('oScroll');
        $('.li2').velocity({height:"0", width:"0"},{duration:1000})
        $('.li3').velocity({height:"0", width:"0"},{duration:1000})
        $('.li4').velocity({height:"0", width:"0"},{duration:1000})
        $('.exclusive').velocity({ opacity:"0"},{duration:1000})

      $('.imgRotate').velocity({rotateZ: "90deg"},{duration:2000, delay:3000})
      /*
      setTimeout(function(){
          $('.imgRotate').velocity({ marginTop:"-20%"},{queue: false,duration:1000});
        },2000)
      */
      $('.r1').velocity({opacity:"0"},{duration:2000, delay:3000})
      $('.r2').velocity({opacity:"1"},{duration:2000, delay:3000})
    })
    $('.exit1').on('click', function(){
      $('.li1').velocity({height:"50%", width:"50%"},{duration: 1000, delay:0})
      $('.li1 .liIMG').velocity({height:"100px", width:"120px"},{duration:1000, delay:0})
      $('.li1 .after').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li1 .liP').velocity({float:"none", marginLeft:"0",  width:"100%", top:"60%", bottom: "40%"},{duration:1000, delay:0})
      $('.li1 .exit1').velocity({opacity:"0"},{duration:1000, delay:0})

      $('.li1').removeClass('noPoint');
      $('.li1 .after').removeClass('oScroll');
      $('.li2').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li3').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li4').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.exclusive').velocity({ opacity:"1"},{duration:1000, delay:0})

      $('.imgRotate').velocity({rotateZ: "0deg"},{duration:1000, delay:0})
      $('.r1').velocity({opacity:"1"},{duration:100, delay:0})
      $('.r2').velocity({opacity:"0"},{duration:100, delay:0})
      return false;
    })

    ////////////////

    $('.li2').on('click', function(){
      $('.li2').velocity({height:"100%", width:"100%"},{duration: 1000})
      $('.li2 .liIMG').velocity({height:"0", width:"0"},{duration:1000})
      $('.li2 .after').velocity({opacity:"1"},{duration:1000})
      $('.li2 .liP').velocity({float:"left", marginLeft:"2.5%", width:"100px", top:"10px"},{duration:1000})
      $('.li2 .exit2').velocity({opacity:"1"},{duration:1000})
      $('.li2').addClass('noPoint');
      $('.li2 .after').addClass('oScroll');
        $('.li1').velocity({height:"0", width:"0"},{duration:1000})
        $('.li3').velocity({height:"0", width:"0"},{duration:1000})
        $('.li4').velocity({height:"0", width:"0"},{duration:1000})
        $('.exclusive').velocity({ opacity:"0"},{duration:1000})

    })
    $('.exit2').on('click', function(){
      $('.li2').velocity({height:"50%", width:"50%"},{duration: 1000, delay:0})
      $('.li2 .liIMG').velocity({height:"80px", width:"130px"},{duration:1000, delay:0})
      $('.li2 .after').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li2 .liP').velocity({float:"none", marginLeft:"0", width:"100%", top:"60%", bottom: "40%"},{duration:1000, delay:0})
      $('.li2 .exit2').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li2').removeClass('noPoint');
      $('.li1 .after').removeClass('oScroll');
      $('.li1').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li3').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li4').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.exclusive').velocity({ opacity:"1"},{duration:1000, delay:0})
      return false;
    })

    ////////////////

    $('.li3').on('click', function(){
      $('.li3').velocity({height:"100%", width:"100%"},{duration: 1000})
      $('.li3 .liIMG').velocity({height:"0", width:"0"},{duration:1000})
      $('.li3 .after').velocity({opacity:"1"},{duration:1000})
      $('.li3 .liP').velocity({float:"left", marginLeft:"2.5%", width:"100px", top:"10px"},{duration:1000})
      $('.li3 .exit3').velocity({opacity:"1"},{duration:1000})
      $('.li3').addClass('noPoint');

        $('.li1').velocity({height:"0", width:"0"},{duration:1000})
        $('.li2').velocity({height:"0", width:"0"},{duration:1000})
        $('.li4').velocity({height:"0", width:"0"},{duration:1000})
        $('.exclusive').velocity({ opacity:"0"},{duration:1000})

    })
    $('.exit3').on('click', function(){
      $('.li3').velocity({height:"50%", width:"50%"},{duration: 1000, delay:0})
      $('.li3 .liIMG').velocity({height:"100px", width:"120px"},{duration:1000, delay:0})
      $('.li3 .after').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li3 .liP').velocity({float:"none",marginLeft:"0",  width:"100%", top:"60%", bottom: "40%"},{duration:1000, delay:0})
      $('.li3 .exit3').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li3').removeClass('noPoint');
      $('.li1').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li2').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li4').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.exclusive').velocity({ opacity:"1"},{duration:1000, delay:0})
      return false;
    })

    ////////////////

    $('.li4').on('click', function(){
      $('.li4').velocity({height:"100%", width:"100%"},{duration: 1000})
      $('.li4 .liIMG').velocity({height:"0", width:"0"},{duration:1000})
      $('.li4 .after').velocity({opacity:"1"},{duration:1000})
      $('.li4 .liP').velocity({float:"left", marginLeft:"2.5%", width:"100px", top:"10px"},{duration:1000})
      $('.li4 .exit4').velocity({opacity:"1"},{duration:1000})
      $('.li4').addClass('noPoint');

        $('.li1').velocity({height:"0", width:"0"},{duration:1000})
        $('.li3').velocity({height:"0", width:"0"},{duration:1000})
        $('.li2').velocity({height:"0", width:"0"},{duration:1000})
        $('.exclusive').velocity({ opacity:"0"},{duration:1000})

    })
    $('.exit4').on('click', function(){
      $('.li4').velocity({height:"50%", width:"50%"},{duration: 1000, delay:0})
      $('.li4 .liIMG').velocity({height:"100px", width:"100px"},{duration:1000, delay:0})
      $('.li4 .after').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li4 .liP').velocity({float:"none",marginLeft:"0",  width:"100%", top:"60%", bottom: "40%"},{duration:1000, delay:0})
      $('.li4 .exit4').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.li4').removeClass('noPoint');

      $('.li1').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li3').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li2').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.exclusive').velocity({ opacity:"1"},{duration:1000, delay:0})
      return false;
    })

    ////////////////
    ////////////////

    $('.exclusive').on('click', function(){
      $('.exclusive').velocity({height:"100%", width:"100%", borderRadius:"0"},{duration: 1000})
      $('.exclusive .afterE').velocity({opacity:"1"},{duration:1000})

      $('.titleP').velocity({paddingTop:"17px"},{duration:1000})
      $('.exclusive .exitE').velocity({opacity:"1"},{duration:1000})
      $('.exclusive').addClass('noPoint');

        $('.li1').velocity({height:"0", width:"0"},{duration:1000})
        $('.li2').velocity({height:"0", width:"0"},{duration:1000})
        $('.li3').velocity({height:"0", width:"0"},{duration:1000})
        $('.li4').velocity({height:"0", width:"0"},{duration:1000})

    })
    $('.exitE').on('click', function(){
      $('.exclusive').velocity({ height:"150px", width:"150px", borderRadius:"100%"},{duration:1000, delay:0})
      $('.exclusive .afterE').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.titleP').velocity({paddingTop:"57px"},{duration:1000, delay:0})
      $('.exclusive .exitE').velocity({opacity:"0"},{duration:1000, delay:0})
      $('.exclusive').removeClass('noPoint');

      $('.li1').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li3').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li2').velocity({height:"50%", width:"50%"},{duration:1000, delay:0})
      $('.li4').velocity({height:"50%", width:"50%"},{duration: 1000, delay:0})
      return false;
    })
})
