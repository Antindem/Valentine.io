const openConvert = document.getElementById("open");
const Confetti = document.getElementsByTagName("h1");
let clickCount = 0;
let musicStatus = false;
let audio = new Audio("./audio/George.mp3");
let audio2 = new Audio("./audio/zvukPerelistvania.mp3")

function createHeart() {
  const heart1 = document.createElement("div");
  let randomCatOrHeart = Math.round(Math.random());
  if(randomCatOrHeart) {
    heart1.classList.add("heart1")
    heart1.classList.remove("heart2")
  } else {
    heart1.classList.add("heart2");
    heart1.classList.remove("heart1")
  }
  heart1.style.left = Math.random() * 100 + "vw";
  heart1.style.animationDuration = Math.random() * 2 + 5 + "s";
  document.body.appendChild(heart1);
  setTimeout(() => heart1.remove(), 300000);
}

function sendLove() {
  const message = document.getElementById("message");
  Confetti[0].style.opacity = 1;
  message.style.opacity = 1;

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 90);
  }
}

function sentConfetti({ target }) {
  clickCount++;
  target.checked === true ? (musicStatus = true) : (musicStatus = false);
  audio2.play()  

  if (musicStatus === true) {
    setTimeout(() => audio.play(), 1000)
  } else {
    audio.pause()
  }

  if (target.checked === true && clickCount < 2) {
    setTimeout(() => sendLove(), 1000)
  }
}

openConvert.onclick = sentConfetti;
