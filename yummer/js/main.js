$(document).ready(function(){
  $(".body").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".body").css({height:$(window).innerHeight()})
  });

  function interpretation(){

		//$('.tempShell').velocity({opacity:0},{duration:0, delay:0})

		$('.s1').velocity({opacity:0},{duration:0, delay:0})
		$('.interpretation').velocity("scroll",{duration:0,delay:0, offset:-400})
		$('.interpretation').velocity({height:'280px', width:'300px'},{duration:600,delay:200 })
		$('.interpretation .content').velocity("transition.expandIn",{duration:400,delay:600 })
	}

	function dissolve(){
			$('.s1').velocity({opacity:1},{duration:1000, delay:0})
			$('.interpretation').velocity({height:'0', width:'0'},{display:'none'},{duration:400,delay:0, queue:false})
			$('.interpretation .content').velocity("transition.expandOut",{duration:300,delay:0, queue:false})
	}

	$('.interpretation').on('click',function(){
		console.log('clicked')
		dissolve();
	})

	interpretation();

})
