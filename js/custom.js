$(document).ready(function(){
  //get the header height
  //var headerHeight = $('header').outHeight();
  $('.slide-section').click(function(e){
    var linkHref = $(this) .attr('href');
    //console.log($(linkHref).offset().top);
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
    // $('.navbar-toggle').trigger('click');

    e.preventDefault();
  });


  var waypoints = $('#nav-control').waypoint({

    handler: function(direction) {
      if(direction ==='down'){
        $('.navbar').addClass('navbar-fixed-top');

      }else{
        $('.navbar').removeClass('navbar-fixed-top');

      }
    }
  })



});
