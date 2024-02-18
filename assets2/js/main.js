/*=============== Home Image Switch  ===============*/


function checkWindowSize() {
    var homeBg = document.querySelector('.home__bg');
    if (window.innerWidth < 445) {
      homeBg.src = '../assets2/img/400whitfield/accordpool.png';
    } else {
      homeBg.src = '../assets2/img/400whitfield/400whitfield cover.png';
    }
  }

  // Event listener for resizing the window
  window.addEventListener('resize', checkWindowSize);

  // Call the function on script load to check the initial size
  checkWindowSize();


/*=============== Home Image Switch End ===============*/

// JavaScript Code
/*=============== Slideshow ===============*/
/*=============== Slideshow ===============*/
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var playing = true;
var slideInterval; // Declare a variable to hold the interval

var icon = document.querySelector('.slideshow-icon'); // Get the icon element

showSlides();

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  slides[slideIndex-1].style.display = "block";
  
  // Clear previous interval to reset the timer
  clearTimeout(slideInterval);
  
  // Set a new interval only if playing is true
  if (playing) {
    slideInterval = setTimeout(showSlides, 2500); // Change image every 2.5 seconds
  }
}

function showIcon() {
  icon.style.opacity = '1'; // Make the icon visible
  setTimeout(function() {
    icon.style.opacity = '0'; // Fade the icon out after 1.5 seconds
  }, 800);
}

// Add event listener to the slideshow container for pausing and playing the slideshow
var slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('click', function() {
  playing = !playing; // Toggle the playing state
  showIcon(); // Show the icon

  if (playing) {
    icon.className = 'ri ri-play-circle-fill slideshow-icon'; // Change icon to 'play'
    // Wait 1 second before restarting the slideshow
    setTimeout(function() {
      showSlides(); // If paused, restart slideshow
    }, 1000); // 1 second delay
  } else {
    clearTimeout(slideInterval); // If playing, stop the slideshow
    icon.className = 'ri ri-pause-circle-fill slideshow-icon'; // Change icon to 'pause'
  }
});

// Initialize Hammer.js on the slideshow container
var hammertime = new Hammer(slideshowContainer);

// Add swipe event handlers, only active when the slideshow is paused
hammertime.on('swipeleft', function() {
  if (!playing) { // Check if the slideshow is paused
    changeSlide(slideIndex + 1); // Move to the next slide
  }
});

hammertime.on('swiperight', function() {
  if (!playing) { // Check if the slideshow is paused
    changeSlide(slideIndex - 1); // Move to the previous slide
  }
});

function changeSlide(newIndex) {
  if (newIndex >= slides.length) { newIndex = 0; }
  if (newIndex < 0) { newIndex = slides.length - 1; }
  slideIndex = newIndex; // Update slideIndex globally
  showSlideAtIndex(); // Show the new slide
}

// Function to display the slide at the current slideIndex
function showSlideAtIndex() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}


/*=============== Slideshow End ===============*/

// Ensure to include the Hammer.js library before this script runs


/*=============== How To ===============*/

function calculateDistance() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var origins = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          var destinations = '400 Whitfield Rd Accord, NY 12404';

          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix({
              origins: [origins],
              destinations: [destinations],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.IMPERIAL,
          }, function(response, status) {
              if (status !== 'OK') {
                  alert('Error was: ' + status);
              } else {
                  var results = response.rows[0].elements;
                  var element = results[0];
                  var distance = element.distance.text;
                  var duration = element.duration.text;

                  document.getElementById('output').innerHTML = 'Distance: ' + distance + '<br>Duration: ' + duration;
              }
          });
      }, function() {
          alert('Geolocation is not supported by this browser.');
      });
  } else {
      // Browser doesn't support Geolocation
      alert("Geolocation is not supported by this browser.");
  }
}

/*=============== How To End ===============*/


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})