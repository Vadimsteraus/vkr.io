

$(document).ready(function() {
  $('.nav-link-collapse').on('click', function() {
    $('.nav-link-collapse').not(this).removeClass('nav-link-show');
    $(this).toggleClass('nav-link-show');
  });
});



$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            right: '-120px',
            bottom: '-120px'
        });
        } else {
        $('.upbtn').css({
            right: '-220px',
            bottom: '-220px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
// стрелочка вниз

// $('body').append('<div class="upbtn"></div>');            
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         $('.upbtn').css({
//             bottom: 0
//         });
//         } else {
//         $('.upbtn').css({
//             bottom: '-80px'
//         });
//     }
// });
// $('.upbtn').on('click',function() {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });