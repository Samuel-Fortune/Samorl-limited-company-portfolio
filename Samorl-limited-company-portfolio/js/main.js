$(document).ready(function () {
  $(window).scroll(function () {
    let __headerPosition =
      $("header").position().top + $("header .main_header").height();

    if ($(window).scrollTop() > __headerPosition) {
      // show fixed header
      $("header .main_header").addClass("az_fixed");
      $("header .main_header nav").addClass("top-10 mt-0");
    } else {
      $("header .main_header").removeClass("az_fixed");
      $("header .main_header nav").removeClass("top-10 mt-0");
    }
  });

  // Add Menu Click Event
  $(".show_aside").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $(".show_menu").click(function () {
    $(this).parent().parent().find("nav").slideToggle();
  });
});

// Glider JS SETUP
window.addEventListener("load", function () {
  let __gliderDOM = document.querySelectorAll(".carousel__lista");
  let __dots = document.querySelectorAll(".carousel__indicadores");

  let __prevArrow = document.querySelectorAll(".carousel__anterior");
  let __nextArrow = document.querySelectorAll(".carousel__siguiente");

  __gliderDOM.forEach(function (__element, __index) {
    new Glider(__element, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: __dots[__index],
      arrows: {
        prev: __prevArrow[__index],
        next: __nextArrow[__index]
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          // screens greater than >= 1024px
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  });
});
