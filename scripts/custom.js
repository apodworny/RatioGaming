$( document ).ready(function() {
  var randomNo = Math.floor((Math.random() * 3) + 1);
  var randomBg = "url('/images/bg" + randomNo + ".jpg')";
  $('.left-image-wrapper').css("background-image", randomBg);
});
