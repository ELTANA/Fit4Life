//  VARIABLES
const nav = document.querySelector("nav");
const navbarToggler = document.querySelector(".navbar-toggler");


// EVENT Liteners

// Add Nav Bar Background Color on Scroll
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if(scrolled > 0) {
        nav.classList.add("nav--bg__appear");
    } else {
        nav.classList.remove("nav--bg__appear");
    }
});

// Add Nav Bar Background Color on Click
window.addEventListener("click", () => {
    nav.classList.add("nav--bg__appear");
})


// Form Validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();