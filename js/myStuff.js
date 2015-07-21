$(document).ready(function(){
      console.log("im ready");

      $('.techTotal').on('click', function(){
          $('.technical').velocity("scroll",{duration: 300, delay:0})
          $('.technical').velocity({height:"100%"}, {duration: 300, delay:0})

          $('.techTotal').velocity({marginTop:"0"},{delay:0, duration: 300})
          $('.techTotal').velocity({height:"100%", width:"100%"}, {duration: 300, delay: 0})
          $('.techTotal').addClass('noClick');

          $('.techCont').css('display', 'block');


          $('.exit').css('display', 'block');





      })

      $('.exit').on('click', function(){
        $('.technical').velocity({height:"150px"}, {duration: 300, delay:0})
        $('.techTotal').velocity({marginTop:"25px", height:"100px", width:"300px"},{duration: 300,delay:0})
        $('.techTotal').removeClass('noClick');
        $('.techCont').css('display', 'none');
        $('.exit').css('display', 'none');
      })

      //page scroll animations
      $('#aboutTop').on('click', function(){
        $('.about').velocity("scroll", {duration: 1000, easing:"easeOutCubic"})
      })
      $('#aboutBottom').on('click', function(){
        $('.about').velocity("scroll", {duration: 1000, easing:"easeOutCubic"})
      })
      $('.logo').on('click', function(){
        $('.banner').velocity("scroll", {duration: 1000, easing:"easeOutCubic"})
      })


    /* hide/show design content START*/



    $('.desBtn2').on('click', function(){
      $('.desBtn2Cont').css('display', 'block');

      $('.desBtn3Cont').css('display', 'none');
      $('.desBtn4Cont').css('display', 'none');


      $('.pBtn2').addClass('yesOp');
      $('.pBtn3').removeClass('yesOp');
      $('.pBtn4').removeClass('yesOp');

    })

    $('.desBtn3').on('click', function(){
      $('.desBtn3Cont').css('display', 'block');
      $('.desBtn2Cont').css('display', 'none');
      $('.desBtn4Cont').css('display', 'none');

      $('.pBtn2').removeClass('yesOp');
      $('.pBtn3').addClass('yesOp');
      $('.pBtn4').removeClass('yesOp');

    })

    $('.desBtn4').on('click', function(){
      $('.desBtn4Cont').css('display', 'block');
      $('.desBtn2Cont').css('display', 'none');
      $('.desBtn3Cont').css('display', 'none');

      $('.pBtn2').removeClass('yesOp');
      $('.pBtn3').removeClass('yesOp');
      $('.pBtn4').addClass('yesOp');

    })


    /* hide/show design content END*/

      /*  START about animations  */
        $('.designButton1').on('click', function(){
          $('.oneFrontBox').velocity({translateX:"-100%"},{duration:3000})
          $('.oneBackBox').velocity({translateX:"-100%"},{duration:3000});
        })

      /*  END about animations  */

      $(".banner").css({height:$(window).innerHeight()})
        $(window).resize(function(){
            $(".banner").css({height:$(window).innerHeight()})
        });




          $(".designer").css({height:$(window).innerHeight()})
            $(window).resize(function(){
                $(".designer").css({height:$(window).innerHeight()})
            });



      /* this below is for page js for classie for the contact form*/
      (function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();

      /* End of page classie.js*/



      /* START responsive icon animation*/
      function responsiveAnimation(){
        $('#browserBox').velocity({translateX:"30px", translateY:"10px", height:"130px", width:"160px", strokeWidth:"3px"},{duration:1000})
        $('#navBox').velocity({translateX:"80px",translateY:"5px",height:"15px", width:"35px" },{duration:1000})
        $('#navLine1').velocity({translateX:"-53px",translateY:"5px"},{duration:1000})
        $('#navLine2').velocity({translateX:"-53px",translateY:"5px"},{duration:1000})
        $('#navLine3').velocity({translateX:"-5px",translateY:"5px"},{duration:1000})
        $('#navLine4').velocity({translateX:"-5px",translateY:"5px"},{duration:1000})
        $('#backBox').velocity({translateX:"25px",translateY:"5px", height:"40px", width:"140px"},{duration:1000})
        $('#textLine1').velocity({translateX:"20px",translateY:"0px"},{duration:1000})
        $('#textLine2').velocity({translateX:"20px",translateY:"-4px"},{duration:1000})
        $('#textLine3').velocity({translateX:"20px",translateY:"-5px"},{duration:1000})
        $('#textLine4').velocity({translateX:"20px",translateY:"-8px"},{duration:1000})
        $('#textLineImage').velocity({height:"30px", width:"30px"},{duration:1000})
        $('#circle1').velocity({translateX:"20px",translateY:"-22px", r:"15"},{duration:1000})
        $('#circle2').velocity({translateX:"5px",translateY:"-22px", r:"15"},{duration:1000})
        $('#circle3').velocity({translateX:"-10px",translateY:"-22px", r:"15"},{duration:1000})

        $('#browserBox').velocity({translateX:"60px", translateY:"10px", height:"160px", width:"100px" , strokeWidth:"2px"},{duration:1000, delay:1000})
        $('#navBox').velocity({translateX:"55px",translateY:"5px",height:"15px", width:"25px" },{duration:1000, delay:1000})
        $('#navLine1').velocity({translateX:"45px",translateY:"0px", height:"0px", stroke:"black", fill:"black", width:"0px"},{duration:1000, delay:1000})
        $('#navLine2').velocity({translateX:"20px",translateY:"0px", height:"0px", stroke:"black", fill:"black", width:"0px"},{duration:1000, delay:1000})
        $('#navLine3').velocity({translateX:"0px", translateY:"0px", height:"0px", stroke:"black", fill:"black", width:"0px"},{duration:1000, delay:1000})
        $('#navLine4').velocity({translateX:"-30px",translateY:"-1px", height:"10px", width:"10px", strokeWidth:"2px", stroke:"black"},{duration:1000, delay:1000})
        $('#backBox').velocity({translateX:"90",height:"0px", width:"0px"},{duration:1000, delay:1000})
        $('#textLine1').velocity({translateX:"50px",translateY:"0px", stroke:"white", fill:"white"},{duration:1000, delay:1000})
        $('#textLine2').velocity({translateX:"50px",translateY:"-4px", stroke:"white", fill:"white"},{duration:1000, delay:1000})
        $('#textLine3').velocity({translateX:"50px",translateY:"-5px", stroke:"white", fill:"white"},{duration:1000, delay:1000})
        $('#textLine4').velocity({translateX:"50px",translateY:"-8px", stroke:"white", fill:"white"},{duration:1000, delay:1000})
        $('#textLineImage').velocity({translateX:"-75px",translateY:"-10px",height:"50px", width:"80px", strokeWidth:"1px"},{duration:1000, delay:1000})
        $('#circle1').velocity({translateX:"40px", translateY:"-18px", r:"14", strokeWidth:"1px"},{duration:1000, delay:1000})
        $('#circle2').velocity({translateX:"25px", translateY:"-18px", r:"14", strokeWidth:"1px"},{duration:1000, delay:1000})
        $('#circle3').velocity({translateX:"-50px", translateY:"12px", r:"14", strokeWidth:"1px"},{duration:1000, delay:1000})

        $('#browserBox').velocity({translateX:"0", translateY:"0", height:"170px", width:"210px", strokeWidth:"4px"},{duration:1000, delay:1000})
        $('#navBox').velocity({translateX:"0", translateY:"0", height:"20px", width:"40px"},{duration:1000, delay:1000})
        $('#navLine1').velocity({translateX:"0", translateY:"0", height:"5px", width:"15px"},{duration:1000, delay:1000})
        $('#navLine2').velocity({translateX:"0", translateY:"0", height:"5px", width:"15px"},{duration:1000, delay:1000})
        $('#navLine3').velocity({translateX:"0", translateY:"0", height:"5px", width:"15px"},{duration:1000, delay:1000})
        $('#navLine4').velocity({translateX:"0", translateY:"0", height:"5px", width:"15px"},{duration:1000, delay:1000})
        $('#backBox').velocity({translateX:"0", translateY:"0",height:"60px", width:"180px"},{duration:1000, delay:1000})
        $('#textLineImage').velocity({translateX:"0", translateY:"0",height:"40", width:"40px", stroke:"#3490B5"},{duration: 1000, delay:1000})
        $('#textLine1').velocity({translateX:"0", translateY:"0", height:"2.5px", width:"60px", stroke:"lightyellow"},{duration: 1000, delay:1000})
        $('#textLine2').velocity({translateX:"0", translateY:"0", height:"2.5px", width:"40px", stroke:"lightyellow"},{duration: 1000, delay:1000})
        $('#textLine3').velocity({translateX:"0", translateY:"0", height:"2.5px", width:"70px", stroke:"lightyellow"},{duration: 1000, delay:1000})
        $('#textLine4').velocity({translateX:"0", translateY:"0", height:"2.5px", width:"30px", stroke:"lightyellow"},{duration: 1000, delay:1000})
        $('#circle1').velocity({translateX:"0", translateY:"0",cx:"55", cy:"140", r:"20"},{duration:1000, delay:1000})
        $('#circle2').velocity({translateX:"0", translateY:"0",cx:"110", cy:"140", r:"20"},{duration:1000, delay:1000})
        $('#circle3').velocity({translateX:"0", translateY:"0",cx:"165", cy:"140", r:"20"},{duration:1000, delay:1000})

      };
      //responsiveAnimation();
      $('#responsiveSVG').on('click', function(){
        responsiveAnimation();
      })
      $(window).on('scroll', function() {
          var y_scroll_pos = window.pageYOffset;
          var scroll_pos_test = 150;             // set to whatever you want it to be

          if(y_scroll_pos > scroll_pos_test) {
              responsiveAnimation();
          }
      });


      /* END responsive icon animation*/

      function logo(){
        $('#line1')
          .velocity({ 'stroke-dasharray':  38.27531814575195 }, 0)
          .velocity({ 'stroke-dashoffset':  38.27531814575195 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 0 });

        $('#line2')
          .velocity({ 'stroke-dasharray':  34.01470184326172 }, 0)
          .velocity({ 'stroke-dashoffset':  34.01470184326172 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 400 });

        $('#line3')
          .velocity({ 'stroke-dasharray':  34.67708206176758 }, 0)
          .velocity({ 'stroke-dashoffset':  34.67708206176758 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 600 });

        $('#line4')
          .velocity({ 'stroke-dasharray':  16 }, 0)
          .velocity({ 'stroke-dashoffset':  16 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 900 });

        $('#line5')
          .velocity({ 'stroke-dasharray':  34.98571014404297 }, 0)
          .velocity({ 'stroke-dashoffset':  34.98571014404297 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 1200 });

        $('#line6')
          .velocity({ 'stroke-dasharray':  17 }, 0)
          .velocity({ 'stroke-dashoffset':  17 }, 0)
          .velocity({ 'stroke-dashoffset': 0 }, { duration: 300, delay: 1500 });
        }


      logo();



    })