//Menu Toggler
const menu = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.link');

function menuToggle() {
  links.classList.toggle('open');
}

menu.onclick = menuToggle;

// Typewriter Animation.
var span = document.querySelector(".header-body span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}

// Active state of nav-links
$('nav ul a').on('click', function(){
  $('ul#navLinks').find('a.active').removeClass('active');
  $(this).addClass('active');
});

// Lazy load Images
const images = document.querySelectorAll("[data-src]");

const preloadImage = ((img) => {
  const src = img.getAttribute("data-src");
  if (!src) return;
  img.src = src;
})

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fadeIn");
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});

//Close nav on click
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    links.classList.remove('open');
  });
});


// Navbar scroll
const navbar = document.querySelector('nav');
const header =  document.getElementById('header');

const navOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-600px 0px 0px 0px'
}

const navObserver = new IntersectionObserver((entries, navObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });
}, navOptions);

navObserver.observe(header);


//Skillbar Animation
const fillItems = document.querySelectorAll('.fill');

const aboutOptions = {
  threshold: 0,
  rootMargin: '0px 0px 0px 0px'
}

const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.style.animation = "none"; 
    }else {
      entry.target.style.animation = entry.target.dataset.fill;
      aboutObserver.unobserve(entry.target);
    }  
  });
}, aboutOptions);

fillItems.forEach(item => {
  aboutObserver.observe(item);
});

// Add Active Class on Scroll
var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();

  $("section[id]").each(function (index, elem) {
    var offsetTop = $(elem).offset().top - 100;
    var outerHeight = $(this).outerHeight(true);

    if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
      var elemId = $(elem).attr("id");
      $("nav ul li a.active").removeClass("active");
      $("nav ul li a[href='#" + elemId + "']").addClass("active");
    } else if (windowTop < 50) {
      $(".hero").addClass("active");
      $("nav ul li:nth-child(2) a.active").removeClass("active");
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});

//Adding event listeners to works-menu
let filterTabContainer = document.querySelector("#works-menu");
let works = document.querySelectorAll(".work");

filterTabContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-item")) {
    
    // deactivate existing active 'filter-item'
    filterTabContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");

    works.forEach((work) => {
      if (work.classList.contains(filterValue) || filterValue === "all") {
        work.classList.remove("hide");
        work.classList.add("show");
      } else {
        work.classList.remove("show");
        work.classList.add("hide");
      }
    });
  }
});

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".goToTop").fadeIn();
    }
    else{
      $(".goToTop").fadeOut();
    }
  });

  $(".goToTop").click(function(){scroll(0,0)});
});