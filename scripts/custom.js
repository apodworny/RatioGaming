$( document ).ready(function() {

  var randomNo = Math.floor((Math.random() * 6) + 1);
  var randomBg = "url('/images/bg" + randomNo + ".jpg')";
  $('.left-image-wrapper').css("background-image", randomBg);

  $('.hamburger').on('click', function() {
    $('header nav.nav-dropdown').toggleClass("hidden");
    $('.hamburger').toggleClass("hidden");
    $('.hamburger-close').toggleClass("hidden");
  });
  $('.hamburger-close').on('click', function() {
    $('header nav.nav-dropdown').toggleClass("hidden");
    $('.hamburger').toggleClass("hidden");
    $('.hamburger-close').toggleClass("hidden");
  });
});
