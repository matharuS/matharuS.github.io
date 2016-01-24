$(document).ready(function(){

  console.log('ready');

  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });

  function interpretation(){
  		$('#shell,.bottomHold ').velocity({opacity:0},{duration:0, delay:0})
      $('body').velocity({backgroundColor:'#5E9DBA'},{duration:0, delay:0})
  		$('.interpretation').velocity("scroll",{duration:0,delay:0, offset:-400})
  		$('.interpretation').velocity({height:'220px', width:'300px'},{duration:600,delay:200 })
  		$('.interpretation .content').velocity("transition.expandIn",{duration:400,delay:600 })
  	}

  	function dissolve(){
  			$('#shell,.bottomHold ').velocity({opacity:1},{duration:1000, delay:0})
        $('body').velocity({backgroundColor:'#ffffff'},{duration:0, delay:0})
  			$('.interpretation').velocity({height:'0', width:'0'},{display:'none'},{duration:400,delay:0, queue:false})
  			$('.interpretation .content').velocity("transition.expandOut",{duration:300,delay:0, queue:false})
  	}

  	$('.interpretation').on('click',function(){
  		console.log('clicked')
  		dissolve();
  	})

  	interpretation();



$('.exit').on('mouseenter', function(){
  $(this).velocity({borderBottomLeftRadius:'25px'},{duration: 500,delay:0})
})
$('.exit').on('mouseleave', function(){
  $(this).velocity({borderBottomLeftRadius:'0'},{duration: 500,delay:0})
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
      $('.menu').velocity({height:'200px',width:'155px'},{duration:300, delay:0})
      $('.l2').velocity({width:'0px'},{duration:300, delay:0})
      $('.l1').velocity({rotateZ:'45deg', translateY:'5',translateX:'5px'},{duration:300, delay:0})
      $('.l3').velocity({rotateZ:'-45deg', translateY:'-5',translateX:'5px'},{duration:300, delay:0})
      $('.menu .ul').velocity("transition.fadeIn",{duration:300, delay:0})
      $('.menu .ul li').velocity("transition.slideRightIn",{stagger: 50,duration:300, delay:0})

    }
    function menuClose(){
      $('.menu').velocity({height:'40px',width:'40px'},{duration:300, delay:0})
      $('.l2').velocity({width:'20px'},{duration:300, delay:0})
      $('.l1').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:300, delay:0})
      $('.l3').velocity({rotateZ:'0', translateY:'0',translateX:'0'},{duration:300, delay:0})
      $('.menu .ul').velocity("transition.fadeOut",{duration:100, delay:0})
    }

  ///////////////// mainMenu END /////////////////
  $('#shell, #Container').on('click', function(){
    businessClose();
    businessCounter = 1;

    sortClose();
    sortCounter = 1;
    console.log('everything should go down');

  })
  ///////////////// businessMenu START /////////////////
    var businessCounter = 1;
    $('#businessType, .businessTriangle').on("click", function(){
    	businessCounter++;
    		if(businessCounter%2=== 0){
    			businessOpen();
    		 }else if(businessCounter%2===1){
    			businessClose();
    		}
    })

    function businessOpen(){
      $('.businessOptions').velocity("transition.slideUpIn", {duration: 500,stagger:0})
      $('.businessTriangle').velocity({rotateZ:'180deg', fill:'#5E9DBA'}, {duration: 300, delay: 0})

    }
    function businessClose(){
      $('.businessOptions').velocity("transition.perspectiveLeftOut",{duration: 300})
      $('.businessTriangle').velocity({rotateZ:'0', fill:'#ffffff'}, {duration: 300, delay: 0})
    }

  ///////////////// businessMenu END /////////////////
  ///////////////// sortMenu START /////////////////
    var sortCounter = 1;
    $('#sort, .sortTriangle').on("click", function(){
    	sortCounter++;
    		if(sortCounter%2=== 0){
    			sortOpen();
    		 }else if(sortCounter%2===1){
    			sortClose();
    		}
    })

    function sortOpen(){
      $('.sortOptions').velocity("transition.slideUpIn", {duration: 500,stagger:0})
      $('.sortTriangle').velocity({rotateZ:'180deg', fill:'#5E9DBA'}, {duration: 300, delay: 0})
    }
    function sortClose(){
      $('.sortOptions').velocity("transition.perspectiveRightOut",{duration: 300})
      $('.sortTriangle').velocity({rotateZ:'0', fill:'#ffffff'}, {duration: 300, delay: 0})
    }

  ///////////////// sortMenu END /////////////////

$('.sortOptions .sort').on('click', function(){
  $('#Container').velocity("scroll", {container: $('#shell'), duration: 600, offset:-250})
})
$('.businessOptions input').on('click', function(){
  $('#Container').velocity("scroll", {container: $('#shell'), duration: 600, offset:-250})
})

var itemImg = document.getElementsByClassName("itemImg");
   for(var i=0;i<itemImg.length;i++){
       itemImg[i].addEventListener('mousedown', open, false);
   }
var exit = document.getElementsByClassName("exit");
  for(var i=0;i<exit.length;i++){
      exit[i].addEventListener('mousedown', close, false);
  }

