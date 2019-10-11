$(document).ready(function () {
  //Collapse Navbar when click outside
  var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
  function CollapseNavbar() {
    $(".navbar-collapse").removeClass('show');
    $(".navbar-toggle").addClass('collapsed');
  }
  $('html').click(function (event) {
    var clickover = $(event.target);
    console.log(clickover);
    if (_opened === true &&
        (!clickover.hasClass("navbar-toggler ml-auto NavTogglerStyle") &&
         !clickover.hasClass("navbar-toggler-icon") &&
         !clickover.hasClass("nav-link") &&
         !clickover.hasClass("menu")) ){
        CollapseNavbar();
    }
  });
  //hide navbar when scroll down
  var def = 0;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > def) {
      $('.navbar').hide();
    } else {
      $('.navbar').show();
      def = $(window).scrollTop();
    }

//  $('.navbar').toggleClass('fadeIn_up', $(window).scrollTop() > def);
//    if (_opened == true) {
//      $(".navbar").removeClass('fadeIn_up');
//    } else {
//      def = $(window).scrollTop();
//    }
  })
});
