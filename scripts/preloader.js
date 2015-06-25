
var preload = function(){

jQuery("html").addClass('mktplc-html-onload');
 jQuery("#mktplc-pageloader").removeClass();


 // disable browser scroll on touch devices
jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});

 // disable browser scroll on desktop
var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

//jQuery(window).load(function() {

     // after delay, restore browser scroll + fade out loader background + slide down page
    setTimeout(function(){

         //enable browser scroll on touch devices
        jQuery(document.body).unbind('touchmove');

         // enable browser scroll on desktop
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

         // fade out loader
        jQuery("#mktplc-pageloader").addClass('mktplc-pageloader-fade');

        //  slide down html
        jQuery("html").removeClass('mktplc-html-onload');
        //Inits scroll reveal effects:
        window.sr = new scrollReveal();
    },500);

     // after  delay, hide (not fade out) loader
    setTimeout(function(){

     // hide loader after fading out
        jQuery("#mktplc-pageloader").addClass('mktplc-pageloader-hide');

    },1500);
};


var unload = function(){
     //
};

//});

