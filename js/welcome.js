//welcome
const welcomeText = document.querySelector(".welcome div");
const welcomeInput = document.querySelector(".welcome input");
welcomeInput.addEventListener("input", () => {
  localStorage.setItem("username", welcomeInput.value);
});

const username = localStorage.getItem("username");

if (username) {
  welcomeInput.classList.add("deleteElement");
} else {
  welcomeInput.classList.remove("deleteElement");
}

const nowTime = new Date().getHours();
if (0 <= nowTime && nowTime < 6) {
  if (username === null) {
    const username = "what's your name?";
    welcomeText.innerText = `Good Dawn!, ${username}`;
  } else {
    welcomeText.innerText = `Good Dawn!, ${username}`;
  }
}

if (6 <= nowTime && nowTime < 11) {
  if (username === null) {
    const username = "what's your name?";
    welcomeText.innerText = `Good Morning!, ${username}`;
  } else {
    welcomeText.innerText = `Good Morning!, ${username}`;
  }
}

if (11 <= nowTime && nowTime < 16) {
  if (username === null) {
    const username = "what's your name?";
    welcomeText.innerText = `Good Afternoon!, ${username}`;
  } else {
    welcomeText.innerText = `Good Afternoon!, ${username}`;
  }
}

if (16 <= nowTime && nowTime < 20) {
  if (username === null) {
    const username = "what's your name?";
    welcomeText.innerText = `Good Evening!, ${username}`;
  } else {
    welcomeText.innerText = `Good Evening!, ${username}`;
  }
}

if (20 <= nowTime && nowTime < 24) {
  if (username === null) {
    const username = "what's your name?";
    welcomeText.innerText = `Good Night!, ${username}`;
  } else {
    welcomeText.innerText = `Good Night!, ${username}`;
  }
}
