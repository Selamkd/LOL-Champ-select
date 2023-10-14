const startPage = document.getElementById("main-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("results-page");
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button")

// on click change pages

startButton.addEventListener("click", ()=>{
    startPage.style.display = "none";
    quizPage.style.display = "block";


    // call a function that displays the quiz container with questions and choices 
})
submitButton.addEventListener("click", ()=>{
    quizPage.style.display = "none";
    startPage.style.display = "none"
    resultPage.style.display = "block"
})