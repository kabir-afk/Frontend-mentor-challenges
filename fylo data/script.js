const fileField = document.querySelectorAll("input");
const Bar = document.querySelector(".container-data__bar");
const loaderBar = document.querySelector(".container-data__loader");
const leftData = document.querySelector(".mb");
const usedMBLabel = document.querySelector(".used-mb");

const updateDataAnimation = (sizeInMB) => {
  let finalLeftData = parseInt(leftData.textContent) - sizeInMB;

  const animation = setInterval(() => {
    leftData.textContent--;
    usedMBLabel.textContent++;

    if (leftData.textContent == finalLeftData) {
      clearInterval(animation);
    }
  }, 10);
  let completedMBPercentage = (parseInt(usedMBLabel.textContent) / 1000) * 100;
  // console.log(Bar.offsetWidth);
  loaderBar.style.width =
    (completedMBPercentage / 100) * Bar.offsetWidth + "px";
};

fileField.forEach((field) => {
  field.addEventListener("change", () => {
    const selectedFile = field.files[0];

    // Get the size of the selected file in bytes
    const fileSizeInBytes = selectedFile.size;

    // Convert file size to kilobytes, megabytes, etc. if needed
    const fileSizeInKilobytes = fileSizeInBytes / 1024;
    const mb = fileSizeInKilobytes / 1024;

    updateDataAnimation(Math.floor(mb));
  });
});
