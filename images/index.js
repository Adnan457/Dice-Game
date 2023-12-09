// Step 3 - Create Random Numbers for Player 1 and Player 2
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Step 4 - Change the <img> for Player 1
var imgElement1 = document.querySelector(".img1");
imgElement1.setAttribute("src", "./images/dice" + randomNumber1 + ".png?" + new Date().getTime());
imgElement1.setAttribute("alt", "Dice " + randomNumber1);

// Step 5 - Change the <img> for Player 2
var imgElement2 = document.querySelector(".img2");
imgElement2.setAttribute("src", "./images/dice" + randomNumber2 + ".png?" + new Date().getTime());
imgElement2.setAttribute("alt", "Dice " + randomNumber2);

// Step 6 - Change the Title to Display a Winner or Draw
var titleElement = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  titleElement.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  titleElement.textContent = "Player 2 Wins!";
} else {
  titleElement.textContent = "It's a Draw!";
}

// Output the random numbers and image sources to the console for verification
console.log("Random Number 1:", randomNumber1);
console.log("Image Source 1:", imgElement1.getAttribute("src"));

console.log("Random Number 2:", randomNumber2);
console.log("Image Source 2:", imgElement2.getAttribute("src"));
