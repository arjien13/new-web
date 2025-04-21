// Navigates to the homepage (index.html) when called
function goHome() {
  window.location.href = "index.html";
}

// Initializes the page by hiding certain elements this shows for index viewing
document.querySelectorAll('.bio-photo, .profession, #resume-section, .Portfolio-Section, .my-image, .folder-container, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container').forEach(element => element.style.display = 'none');

// SET DISPLAY FUNCTION
function setDisplay(selector, displayValue) {
  document.querySelectorAll(selector).forEach(element => element.style.display = displayValue);
}

// BIO SECTION
function showBio() {
  setDisplay('.intro, .footer, .icons, #resume-section, .my-image, .Portfolio-Section, .folder-container, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container', 'none');
  setDisplay('.bio-section, .bio-paragraph, .bio-photo, .profession', 'block');
}

// RESUME SECTION
function showResume() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .folder-container, .profession, .my-image, .bio-paragraph, .bio-section, .Portfolio-Section, .pfolder-wrapper, .vfolder-wrapper, .skills-section-container', 'none');
  setDisplay('#resume-section', 'block');
  document.querySelector('#resume-section img').addEventListener('click', function(event) {
    window.open(this.src, '_blank');
  });

}

// PORFOLIO SECTION
function showPortfolio() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .profession, .bio-paragraph, .bio-section, .pfolder-wrapper, .vfolder-wrapper, #resume-section', 'none');
  setDisplay('.Portfolio-Section, .my-image, .folder-container, .skills-section-container', 'block');
}

// Photofolder SECTION
function showpfolder() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .profession, .bio-paragraph, .bio-section, #resume-section, .Portfolio-Section, .my-image, .skills-section-container, .vfolder-wrapper, .folder-container', 'none');
  setDisplay('.pfolder-wrapper', 'block'); 
}

// Videofolder SECTION
function showvfolder() {
  setDisplay('.intro, .footer, .icons, .bio-photo, .profession, .bio-paragraph, .bio-section, #resume-section, .Portfolio-Section, .my-image, .pfolder-wrapper, .skills-section-container, .folder-container', 'none');
  setDisplay('.vfolder-wrapper', 'block'); 
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