$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }

]
});
$('.typo-multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:false,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,

  
          }
      }
  
  ]
  });
$('.multiple-items1').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }

]
});
$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }

]

});
$('.cheerleader-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }

]

});
$('.hoodies-carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              variableWidth: true
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

]
});
$('.mask-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 900,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

]
});

$('.flags-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    arrows:false,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: true
                }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
  });
      

$('.case-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,  
    variableWidth: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true

          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  
  ]
  });
  $('.balls-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      }
  
  ]
  });

  $('.gallery-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    
    ]
  });
          
    
  
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");


menuIcon.addEventListener("click", function () {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";

        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        body.style.overflow = "hidden";
        $('.hamburger').toggleClass('is-active');
    }
});

(function () {
    $('.menu-lists').on('click', function () {
        $('.hamburger').toggleClass('is-active');
    })
})();

function closeNavSp() {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";
        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        $('.hamburger').toggleClass('is-active');
        body.style.overflow = "hidden";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "-50px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}

