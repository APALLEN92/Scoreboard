let homeScore = 0;
let guestScore = 0;
let reset = 0;

const homeDisplay = document.getElementById("num-one");
const guestDisplay = document.getElementById("num-two");

homeDisplay.textContent = homeScore;
guestDisplay.textContent = guestScore;

function plussOneHome() {
  homeScore += 1;
  homeDisplay.textContent = homeScore;
}

function plussTwoHome() {
  homeScore += 2;
  homeDisplay.textContent = homeScore;
}

function plussThreeHome() {
  homeScore += 3;
  homeDisplay.textContent = homeScore;
}

function plussOneGuest() {
  guestScore += 1;
  guestDisplay.textContent = guestScore;
}

function plussTwoGuest() {
  guestScore += 2;
  guestDisplay.textContent = guestScore;
}

function plussThreeGuest() {
  guestScore += 3;
  guestDisplay.textContent = guestScore;
}

function resetScores() {
 homeScore = 0;
 guestScore = 0;
 homeDisplay.textContent = homeScore;
 guestDisplay.textContent = guestScore;
  
}
