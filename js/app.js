// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

if ($("html").hasClass("cssfilters")) {
  $window = $(window);

  $window.scroll(function() {
    parallax();
  });
}

function parallax() {
  var scrolled = $window.scrollTop();

  if (scrolled < 700 && (100-(0.5*scrolled)) >= 0) {
    $('.billboard-image').css({
      'filter'        : 'grayscale(' + (100-(0.5*scrolled)) + '%) blur(' + (2-(0.01*scrolled)) + 'px)',
      '-webkit-filter': 'grayscale(' + (100-(0.5*scrolled)) + '%) blur(' + (2-(0.01*scrolled)) + 'px)'
    });
  }
}