function open(e){
  var hgh = $(window).innerWidth();
  console.log(hgh);
  if(hgh < 1000){
    $('#shell').addClass('hideBorder')
    var a = $(this);
    a.siblings('.after').velocity("transition.expandIn",{height:'100%',width:'100%',zIndex:'1000000000000000'},{duration:1000,delay:0})
    $('.bottomHold').velocity({opacity:'0'},{duration:500, delay:0})
    $('.after').addClass('activate');
    $(' #shell, #Container, .after, .mix, .mainNav, .logo, .businessOptions, .sortOptions, .search, .triangle').addClass('noPoint')
    e.stopPropagation()
  } else if(hgh > 1000){
    var a = $(this);
    a.siblings('.after').velocity("transition.expandIn",{height:'100%',width:'100%',zIndex:'1000000000000000'},{duration:1000,delay:0})
    $('.bottomHold').velocity({opacity:'0'},{duration:500, delay:0})
    $('.after').addClass('activate');
    $(' #shell, #Container, .after, .mix, .mainNav, .logo, .businessOptions, .sortOptions, .search, .triangle').addClass('noPoint')
    e.stopPropagation()
  }
}//end open()

function close(e){
  $('.activate').velocity("transition.expandOut", {duration:500, delay:0})
  $(' #shell, #Container, .after, .mix, .mainNav, .logo, .businessOptions, .sortOptions, .search, .triangle').removeClass('noPoint')
  $('#shell').removeClass('hideBorder')
  $('.bottomHold').velocity({opacity:'1'},{duration:200, delay:0})
  e.stopPropagation()
}

// To keep our code clean and modular, all custom functionality will be contained inside a single object literal called "multiFilter".
var multiFilter = {

  // Declare any variables we will need as properties of the object

  $filterGroups: null,
  $filterUi: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',

  // The "init" method will run on document ready and cache any jQuery objects we will need.

  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "checkboxFilter" object so that we can share methods and properties between all parts of the object.

    self.$filterUi = $('.filters');
    self.$filterGroups = $('.filter-group');
    self.$reset = $('#Reset');
    self.$container = $('#Container');


    self.$filterGroups.each(function(){
      self.groups.push({
        $inputs: $(this).find('input'),
        active: [],
		    tracker: false
      });
    });


    self.bindHandlers();
  },

  // The "bindHandlers" method will listen for whenever a form value changes.

  bindHandlers: function(){
    var self = this,
        typingDelay = 300,
        typingTimeout = -1,
        resetTimer = function() {
          clearTimeout(typingTimeout);

          typingTimeout = setTimeout(function() {
            self.parseFilters();
          }, typingDelay);
        };

    self.$filterGroups
      .filter('.checkboxes')
    	.on('change', function() {
      	self.parseFilters();
    	});

    self.$filterGroups
      .filter('.search')
      .on('keyup change', resetTimer);

    self.$reset.on('click', function(e){
      e.preventDefault();
      self.$filterUi[0].reset();
      self.$filterUi.find('input[type="text"]').val('');
      self.parseFilters();
    });

  },

  // The parseFilters method checks which filters are active in each group:

  parseFilters: function(){
    var self = this;

    // loop through each filter group and add active filters to arrays

    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = []; // reset arrays
      group.$inputs.each(function(){
        var searchTerm = '',
       			$input = $(this),
            minimumLength = 3;

        if ($input.is(':checked')) {
          group.active.push(this.value);
        }

        if ($input.is('[type="text"]') && this.value.length >= minimumLength) {
          searchTerm = this.value
            .trim()
            .toLowerCase()
            .replace(' ', '-');

          group.active[0] = '[class*="' + searchTerm + '"]';
        }
      });
	    group.active.length && (group.tracker = 0);
    }

    self.concatenate();
  },

  // The "concatenate" method will crawl through each group, concatenating filters as desired:

  concatenate: function(){
    var self = this,
		  cache = '',
		  crawled = false,
		  checkTrackers = function(){
        var done = 0;

        for(var i = 0, group; group = self.groups[i]; i++){
          (group.tracker === false) && done++;
        }

        return (done < self.groups.length);
      },
      crawl = function(){
        for(var i = 0, group; group = self.groups[i]; i++){
          group.active[group.tracker] && (cache += group.active[group.tracker]);

          if(i === self.groups.length - 1){
            self.outputArray.push(cache);
            cache = '';
            updateTrackers();
          }
        }
      },
      updateTrackers = function(){
        for(var i = self.groups.length - 1; i > -1; i--){
          var group = self.groups[i];

          if(group.active[group.tracker + 1]){
            group.tracker++;
            break;
          } else if(i > 0){
            group.tracker && (group.tracker = 0);
          } else {
            crawled = true;
          }
        }
      };

    self.outputArray = []; // reset output array

	  do{
		  crawl();
	  }
	  while(!crawled && checkTrackers());

    self.outputString = self.outputArray.join();

    // If the output string is empty, show all rather than none:

    !self.outputString.length && (self.outputString = 'all');

    console.log(self.outputString);

    // ^ we can check the console here to take a look at the filter string that is produced

    // Send the output string to MixItUp via the 'filter' method:

	  if(self.$container.mixItUp('isLoaded')){
    	self.$container.mixItUp('filter', self.outputString);
	  }
  }
};//end multiFilter

// On document ready, initialise our code.

$(function(){

  // Initialize multiFilter code
  multiFilter.init();

  // Instantiate MixItUp

  $('#Container').mixItUp({

    controls: {
      enable: true // we won't be needing these
    },

    animation: {
      //easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      //queueLimit: 3,
      duration: 600
    }
  });
});

})//end document.ready
