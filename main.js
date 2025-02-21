const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");
const scrollBtn = document.querySelector("#scroll-to-top");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const words = ["Inovacija", "Ekscelencija", "Dominacija"];
let wordIndex = 0;
const textElement = document.getElementById("text-slider-text");

textElement.textContent = words[wordIndex];
textElement.classList.add("active");

function switchWord() {
  textElement.classList.remove("active");
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    textElement.textContent = words[wordIndex];
    textElement.classList.add("active");
  }, 300);
}

setInterval(switchWord, 1500);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Molimo ispunite sva polja!");
      return;
    }

    alert(`Hvala ${name}, vaša poruka je poslana!`);
    form.reset();
  });
});
