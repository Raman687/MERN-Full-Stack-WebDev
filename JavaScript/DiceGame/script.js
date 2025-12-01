function start() {
  console.log("Game started");

  document.getElementById("rollDice1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Roll() {
  console.log("Player 1 Playing");

  let Score = Number(document.getElementById("p1sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p1Dice").src = `${DF}.png`

  if (DF === 6) {
    document.getElementById("rollDice1").disabled = true;
    document.getElementById("rollDice2").disabled = false;
  } else {
    Score = Score + DF;

    document.getElementById("p1sc").innerText = Score;
  }
}

function p2Roll() {
  console.log("Playing 2 Playing");

  let Score = Number(document.getElementById("p2sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p2Dice").src = `${DF}.png`

  if (DF === 6) {
    document.getElementById("rollDice1").disabled = false;
    document.getElementById("rollDice2").disabled = true;
  } else {
    Score = Score + DF;

    document.getElementById("p2sc").innerText = Score;
  }
}
