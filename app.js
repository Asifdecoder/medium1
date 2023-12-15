let nav = document.querySelector(".nav");
let getbutton = document.getElementById("getStarted");
console.log(scrollY)
window.addEventListener("scroll", () => {
  if (window.scrollY >= 393.6) {
    nav.style.backgroundColor = "white";
    getbutton.style.backgroundColor = "rgb(26, 137, 23)";
  } else {
    nav.style.backgroundColor = "#ffc017";
    getbutton.style.backgroundColor = "black";
  }
});

