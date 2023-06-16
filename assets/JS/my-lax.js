window.onload = function () {



  window.addEventListener("scroll", (event) => {
    let section_to_fix = document.querySelector('section.welcome-section-wrapper');
    let section_to_fix_val = document.querySelector('.welcome-section-wrapper').offsetTop;
          
    console.log('section to fix value = ',section_to_fix_val);
    console.log('section to fix = ',section_to_fix.style.top);

    let currentScroll = Math.floor(document.documentElement.scrollTop);
    console.log("currentScroll = ", currentScroll);
    if(currentScroll >= section_to_fix_val ){
      // document.getElementById("p2").style.color = "blue";
      // document.getElementById("p2").style.backgroundColor = "red";
      // document.getElementById('p2').style.position='fixed';
      // document.getElementById('p2').style.top='680px';
      // document.getElementById('p2').style.left=0;


      console.log('section_to_fix.style.position = ',section_to_fix.style.position);
      // section_to_fix.style.position = 'fixed !important';
      // section_to_fix.style.top='0';
      // section_to_fix.style.left='0';
    }
    
  });


//************************************************************************************ */
  lax.init();
  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".first-page1", {
    scrollY: {
      translateY: [
        [0, "screenHeight/2", "screenHeight"],
        [0, "150", "500"],
      ],
      scale: [
        [0, "screenHeight/2", "screenHeight"],
        [1, 1.5, 1.62],
      ],
      // opacity: [[0, "screenHeight/2", "screenHeight"], [1, 1, 0]],
      // translateX: [[0, "screenHeight/2", "screenHeight"], [0, "screenWidth/2+250", "screenWidth+500"]]
      // translateX: [[0, "elCenterX", "elOutX"], [0, "screenWidth/2+250", "screenWidth+500"]]
    },
  });

  lax.addElements(".first-page2", {
    scrollY: {
      translateX: [
        [0, "screenHeight/2", "screenHeight"],
        [0, "screenWidth/2", "screenWidth"],
      ],
      scale: [
        [0, "screenHeight/2", "screenHeight"],
        [1, 1.1, 1.19],
      ],
    },
  });

  // lax.addElements('.page3', {
  //   scrollY: {
  //     translateX: [[0, "screenHeight/2", "screenHeight"], [0, "screenWidth/2-800", "screenWidth-10"]]
  //   }
  // });
};
