// Navigates to the homepage (index.html) when called
function goHome() {
  window.location.href = "index.html";
}

// Initializes the page by hiding certain elements this shows for index viewing
document.querySelectorAll('.bio-photo, .profession, .Portfolio-Section, .my-image, .grid-wrapper1, .political-wrapper, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container').forEach(element => element.style.display = 'none');

// SET DISPLAY FUNCTION
function setDisplay(selector, displayValue) {
  document.querySelectorAll(selector).forEach(element => element.style.display = displayValue);
}

// BIO SECTION
function showBio() {
  setDisplay('.intro, #message, .inspector, .hamburger, .jarviz-container, .footer, .social-media-icons, .my-image, .Portfolio-Section, .grid-wrapper1, .political-wrapper, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container', 'none');
  setDisplay('.bio-section, .bio-paragraph, .bio-photo, .profession', 'block');

  if (window.matchMedia("(orientation: portrait)").matches) {
    setDisplay('.menu', 'none');
  } else {
    // You can set the display property of .hamburger to its original value if needed
    // setDisplay('.hamburger', 'block');
  }
}


// PORFOLIO SECTION
function showPortfolio() {
  setDisplay('.intro, #message, .inspector, .hamburger, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .bio-section, .pfolder-wrapper, .vfolder-wrapper, #resume-section', 'none');
  setDisplay('.political-wrapper', 'none');
  setDisplay('.Portfolio-Section, .my-image, .folder-container, .grid-wrapper1, .skills-section-container', 'block');
  
  if (window.matchMedia("(orientation: portrait)").matches) {
    setDisplay('.menu', 'none');
  } else {
    // You can set the display property of .hamburger to its original value if needed
    // setDisplay('.hamburger', 'block');
  }
}

// Photofolder SECTION
function showpfolder() {
  setDisplay('.intro, #message, .inspector, .jarviz-container, .hamburger, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .political-wrapper, .bio-section, .Portfolio-Section, .my-image, .skills-section-container, .vfolder-wrapper, .grid-wrapper1', 'none');
  setDisplay('.pfolder-wrapper', 'block'); 

  if (window.matchMedia("(orientation: portrait)").matches) {
    setDisplay('.menu', 'none');
  } else {
    // You can set the display property of .hamburger to its original value if needed
    // setDisplay('.hamburger', 'block');
  }
}

// Videofolder SECTION
function showvfolder() {
  setDisplay('.intro, .jarviz-container, .inspector, .hamburger, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .political-wrapper, .bio-section, .Portfolio-Section, .my-image, .pfolder-wrapper, .skills-section-container, .grid-wrapper1', 'none');
  setDisplay('.vfolder-wrapper', 'block'); 

  if (window.matchMedia("(orientation: portrait)").matches) {
    setDisplay('.menu', 'none');
  } else {
    // You can set the display property of .hamburger to its original value if needed
    // setDisplay('.hamburger', 'block');
  }
}

// Blog Political SECTION
function showPolitical() {
  setDisplay('.intro, #message, .inspector, .hamburger, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .bio-section, .Portfolio-Section, .my-image, .vfolder-wrapper, .pfolder-wrapper, .skills-section-container, .grid-wrapper1', 'none');
  setDisplay('.political-wrapper', 'block'); 
 
  if (window.matchMedia("(orientation: portrait)").matches) {
    setDisplay('.menu', 'none');
  } else {
    // You can set the display property of .hamburger to its original value if needed
    // setDisplay('.hamburger', 'block');
  }
}

// back functions in Gallery Sections 
if (localStorage.getItem('showpfolder') === 'true') {
  showpfolder();
  localStorage.removeItem('showpfolder');
}
if (localStorage.getItem('showvfolder') === 'true') {
  showvfolder();
  localStorage.removeItem('showvfolder');
}
if (localStorage.getItem('showPortfolio') === 'true') {
  showPortfolio();
  localStorage.removeItem('showPortfolio');
}


// Shuriken Explotion Effects
        document.addEventListener('click', (e) => {
            for (let i = 0; i < 10; i++) {
                let shuriken = document.createElement('div');
                shuriken.classList.add('shuriken');
                shuriken.style.left = `${e.clientX}px`;
                shuriken.style.top = `${e.clientY}px`;
                shuriken.style.transform = `rotate(${Math.random() * 360}deg)`;
                document.body.appendChild(shuriken);
                
                let directionX = Math.random() * 200 - 100;
                let directionY = Math.random() * 200 - 100;
                shuriken.animate([
                    { transform: `translate(0, 0) rotate(${Math.random() * 360}deg)` },
                    { transform: `translate(${directionX}px, ${directionY}px) rotate(${Math.random() * 360 + 360}deg)` }
                ], {
                    duration: 1000,
                    fill: 'forwards'
                });
                
                setTimeout(() => {
                    shuriken.remove();
                }, 1000);
            }
        });

// Blog Personal Function
function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
  var alertOverlay = document.getElementById('alert-overlay');
  alertOverlay.style.display = 'flex';
  document.getElementById('alert-ok').onclick = function() {
    alertOverlay.style.display = 'none';
  };
}

// Portfolio Resume Function
document.getElementById('folder-link').addEventListener('click', function() {
  var imageUrl = 'img/resume.jpg'; // Replace with your image URL
  window.open(imageUrl, '_blank');
});


// Hamburger effect Function
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.menu-item a') || e.target.closest('.dropdown-item a')) {
        document.querySelector('.menu').classList.remove('active');
    }
});



