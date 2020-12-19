(function($){
  $(function(){
  	
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.tap-target').tapTarget();
    
    $('.collapsible').collapsible();
     $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  });
     $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.parallax').parallax();
});
