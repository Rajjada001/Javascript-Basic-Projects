const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "yellow",
  "orange",
  "#212121"
];
// Declare variables
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Get random number b/w 0-n colors[n]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
