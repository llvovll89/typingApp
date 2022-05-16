const titleClick = document.querySelector(".title");
const hidetemp = document.querySelector(".hide-temp");
const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field");

let charIndex = 0;

// start background
titleClick.addEventListener("click", (e) => {
  e.preventDefault();
  hidetemp.style.display = "none";
});

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * paragraph.length);
  paragraph[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (characters[charIndex].innerText === typedChar) {
    characters[charIndex].classList.add("correct");
  } else {
    characters[charIndex].classList.add("incorrect");
  }
  charIndex++;
  characters[charIndex].classList.add('active');
}

randomParagraph();
inpField.addEventListener("input", initTyping);
