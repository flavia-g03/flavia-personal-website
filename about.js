$(document).ready(function () {









    //    REVEAL LAMP LIGHTS



    window.addEventListener('scroll', reveal);


    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 550;

            if (revealtop < windowheight - revealpoint) {

                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }


        }
    }



    //GSAP and Scrolltrigger

    gsap.registerPlugin(ScrollTrigger);





    // SKILLKS ILLUSTRATION 


    gsap.to(".skills-elements", {
        y: -25,
        opacity: 1,
        duration: 3.5,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".skills-elements",
            scrub: 5,
            start: "top 70%",
            end: '+=250px',
            //            markers: true,
        },


    })





    // CTA text 


    gsap.to(".cta-text", {
        y: -15,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        scrollTrigger: {
            trigger: ".cta-text",
            scrub: 5,
            end: '+=150px',
            //            markers: true,
        },


    })




    // Projects 


    gsap.to(".project-container", {
        scale: 1.05,
        duration: 3.5,
        delay: 2,
        scrollTrigger: {
            trigger: ".project-container",
            scrub: 5,
            start: "top 70%",
            end: '+=250px',
            //            markers: true,
        },


    })







    // UP BUTTON --------------------------------
    mybutton = document.getElementById("btn-up");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document - not working
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }


    // Alternative function
    function top() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    document.getElementById("btn-up").addEventListener("click", top);






    // Media query for larger screens

    var mq = window.matchMedia("(min-width: 1550px)");
    if (mq.matches) {
        // window width is at less than 570px






        //    reveal lamp lights

        window.addEventListener('scroll', reveal);


        function reveal() {
            var reveals = document.querySelectorAll('.reveal');

            for (var i = 0; i < reveals.length; i++) {

                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 900;

                if (revealtop < windowheight - revealpoint) {

                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }


            }
        }








    }





});
