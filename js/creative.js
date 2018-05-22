(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 0) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

function step2_func(x) {
  // Add active class to the current button (highlight it)
  const step2_btn = document.getElementById("step2_btn");
  const step2_lis = step2_btn.getElementsByClassName("step2_li");
  for (var i = 0; i < step2_lis.length; i++) {
    step2_lis[i].addEventListener("click", function() {
      var current = step2_btn.getElementsByClassName(" StepActive");
      current[0].className = current[0].className.replace(" StepActive", "");
      this.className += " StepActive";
    });
  }
  // Build Json for step2
  const step2 = '{ "step2" : [' +
'{ "current":"The users are required to choose the variables they would like to see from several complex lists. It gives the users a sense of uncertainty, as they are not able to have a glance on the data ahead of seeing the final result." , "redesign":"Once the selection is modified, the chart shown on the right side will be changed correspondingly." , "current_img":"img/step2-1_cur.gif" , "redesign_img":"img/step2-1_red.gif" },' +
'{ "current":"Some types of longitudinal variables are very suitable to have a sroller for observation, but the current design have all the variables a uniformed interface of selector. If the user want to make a comparison between years or genders, the interface can be troublesome. They have to open several new tabs, and to repeat the past phases again and again." , "redesign":"For the datasets with longitudinal variables, an easy-to-control scrollable axis is provided for the users, which is a very intuitive visualised way to show the period represented from the data. " , "current_img":"img/step2-2_cur.gif" , "redesign_img":"img/step2-2_red.gif" },' +
'{ "current":"The users disappointedly find that they don’t know what to do with the data, not to mention to proceed any furthur analysis.  (╯°Д°)╯ ┻━┻ " , "redesign":"The Statistics Finland provides lots of statistical reports regularly. By showing the quick shortcuts for the related report with each tables, the users can acquire the authorative interpretations of data more easily." , "current_img":"img/step2-3_cur.gif" , "redesign_img":"img/step2-3_red.gif" },' +
'{ "current":"The users can visualise the data with a variety of options such as line graph, bar chart, pie chart, etc. However, there is no any option for adjusting the detail of the chart." , "redesign":"The default setting to demonstrate the data is basically the visualised chart forms such as bar, line, pie, box plot, etc. The reason is that the plain table is usually the less comprehensive form. Nevertheless, the users can switch the forms by selecting the labels on the top of the result panel very intuitively." , "current_img":"img/step2-4_cur.gif" , "redesign_img":"img/step2-4_red.gif" } ]}';
  const step2_obj = JSON.parse(step2);

  // Replace Desc for Redesign and Current
  let step2_redesign = step2_obj.step2[x].redesign;
  document.getElementById("step2_redesign").innerHTML = step2_redesign;
  let step2_current = step2_obj.step2[x].current;
  document.getElementById("step2_current").innerHTML = step2_current;

  // Replace gif for Redesign and Current
  let step2_cur_gif = step2_obj.step2[x].current_img;
  document.getElementById("step2_cur_gif").src = step2_cur_gif;
  let step2_red_gif = step2_obj.step2[x].redesign_img;
  document.getElementById("step2_red_gif").src = step2_red_gif;
}

$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow1").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-550) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});


$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow2").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-350) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});


$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
  $(".conceptShow3").each(function () {
    let y = $(document).scrollTop();
    let t = $(this).parent().offset().top;
    if (y > t-0) {
        $(this).fadeIn();
    } else {
        $(this).fadeOut();
    }
  });
});
// Collapse now if page is not at top
showconceptbg1();
// Collapse the navbar when page is scrolled
$(window).scroll(showconceptbg1);


// open Fact

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("mainNav").style.opacity = "0";
    document.getElementById("sup_empty").style.width = "0";
    setTimeout(function(){document.getElementById("mainNav").style.display = "none";},500);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainNav").style.opacity = "1";
    document.getElementById("sup_empty").style.width = "50%";
    setTimeout(function(){document.getElementById("mainNav").style.display = "block";},400);
}
