const modalWindows = document.getElementsByClassName("modal-container");
const openButtons = document.getElementsByClassName("modalButton");
const closeButtons = document.getElementsByClassName("modalCloseButton");
const open = [];
const containers = [];
const close = [];

function set_ids() {
  for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].setAttribute("id", `openBtn${i + 1}`);
    open.push(document.getElementById(`openBtn${i + 1}`));
  }
  for (let i = 0; i < modalWindows.length; i++) {
    modalWindows[i].setAttribute("id", `modal-container${i + 1}`);
    containers.push(document.getElementById(`modal-container${i + 1}`));
  }
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].setAttribute("id", `closeBtn${i + 1}`);
    close.push(document.getElementById(`closeBtn${i + 1}`));
  }
}

function listen() {
  open.map((openBtn) => {
    openBtn.addEventListener("click", () => {
      containers[openBtn.id.charAt(openBtn.id.length - 1) -1].classList.add("show");
    });
  });

  close.map((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      containers[closeBtn.id.charAt(closeBtn.id.length - 1) -1].classList.remove("show");
    });
  });
}

set_ids();
listen()

function sizing(){
  
}