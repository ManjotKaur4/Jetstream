"use strict"; // Start of use strict
(function ($) {


    function bootstrapAnimatedLayer() {

        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = "webkitAnimationEnd animationend";

            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data("animation");
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $myCarousel = $("#minimal-bootstrap-carousel"),
            $firstAnimatingElems = $myCarousel
                .find(".carousel-item:first")
                .find("[data-animation ^= 'animated']");

        //Initialize carousel
        $myCarousel.carousel();

        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);

        //Other slides to be animated on carousel slide event
        $myCarousel.on("slide.bs.carousel", function (e) {
            var $animatingElems = $(e.relatedTarget).find(
                "[data-animation ^= 'animated']"
            );
            doAnimations($animatingElems);
        });
    }

    bootstrapAnimatedLayer();



})(jQuery);






// nav link active 
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// {/* <script> */ }





{/* <script> */ }
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        if (navbarMenu.classList.contains('show')) {
            navbarMenu.classList.remove('show');
        } else {
            navbarMenu.classList.add('show');
        }
    });
});
// </script>
