//Collapse Navbar when click outside
$(document).ready(function () {
  function CollapseNavbar() {
    $(".navbar-collapse").removeClass('show');
    $(".navbar-toggle").addClass('collapsed');
  }

  $('html').click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
    console.log(clickover);

    if (_opened === true && (!clickover.hasClass("navbar-toggler ml-auto NavTogglerStyle") && !clickover.hasClass("navbar-toggler-icon") && !clickover.hasClass("nav-link"))) {
        CollapseNavbar();
    }
  });
});
