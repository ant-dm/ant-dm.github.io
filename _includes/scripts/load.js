$(document).ready(function () {
  //Collapse Navbar when click outside
  function CollapseNavbar() {
    $(".navbar-collapse").removeClass('show');
    $(".navbar-toggle").addClass('collapsed');
  }

  $('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
    console.log(clickover);

    if (_opened === true &&
        (!clickover.hasClass("navbar-toggler ml-auto NavTogglerStyle") &&
         !clickover.hasClass("navbar-toggler-icon") &&
         !clickover.hasClass("nav-link") &&
         !clickover.is("p"))) {
        CollapseNavbar();
    }
  });
  //hide navbar when scroll down
  var def = 0;
  $(window).on('scroll', function() {
    $('.navbar-wapper').toggleClass('scrollhide', $(window).scrollTop() > def);
    def = $(window).scrollTop();
  })
});
