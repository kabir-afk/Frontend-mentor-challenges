const shareButton = document.getElementById("share-button");
const shareIcons = document.querySelector(".share-icons");
const shareSvgPath = document.querySelector("#share-svg-path");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("darken");
  shareSvgPath.style.fill = shareButton.classList.contains(
    "darken"
  )
    ? "hsl(210, 46%, 95%)" // lightGrayishBlue
    : "hsl(214, 17%, 51%)"; // desaturatedDarkGrayishBlue
  shareIcons.classList.toggle("share-icons-visible");
});
