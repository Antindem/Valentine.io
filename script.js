const openConvert = document.getElementById("open");
const Confetti = document.getElementsByTagName("h1");
const galleryStart = document.querySelector(".gallery");

let clickCount = 0;
let sliderActivateStatus = false;

function createHeart() {
  const heart1 = document.createElement("div");
  heart1.classList.add("heart1");
  heart1.style.left = Math.random() * 100 + "vw";
  heart1.style.animationDuration = Math.random() * 2 + 5 + "s";
  document.body.appendChild(heart1);
  setTimeout(() => heart1.remove(), 300000);
}

function sendLove() {
  const message = document.getElementById("message");
  message.innerHTML = "You're loved, David! ❤️";
  Confetti[0].innerHTML = "Happy Valentin's day!";
  Confetti[0].style.opacity = 1;
  message.style.opacity = 1;

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 90);
  }
}

function sentConfetti({ target }) {
  clickCount++;
  target.checked === true && clickCount < 2 ? sendLove() : null;

  if (sliderActivateStatus === false) {
    sliderActivateStatus = true;
    galleryStart.classList.add("galleryTime");
  } else {
    sliderActivateStatus = false;
    galleryStart.classList.remove("galleryTime");
  }
}

// window.onload = sendLove;

openConvert.onclick = sentConfetti;
