// let questions = document.querySelectorAll(".questions");
// let answers = document.querySelectorAll(".answers");
// let arrows = document.querySelectorAll(".arrow");
// questions.forEach((question, index) => {
//     question.addEventListener("click", () => {
//         answers[index].classList.toggle("open-ans");
//         arrows[index].style.transform = answers[index].classList.contains("open-ans") ? "rotate(180deg)" : "rotate(0deg)";
//     });
// });

let questions = document.querySelectorAll(".questions");
let answers = document.querySelectorAll(".answers");
let arrow = document.querySelectorAll(".arrow");
questions.forEach((question,index) =>{
        question.addEventListener("click",()=>{
            answers[index].classList.toggle("open-ans");
            arrow[index].style.transform = answers[index].classList.contains("open-ans") ? "rotate(180deg)" : "rotate(0deg)"
            question.classList.toggle("bold");
        })
    }
)