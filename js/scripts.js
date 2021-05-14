/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */

    function checkPoint(iKnow){
        
        if (iKnow == "Jolly"){    
        } else if (iKnow == "Curtis") {
             alert("Welcome!")
        } else if (iKnow == "curtis") {
             alert("Welcome!")
         } else if (iKnow == "jolly") {
             alert("Welcome!")               
        } else{
            alert("You are not invited!")
        }
    };


checkPoint(prompt("Who are you?"));


    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



/*CountDown*/
(function () {
              const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
             
              let birthday = "Nov 08, 2021 00:00:00",
                countDown = new Date(birthday).getTime(),
                x = setInterval(function () {
                  let now = new Date().getTime(),
                    distance = countDown - now;
             
                  (document.getElementById("days").innerText = Math.floor(distance / day)),
                    (document.getElementById("hours").innerText = Math.floor(
                      (distance % day) / hour
                    )),
                    (document.getElementById("minutes").innerText = Math.floor(
                      (distance % hour) / minute
                    )),
                    (document.getElementById("seconds").innerText = Math.floor(
                      (distance % minute) / second
                    ));
             
                  //do something later when date is reached
                  if (distance < 0) {
                    let headline = document.getElementById("headline"),
                      countdown = document.getElementById("countdown"),
                      content = document.getElementById("content");
             
                    headline.innerText = "It's our Wedding Day!";
                    countdown.style.display = "none";
                    content.style.display = "block";
             
                    clearInterval(x);
                  }
                  //seconds
                }, 0);
            })();
/*End of CountDown*/