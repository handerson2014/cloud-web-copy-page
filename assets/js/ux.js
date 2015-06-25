
/* TypeKit
**********************/
try{Typekit.load();}catch(e){}


/* Sticky Header
**********************/
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn1 = window.innerHeight - 600,
    shrinkOn2 = window.innerHeight - 100,
    header = document.querySelector(".header-sticky");
    intro = document.querySelector(".intro");
    if (distanceY > shrinkOn1) {
      classie.add(intro,"blur");
    } else {
      if (classie.has(intro,"blur")) {
        classie.remove(intro,"blur");
      }
    }
    if (distanceY > shrinkOn2) {
      classie.add(header,"smaller");
    } else {
      if (classie.has(header,"smaller")) {
        classie.remove(header,"smaller");
      }
    }
 

  });


}

window.onload = init();
window.sr = new scrollReveal();




/* Opens/Close Explore the Portal Menu
**********************/

$(".button-explore").click(function () {
  if ($('.header-button-help').is(":visible")){
    $( "body" ).addClass( "explore-the-portal-is-open" );
  }
  else{ 
    $( "body" ).removeClass( "explore-the-portal-is-open" );
  }
});



/* Opens/Close Navigation Filter menu
**********************/

$(".nav-dropdown").click(function () {
  $(this).toggleClass( "nav-dropdown-is-open" );
});


/* Close Modal Window
**********************/

$(".button-close-modal").click(function () {
  $(".modal").removeClass( "modal--is-open" );
});








 








