const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{

        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '';
             } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4}s`
             }

        });

        burger.classList.toggle('toggle');

    });

    


    
}

navSlide();



// Learn More Button
const faders3 = document.querySelectorAll(".learn-more");
const appearOptions3 = {
  threshold: 1,
  rootMargin: "0px 0px -20px 0px",
};

const appearOnScroll3 = new IntersectionObserver(function (
  entries,
  appearOnScroll3
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll3.unobserve(entry.target);
    }
  });
},
appearOptions3);

faders3.forEach((fader) => {
  appearOnScroll3.observe(fader);
});

// NavBar Color Transition Animation
const header = document.querySelector(".navbar-main");
const sectionOne = document.querySelector(".hero-image");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("changeColor");
    } else {
      header.classList.remove("changeColor");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// About Area
const faders = document.querySelectorAll(".what-is-ASO");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const faders2 = document.querySelectorAll(".explanation");
const appearOptions2 = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll2 = new IntersectionObserver(function (
  entries,
  appearOnScroll2
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll2.unobserve(entry.target);
    }
  });
},
appearOptions2);

faders2.forEach((fader) => {
  appearOnScroll2.observe(fader);
});
