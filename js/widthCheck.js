function removeStuff(){
  if (document.documentElement.clientWidth <= 815) {
    console.log("the clientwidth is less than 815; 30934u23049u23094u23094u20394u23");
    $(".banner iframe").removeAttr("src").css('display', 'none');
    $(".replacementDeer").css('display', 'block');
    $(".contact iframe").removeAttr("src").css('display', 'none');
    $(".contact #container").css('display', 'block');
  } else{
    console.log("the clientwidth is greater than 815");
  }
}

removeStuff();

/*
//document.getElementsByTagName("H1")[0].removeAttribute("class");
function removeStuff(){
  if (document.documentElement.clientWidth <= 815) {
    console.log("the clientwidth is less than 815");
    document.getElementById("deerIframe").removeAttribute("src").css('display','none');
    document.getElementsByClassName("replacementDeer").css('display','block');
    document.getElementById("birdsIframe").removeAttribute("src").css('display','none');
    document.getElementById("container").css('display','none');

  } else{
    console.log("the clientwidth is greater than 815");
    return;
  }
}

removeStuff();
*/
