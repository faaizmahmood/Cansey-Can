const counters = document.querySelectorAll('.num');
const section = document.querySelector('#counter');

let interval = 5000;

// Options for the Intersection Observer
const options = {
  threshold: 1 // Trigger when 100% of the section is in view
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the counters when the section is in view
      startCounters();
      // Unobserve the section to stop unnecessary callbacks
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe the section
observer.observe(section);

function startCounters() {
  counters.forEach((valuedisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endvalue);

    let counter = setInterval(() => {
      startvalue += 1;
      valuedisplay.textContent = startvalue;
      if (startvalue === endvalue) {
        clearInterval(counter);
      }
    }, duration);
  });
}



// --------------- owl-carousel


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})