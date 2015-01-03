// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();
var email = new Array('.com','factur','gerard','o.orti','z@inno','ingsol','utions'),
    phone = new Array('71','2','+','1','979','55','95');

$('.email').append("<a target='_blank' href='mailto:"+email[2]+email[3]+email[4]+email[1]+email[5]+email[6]+email[0]+"'>"+email[2]+email[3]+email[4]+email[1]+email[5]+email[6]+email[0]+"</a>");
$('.email-button').append("<a class='button' target='_blank' href='mailto:"+email[2]+email[3]+email[4]+email[1]+email[5]+email[6]+email[0]+"'>Connect With Us</a>");
$('.phone').append("<a target='_blank' href='tel:"+phone[2]+phone[3]+phone[4]+phone[1]+phone[5]+phone[6]+phone[0]+"'>"+phone[2]+phone[3]+' ('+phone[4]+') '+phone[1]+phone[5]+'-'+phone[6]+phone[0]+"</a>");

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
