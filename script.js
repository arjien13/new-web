// Navigates to the homepage (index.html) when called
function goHome() {
  window.location.href = "index.html";
}

// Initializes the page by hiding certain elements this shows for index viewing
document.querySelectorAll('.bio-photo, .profession, .Portfolio-Section, .my-image, .folder-container, .political-wrapper, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container').forEach(element => element.style.display = 'none');

// SET DISPLAY FUNCTION
function setDisplay(selector, displayValue) {
  document.querySelectorAll(selector).forEach(element => element.style.display = displayValue);
}

// BIO SECTION
function showBio() {
  setDisplay('.intro, .jarviz-container, .footer, .social-media-icons, .my-image, .Portfolio-Section, .folder-container, .political-wrapper, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container', 'none');
  setDisplay('.bio-section, .bio-paragraph, .bio-photo, .profession', 'block');
}


// PORFOLIO SECTION
function showPortfolio() {
  setDisplay('.intro, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .bio-section, .pfolder-wrapper, .vfolder-wrapper, #resume-section', 'none');
  setDisplay('.political-wrapper', 'none');
  setDisplay('.Portfolio-Section, .my-image, .folder-container, .skills-section-container', 'block');
}

// Photofolder SECTION
function showpfolder() {
  setDisplay('.intro, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .political-wrapper, .bio-section, .Portfolio-Section, .my-image, .skills-section-container, .vfolder-wrapper, .folder-container', 'none');
  setDisplay('.pfolder-wrapper', 'block'); 
}

// Videofolder SECTION
function showvfolder() {
  setDisplay('.intro, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .political-wrapper, .bio-section, .Portfolio-Section, .my-image, .pfolder-wrapper, .skills-section-container, .folder-container', 'none');
  setDisplay('.vfolder-wrapper', 'block'); 
}

// Blog Political SECTION
function showPolitical() {
  setDisplay('.intro, .jarviz-container, .footer, .social-media-icons, .bio-photo, .profession, .bio-paragraph, .bio-section, .Portfolio-Section, .my-image, .vfolder-wrapper, .pfolder-wrapper, .skills-section-container, .folder-container', 'none');
  setDisplay('.political-wrapper', 'block'); 
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