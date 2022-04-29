$(document).ready(function () {





    



    // MODAL POPUP 

    
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }








    // GSAP SCROLLTRIGGER BEE 



    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);






    gsap.to("#scroll-bee", {

        scrollTrigger: {
            trigger: "#scroll-bee",
            start: "top 20%",
            end: '+=1400px',
            scrub: 15,
            //            markers: true,



        },

        duration: 90,
        ease: "none",
        immediateRender: true,

        motionPath: {
            path: "M205,74s583.08,302.35,157.94,967.75C44,1540.94,172.3,1507.28,240,1843.56c80,397.36-316,593.35-166,854.29,202.76,352.7,489,157,653,98s299.51-154.28,708.72,76.13C1828,3092.88,2144,2704.9,2144,2704.9"
        }

    })







    /*gsap.to("#scroll-bee", {
            x: 150,
            duration: 3.5,
            delay: 0.2,
            scrollTrigger: {
                trigger: "#scroll-bee",
                start: "top 20%",
                markers: true,
            }

        })*/








    //    REVEAL DOOR LIGHTS



    window.addEventListener('scroll', reveal);


    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 500;

            if (revealtop < windowheight - revealpoint) {

                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }


        }
    }






    //UP BUTTON --------------------------------
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









});
