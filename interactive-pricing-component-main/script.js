let slider = document.getElementById("slider");
noUiSlider.create(slider, {
  start: [0, 100], // Initial slider values
  connect: true, // Connect the two handles with a colored bar
  step: 25,
  range: {
    // Define the range of the slider
    min: 0,
    max: 100,
  },
  behaviour: "tap-drag",
});

const pageViews = document.querySelector(".page-views");
const pricing = document.querySelector("#pricing");

let arrayPageViews = [
  "10K pageviews",
  "50K pageviews",
  "100K pageviews",
  "500k pageviews",
  "1M pageviews",
];
let arrayPricing = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];

function changeValues() {
  const sliderValues = slider.noUiSlider.get(); // Get the current slider values
  const sliderValue = parseFloat(sliderValues[0]); // Get the first value if using a range slider

  for (let index = 0; index < arrayPageViews.length; index++) {
    if (sliderValue == 25 * index) {
      pageViews.innerHTML = arrayPageViews[index];
      pricing.innerHTML = arrayPricing[index];
    }
  }
}

slider.noUiSlider.on("update", changeValues);
let discount = document.querySelector(".discount");
// console.log(discount);
let viewportWidth = window.innerWidth;
if (viewportWidth < 1000) {
  discount.innerHTML = "-25%";
}
