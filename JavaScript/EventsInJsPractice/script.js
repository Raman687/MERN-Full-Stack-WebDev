const userColor = document.getElementById("BgColor");
userColor.addEventListener("change", () => changeBgColor(userColor.value));

function changeBgColor(BgColor) {
  document.getElementById("box").style.backgroundColor = BgColor;
}

const headingColor = document.getElementById("Hcolor");
headingColor.addEventListener("change", () => changeHeadingColor(headingColor.value));

function changeHeadingColor(Hcolor) {
  document.getElementById("h1").style.color = Hcolor;
}

const paragraphColor = document.getElementById("Pcolor");
paragraphColor.addEventListener("change", () => changeParagraphColor(paragraphColor.value));

function changeParagraphColor(Pcolor) {
  document.getElementById("p1").style.color = Pcolor;
}
