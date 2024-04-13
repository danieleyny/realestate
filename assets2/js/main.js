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
  // Reference to the button
  var button = document.querySelector('.howfar-button');
  
  // Check if the button text is already "Calculating...", indicating it's not the first click
  if (button.innerHTML === 'Calculating...') {
    button.innerHTML = 'Re-Check Distance'; // Change text for subsequent uses
  } else {
    // First time click, change button to show loading state
    button.innerHTML = 'Calculating...';
  }
  
  button.style.backgroundColor = '#464b37'; // Green background
  button.style.color = 'white'; // White text
  button.disabled = true; // Disable button to prevent multiple clicks

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
          var directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=400+Whitfield+Rd+Accord,+NY+12404&travelmode=driving`;

          document.getElementById('output').innerHTML = `<span style="font-weight:800; margin-top: 18px;">Distance from you: <span style="color: white;">${distance}</span></span><br><span style="font-weight:800;">Duration by car: <span style="color: white;">${duration}</span></span><br><button style="margin-top: 30px; padding: 8px 8px; background-color: white; color: rgb(53, 48, 48); border: 1px solid #ccc; border-radius: 5px; cursor: pointer; box-shadow: 0 0 8px 2px rgba(0, 140, 255, 0.5);" onclick="window.open('${directionsUrl}','_blank')">Get Directions</button>`;
        }
        // Reset the button after loading is complete for any subsequent use
        button.innerHTML = 'Re-Check Distance';
        button.style.backgroundColor = 'white';
        button.style.color = 'rgb(53, 48, 48)';
        button.disabled = false;
      });
    }, function() {
      alert('Geolocation is not supported by this browser.');
      // Reset the button if geolocation fails
      button.innerHTML = 'Re-Check Distance';
      button.style.backgroundColor = 'white';
      button.style.color = 'rgb(53, 48, 48)';
      button.disabled = false;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
    // Reset the button if geolocation is not supported
    button.innerHTML = 'Re-Check Distance';
    button.style.backgroundColor = 'white';
    button.style.color = 'rgb(53, 48, 48)';
    button.disabled = false;
  }
}



/*=============== How To End ===============*/


/*=============== Testimony ===============*/
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = [
    {
      text: "'Our stay was absolutely loving and the house is stunning! Such a warm and welcoming feeling from the second you step in. The hosts were very accommodating through our entire stay. We came to Accord because we love the area but found ourselves staying home cozied up by the fireplace everyday instead.'",
      image: "assets2/img/catpicture.webp",
      name: "Paul Jeams"
    },
    {
      text: "'Finding this gem in Accord was the highlight of our year! The property is absolutely beautiful, offering serene views and a tranquil environment that allowed us to unwind and reconnect. The interior is both elegant and cozy, creating a warm atmosphere that felt like a hug. Our hosts were exceptional, providing tips for local adventures that enhanced our experience. Yet, we found ourselves drawn to the comfort of the fireplace, where we shared stories and laughter. It's not just a stay; it's an experience that soothes the soul. We're already planning our next escape to this enchanting retreat.'",
      image: "assets2/img/womanselfie.webp",
      name: "Kara Lesing"
    },
    {
      text: "'This getaway surpassed all our expectations! From the moment we arrived, we were enveloped in comfort and luxury. The attention to detail in every room made our stay incredibly special. The surrounding nature was breathtaking, offering the perfect backdrop for a peaceful retreat. Our hosts went above and beyond, ensuring we had everything we needed for a memorable vacation. Whether it was enjoying the sunrise with a cup of coffee or spending the evenings by the fire pit under the stars, every moment was a delight. Accord has captured our hearts, and we can't wait to return to this beautiful home away from home.'",
      image: "assets2/img/manselfie.webp",
      name: "Josh Green"
    }
    // Add more testimonials as needed
  ];

  let currentTestimonialIndex = 0;
  const progressBarFill = document.getElementById('progressBarFill');

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];
    document.querySelector('.explore__description').textContent = testimonial.text;
    document.querySelector('.explore__perfil').src = testimonial.image;
    document.querySelector('.explore__name').textContent = testimonial.name;

    // Immediately reset progress bar fill to 0% for a seamless restart effect
    progressBarFill.style.transition = 'none'; // Disable transition for immediate reset
    progressBarFill.style.width = '0%';
    
    // Force reflow to apply the reset without transition
    void progressBarFill.offsetWidth;

    // Re-enable transition for smooth filling
    progressBarFill.style.transition = 'width 20s linear';
    setTimeout(() => progressBarFill.style.width = '100%', 10); // Start filling

    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }

  setInterval(updateTestimonial, 20000); // Change every 20 seconds

  // Initialize the first testimonial and progress bar
  updateTestimonial();
});



/*=============== Testimony End ===============*/



/*=============== Form Redirect  ===============*/
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    var formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    }).then(response => {
      if (response.ok) {
        // Handle success, such as displaying a success message
        alert("Thank you for subscribing to our newsletter!");
        form.reset(); // Reset the form to clear the input
      } else {
        // Handle error
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    }).catch(error => {
      // Handle network errors
      alert("There was a problem with your submission: " + error.message);
    });
  });
});







document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('.join__input');

  input.addEventListener('input', function() {
    if(input.value.length > 0) { // Check if the user has started typing
      input.classList.add('join__input--active');
    } else {
      input.classList.remove('join__input--active'); // Revert to original style if input is empty
    }
  });
});

/*=============== Form Redirect End ===============*/




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