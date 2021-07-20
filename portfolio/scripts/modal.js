const close1 = document.getElementById("close1");
const modalWindows = document.getElementsByClassName("modal-container");
let modal1_container = undefined;
let modal2_container = undefined;
let modal3_container = undefined;
const openModalButtons = document.getElementsByClassName("modalButton");
let modalBtn1 = undefined;
let modalBtn2 = undefined;
let modalBtn3 = undefined;
let modalBtn4 = undefined;
let modalBtn5 = undefined;
let modalBtn6 = undefined;
const CloseModalButtons = document.getElementsByClassName("modalCloseButton");
let closeModalBtn1 = undefined;
let closeModalBtn2 = undefined;
let closeModalBtn3 = undefined;
let closeModalBtn4 = undefined;
let closeModalBtn5 = undefined;
let closeModalBtn6 = undefined;
let startListening = false;
let done1,
  done2,
  done3 = false;

function idModals() {
  for (let i = 0; i < modalWindows.length; i++) {
    modalWindows[i].setAttribute("id", `modal${i + 1}-container`);
    modal1_container = document.getElementById("modal1-container");
    modal2_container = document.getElementById("modal2-container");
    modal3_container = document.getElementById("modal3-container");
    modal4_container = document.getElementById("modal4-container");
    modal5_container = document.getElementById("modal5-container");
    modal6_container = document.getElementById("modal6-container");
  }
  done1 = true;
}

function btnId() {
  for (let i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].setAttribute("id", `modalBtn${i + 1}`);
    modalBtn1 = document.getElementById(`modalBtn1`);
    modalBtn2 = document.getElementById(`modalBtn2`);
    modalBtn3 = document.getElementById(`modalBtn3`);
    modalBtn4 = document.getElementById(`modalBtn4`);
    modalBtn5 = document.getElementById(`modalBtn5`);
    modalBtn6 = document.getElementById(`modalBtn6`);
  }
  done2 = true;
}

function closeBtnId() {
  for (let i = 0; i < CloseModalButtons.length; i++) {
    CloseModalButtons[i].setAttribute("id", `closeModalBtn${i + 1}`);
    closeModalBtn1 = document.getElementById(`closeModalBtn1`);
    closeModalBtn2 = document.getElementById(`closeModalBtn2`);
    closeModalBtn3 = document.getElementById(`closeModalBtn3`);
    closeModalBtn4 = document.getElementById(`closeModalBtn4`);
    closeModalBtn5 = document.getElementById(`closeModalBtn5`);
    closeModalBtn6 = document.getElementById(`closeModalBtn6`);
  }
  done3 = true;
}

function listen() {
  console.log("listening...");
  modalBtn1.addEventListener("click", () => {
    modal1_container.classList.add("show");
  });

  modalBtn2.addEventListener("click", () => {
    modal2_container.classList.add("show");
  });

  modalBtn3.addEventListener("click", () => {
    modal3_container.classList.add("show");
  });

  modalBtn4.addEventListener("click", () => {
    modal4_container.classList.add("show");
  });

  modalBtn5.addEventListener("click", () => {
    modal5_container.classList.add("show");
  });

  modalBtn6.addEventListener("click", () => {
    modal6_container.classList.add("show");
  });

  closeModalBtn1.addEventListener("click", () => {
    modal1_container.classList.remove("show");
  });

  closeModalBtn2.addEventListener("click", () => {
    modal2_container.classList.remove("show");
  });

  closeModalBtn3.addEventListener("click", () => {
    modal3_container.classList.remove("show");
  });

  closeModalBtn4.addEventListener("click", () => {
    modal4_container.classList.remove("show");
  });

  closeModalBtn5.addEventListener("click", () => {
    modal5_container.classList.remove("show");
  });

  closeModalBtn6.addEventListener("click", () => {
    modal6_container.classList.remove("show");
  });
}

idModals();
btnId();
closeBtnId();
if (done1 && done2 && done3) {
  listen();
}