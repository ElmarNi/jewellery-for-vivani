jQuery.fn.clickOutside = function (callback) {
  var $me = this;
  $(document).mouseup(function (e) {
    if (!$me.is(e.target) && $me.has(e.target).length === 0) {
      callback.apply($me);
    }
  });
};

$('#slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: true,
  nav: true,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
$("#small-screens .menu-bar i.open-menu").click(function (e) {
  $(this).addClass("active");
  $("#small-screens nav").addClass("active");
});
$("#small-screens i.close-menu").click(function (e) {
  $("#small-screens .menu-bar i.open-menu").removeClass("active");
  $("#small-screens nav").removeClass("active");
});
$('#small-screens nav').clickOutside(function () {
  $(this).removeClass('active');
  $("#small-screens .menu-bar i.open-menu").removeClass("active");
});