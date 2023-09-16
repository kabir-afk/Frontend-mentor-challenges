let bar = document.querySelectorAll(".bar");
let barAmount = document.querySelectorAll(".bar-amount");
fetch("data.json")
  .then((response) => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Handle the JSON data
    // console.log("JSON file fetched successfully");

    // Now you can manipulate the fetched data here
    for (let index = 0; index < data.length; index++) {
      const element = data[index].amount;
      // console.log(element);
      bar[index].style.height = element * 2.5 + "px";
      barAmount[index].innerHTML = "$" + element;
      bar[index].addEventListener('mouseover',()=>{
        barAmount[index].style.visibility = "visible";
      })
      bar[index].addEventListener('mouseleave',()=>{
        barAmount[index].style.visibility = "hidden";
      })
    }
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
  });