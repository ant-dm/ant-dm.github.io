//Collapse Navbar when click outside
$(document).ready(function () {
  function CollapseNavbar() {
    $(".navbar-collapse").removeClass('show');
    $(".navbar-toggle").addClass('collapsed');
  }

  $('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        CollapseNavbar();
    }
  });
});
