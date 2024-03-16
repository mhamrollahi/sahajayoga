AOS.init({
  duration: 800,
  easing: "slide",
});

document.body.style.overflowX = "hidden";

// Start -- Scroll to Top Section
// ****************************************************************************************

$(window).scroll(function () {
  if ($(this).scrollTop() >= 350) {
    $("#scroll-top").fadeIn();
  } else {
    $("#scroll-top").fadeOut();
  }
});
$("#scroll-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;

  // $('body,html').animate({scrollTop:0},1500)
});

// ****************************************************************************************
// End -- Scroll to Top Section
