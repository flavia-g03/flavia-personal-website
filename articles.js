$(document).ready(function () {




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


    // Alternative function for up button 

    function top() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    document.getElementById("btn-up").addEventListener("click", top);









});
