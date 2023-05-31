
$(function () {

  // MENU
    $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
            
        });
        $('.navbar-toggler').on('click', function () {
          var menuCollapse = $('.navbar-collapse');
          if (menuCollapse.hasClass('show')) {
              menuCollapse.collapse('hide');
          }
    });

  /* AOS*/
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });

  // SMOOTHSCROLL
  $(function() {
    $('.navbar a, .hero-text a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });   

});

  

    

