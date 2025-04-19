// Add this to your JavaScript
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll(".photo-item img").forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = image.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});