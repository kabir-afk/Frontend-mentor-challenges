const switchButton = document.querySelector("button");
const slider = document.querySelector(".slider");
switchButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  slider.style.left = document.body.classList.contains("dark-mode")
    ? "0.2em"
    : "60%";
});
