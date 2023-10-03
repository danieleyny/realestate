/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');  // Get the logo element
    
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
        logo.src = './assets/img/ZM EYNY Black.png';  // Change the logo src
    } else {
        header.classList.remove('scroll-header');
        logo.src = './assets/img/ZM EYNY Transparent.png';  // Revert the logo src
    }
}
window.addEventListener('scroll', scrollHeader);
/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

// 1. Select each item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    // 2. Select each header click
    accordionHeader.addEventListener('click', () =>{
        // 7. Create the tag
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Call toggle item function
        toggleItem(item)

        // 8. Check if the class exists
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Create a constant type function
const toggleItem = (item) =>{
    // 3.1 Create the tag
    const accordionContent = item.querySelector('.value__accordion-content')

    // 6. If there is another element that contains the class accordion-open remove its class
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Add the maximum height of the content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}




/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})




/*=============== Contact Section End ===============*/


/*=============== Copy Text On Click ===============*/

function copyText(id) {
    var text = document.getElementById(id).innerText;
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    }
    
    document.getElementById("copyText").addEventListener("click", function() {
    copyText("copyText");
    });
    
    document.getElementById("copyText1").addEventListener("click", function() {
    copyText("copyText1");
    });
    
    document.getElementById("copyText2").addEventListener("click", function() {
    copyText("copyText2");
    });
    
    document.getElementById("copyText3").addEventListener("click", function() {
    copyText("copyText3");
    });


/*=============== Open Pop Up Alert On Click  ===============*/


function copyText(copyTextId, emailPopupId) {
    var text = document.getElementById(copyTextId).innerText;
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    var popup = document.getElementById(emailPopupId);
    popup.style.left = event.pageX + "px";
    popup.style.top = event.pageY + "px";
    popup.style.display = "block";
    
    setTimeout(function() {
      popup.style.display = "none";
    }, 1000);
  }
  
  document.getElementById("copyText").addEventListener("click", function() {
    copyText("copyText", "email-popup");
  });
  
  document.getElementById("copyText1").addEventListener("click", function() {
    copyText("copyText1", "email-popup1");
  });
  
  document.getElementById("copyText2").addEventListener("click", function() {
    copyText("copyText2", "email-popup2");
  });
  
  document.getElementById("copyText3").addEventListener("click", function() {
    copyText("copyText3", "email-popup3");
  });

/*=============== Contact Section End ===============*/



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img, .logos__img-small`, {interval: 100})
sr.reveal(`.discover__container`, {delay: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})








document.addEventListener('DOMContentLoaded', function () {
    const nestedSwipers = Array.from(document.querySelectorAll('.nested-swiper')).map(function (element) {
        return new Swiper(element, {
            loop: true,
            autoplay: false, 
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    });

    function handlePlayButtonClick(playIcon, swiperIndex, overlay) {
        playIcon.style.display = 'none';  
        overlay.style.display = 'none';  
        nestedSwipers[swiperIndex].params.autoplay = { delay: 2000 };
        nestedSwipers[swiperIndex].autoplay.start(); 
    }

    function handleSlideClick(swiperIndex, playIcon, overlay) {
        if(window.innerWidth > 445) {  // Check if screen width is over 445px
            nestedSwipers[swiperIndex].autoplay.stop();  // Stop autoplay
            nestedSwipers[swiperIndex].update();  // Ensure Swiper's internal state is updated
            nestedSwipers[swiperIndex].slideTo(1, 0);  // Go to the first slide instantly
            playIcon.style.display = 'inline-block';  // Show play icon
            overlay.style.display = 'block';  // Show overlay
        }
    }

    document.querySelectorAll('.play-icon').forEach((playIcon, index) => {
        const overlay = playIcon.previousElementSibling; 
        playIcon.addEventListener('click', () => handlePlayButtonClick(playIcon, index, overlay));

        // Adding click event listener to each slide of the Swiper instance
        nestedSwipers[index].slides.forEach(slide => {
            slide.addEventListener('click', () => handleSlideClick(index, playIcon, overlay));
        });
    });

    if(window.innerWidth < 445) {
        nestedSwipers.forEach(swiper => {
            swiper.params.autoplay = { delay: 2000 };
            swiper.autoplay.start(); 
        });
    }
});
