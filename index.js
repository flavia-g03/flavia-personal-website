$(document).ready(function () {






    /*$("p").click(function () {
        $(this).hide();

    });*/


    gsap.registerPlugin(ScrollTrigger);


    // CLOUDS WITH SCROLLTRIGGER------




    // Left Cloud 

    gsap.to("#cloud1", {
        x: -150,
        duration: 3.5,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".planet-flavia",
            scrub: 5,
            start: "top 20%",
            end: '+=550px',
            // markers: true,
        },


    })


    // Right Cloud 

    gsap.to("#cloud2", {
        x: 150,
        duration: 3,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".planet-flavia",
            scrub: 5,
            start: "top 20%",
            end: '+=550px',

        }

    })








    // UP BUTTON ---------------------------

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

    // When the user clicks on the button, scroll to the top of the document - does not work
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }


    // Alternative function to go to top of the page when user clicks on button   
    function top() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    document.getElementById("btn-up").addEventListener("click", top);




    


    // MEDIA QUERY -------------------------- 

    var mq = window.matchMedia("(max-width: 570px)");
    if (mq.matches) {
        // window width is at less than 570px



        // Left Cloud 

        gsap.to("#cloud1", {
            x: -60,
            duration: 3.5,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
                //            markers: true,
            }

        })


        // Right Cloud 

        gsap.to("#cloud2", {
            x: 60,
            duration: 3,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
            }

        })







    } else {
        // window width is greater than 570px
    }




    var mq = window.matchMedia("(min-width: 768px) and (max-width: 900px)");
    if (mq.matches) {
        // for tablets



        // Left Cloud 

        gsap.to("#cloud1", {
            x: -60,
            duration: 3.5,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
                //            markers: true,
            }

        })


        // Right Cloud 

        gsap.to("#cloud2", {
            x: 60,
            duration: 3,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
            }

        })




    }




    // Media query for larger screens

    var mq = window.matchMedia("(min-width: 1550px)");
    if (mq.matches) {
        // window width is at less than 570px






        // Left Cloud 

        gsap.to("#cloud1", {
            x: -100,
            duration: 3.5,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
                //            markers: true,
            }

        })


        // Right Cloud 

        gsap.to("#cloud2", {
            x: 100,
            duration: 3,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".planet-flavia",
                start: "top 20%",
            }

        })






    }



});
