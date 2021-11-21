// Set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Change the color of increase if the count > 0
    if (count > 0) {
      value.style.color = "green";
    }
    // Change to red color if count < 0
    if (count < 0) {
      value.style.color = "red";
    }
    // Change to black color if count = 0
    if (count === 0) {
      value.style.color = "#333";
    }
    value.textContent = count;
  });
});
