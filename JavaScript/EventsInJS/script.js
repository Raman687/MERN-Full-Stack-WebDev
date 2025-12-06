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

document.getElementById("c1").addEventListener("mouseenter", () => {
  fillcolor("violet");
});
document.getElementById("c1").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c2").addEventListener("mouseenter", () => {
  fillcolor("indigo");
});
document.getElementById("c2").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c3").addEventListener("mouseenter", () => {
  fillcolor("blue");
});
document.getElementById("c3").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c4").addEventListener("mouseenter", () => {
  fillcolor("green");
});
document.getElementById("c4").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c5").addEventListener("mouseenter", () => {
  fillcolor("yellow");
});
document.getElementById("c5").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c6").addEventListener("mouseenter", () => {
  fillcolor("orange");
});
document.getElementById("c6").addEventListener("mouseleave", () => {
  fillcolor("white");
});
document.getElementById("c7").addEventListener("mouseenter", () => {
  fillcolor("red");
});
document.getElementById("c7").addEventListener("mouseleave", () => {
  fillcolor("white");
});

function fillcolor(color) {
  console.log(color);

  document.getElementById("rainbowBulb").style.backgroundColor = color;
}
