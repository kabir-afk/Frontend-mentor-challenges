    const slides = document.querySelectorAll(".testimonial");

    let counter = 0;
    slides.forEach(
      (slide,index) => {
      slide.style.left = `${index*100}%`
    }
  )
  const goNext = () =>{
    if(counter >= 1)
    return ;
    counter++;
    slideImage();
}
const goPrev = () =>{
    if(counter <= 0)
    return ;
    // alert("heheh");
    counter--;
    slideImage();
  }

  const slideImage = () =>{
    slides.forEach(
      (slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
      }
    )
  }