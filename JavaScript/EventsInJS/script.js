function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function Red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function Green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

function Blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}

const userColor = document.getElementById("colour");
userColor.addEventListener("change", () => changeBulbColor(userColor.value));

function changeBulbColor(colour) {
  document.getElementById("bulb").style.backgroundColor = colour;
}

function SB_control() {
  const btn = document.getElementById("SB_btn");
  if (btn.innerText === "On") {
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
  } else if (btn.innerText === "Off") {
    document.getElementById("SB_btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

