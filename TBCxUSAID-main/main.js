const dialog = document.querySelector("dialog");
const button1 = document.getElementById("dialog-button1");
const button2 = document.getElementById("dialog-button2");
const dialogOpener = document.getElementById("footer-third-rules");
const dialogBody = document.getElementById("dialog-body");
const header = document.getElementById("header");
const root = document.getElementById("root");

dialog.onclick = (event) => {
  if (dialogBody.contains(event.target)) return;
  dialog.close();
};

const closeModalButtonEventListener = () => {
  dialog.close();
};

dialogOpener.onclick = () => dialog.showModal();

button1.onclick = closeModalButtonEventListener;
button2.onclick = closeModalButtonEventListener;

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

document.addEventListener("scroll", () => {
  const st = window.scrollY || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    header.classList.remove("header-scrolling-up");
    header.classList.add("header-scrolling-down");
  } else if (st < lastScrollTop) {
    header.classList.remove("header-scrolling-down");
    header.classList.add("header-scrolling-up");
  }

  lastScrollTop = st <= 0 ? 0 : st;

  if (header.offsetTop > 20) {
    header.classList.add("header-scrolled");
    return;
  }

  header.classList.remove("header-scrolled");
});
