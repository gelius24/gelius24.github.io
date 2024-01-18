const open = document.querySelectorAll(".projet-card");
const close = document.querySelectorAll(".fa-x");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");

Array.from(open).forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.children[1].style.display = "flex";
    overlay.style.display = "block";
    // make the kids disapear
  });
});


Array.from(close).forEach((btn) => {
  btn.addEventListener("click", () => {
    var thisModal = btn.parentElement;
    
    thisModal.classList.add("closing");
    Array.from(thisModal.children).forEach((child) => {
      child.style.display = "none";
    });

    setTimeout(() => {
      thisModal.style.display = "none";
      Array.from(thisModal.children).forEach((child) => {
        child.style.display = "inherit";
      });
      thisModal.classList.remove("closing");
      overlay.style.display = "none";
    }, 1000);
  });
});


