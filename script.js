const memes = [
  "Result dekhne ke baad: duniya faani hai 😭😂",
  "System hang nahi hua... tum ho gaye ho 💀",
  "Marks dekh ke internet bhi slow ho gaya 😂",
  "Expectation: Topper 😎 Reality: Shock 🤡",
  "Result aya nahi, zindagi badal gayi 😭"
];

let index = 0;

function startProcess() {
  let roll = document.getElementById("roll").value;

  if (roll === "") {
    alert("Enter roll number");
    return;
  }

  document.getElementById("loader").style.display = "block";
  document.getElementById("resultBox").style.display = "none";

  let progress = 0;
  let interval = setInterval(() => {
    progress += 10;
    document.getElementById("progress").style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      showResult(roll);
    }
  }, 200);
}

function showResult(roll) {
  document.getElementById("loader").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  document.getElementById("rollDisplay").innerText = roll;

  setTimeout(() => {
    startPrank();
  }, 1500);
}

function startPrank() {
  index = 0;
  showMeme();
  document.getElementById("popup").style.display = "flex";
}

function showMeme() {
  document.getElementById("memeText").innerText = memes[index];
}

function nextMeme() {
  index++;

  if (index >= memes.length) {
    document.getElementById("popup").style.display = "none";
  } else {
    showMeme();
  }
}
function startProcess() {
  let roll = document.getElementById("roll").value;
  let name = document.getElementById("name").value;

  if (roll === "" || name === "") {
    alert("Roll number aur name dono enter karo!");
    return;
  }

  document.getElementById("loader").style.display = "block";
  document.getElementById("resultBox").style.display = "none";

  let progress = 0;
  let interval = setInterval(() => {
    progress += 10;
    document.getElementById("progress").style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      showResult(roll, name);
    }
  }, 200);
}function showResult(roll, name) {
  document.getElementById("loader").style.display = "none";
  document.getElementById("resultBox").style.display = "block";

  document.getElementById("rollDisplay").innerText = roll;
  document.getElementById("nameDisplay").innerText = name;

  setTimeout(() => {
    startPrank();
  }, 1500);
}