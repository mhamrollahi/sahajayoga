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


document.addEventListener("DOMContentLoaded", function(){
            
    
  /////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element){
  element.addEventListener('click', function (e) {
    e.stopPropagation();
  });
})



// make it as accordion for smaller screens
if (window.innerWidth < 992) {

  // close all inner dropdowns when parent is closed
  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('hidden.bs.dropdown', function () {
      // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function(everysubmenu){
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
    })
  });
  
  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
    element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if(nextEl && nextEl.classList.contains('submenu')) {	
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          console.log(nextEl);
          if(nextEl.style.display == 'block'){
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
    });
  })
}
// end if innerWidth

}); 
// DOMContentLoaded  end
