//get current year dynamically
document.getElementById('date').textContent = new Date().getFullYear(); 

//toggle handling
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbar = document.querySelector('.navbar');
  
    hamburgerIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });


//preloader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
  });


//typed.js
var typed = new Typed("#typed", {
    strings: ["Passionate Web Developer", "Python Enthusiast"],
    typeSpeed: 50,
    loop: true,
  });


//Smooth scroll
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 50); 
    });
});

// aos-animations
AOS.init({
    duration: 300,
});


//Back to Top Button Script
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

