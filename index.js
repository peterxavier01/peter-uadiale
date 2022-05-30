//Menu Toggler
const menu = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.link');

function menuToggle() {
  links.classList.toggle('open');
}

menu.onclick = menuToggle;


// Active state of nav-links
$('nav ul a').on('click', function(){
  $('ul#navLinks').find('a.active').removeClass('active');
  $(this).addClass('active');
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

//Magnific Popup
$(function() {
$(".my-works").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled:true}
 });
}); 

//Change active section on scroll
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

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
